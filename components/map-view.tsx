"use client"

import { useEffect, useRef } from "react"
import type { Property } from "@/lib/mock-data"

interface MapViewProps {
  properties: Property[]
  selectedProperty: Property | null
  onPropertySelect: (property: Property) => void
}

export function MapView({ properties, selectedProperty, onPropertySelect }: MapViewProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)
  const markersRef = useRef<any[]>([])

  useEffect(() => {
    if (typeof window === "undefined") return

    const initMap = async () => {
      // Dynamically import Leaflet
      const L = (await import("leaflet")).default
      await import("leaflet/dist/leaflet.css")

      // Fix for default marker icons
      delete (L.Icon.Default.prototype as any)._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      })

      if (!mapInstanceRef.current && mapRef.current) {
        // Initialize map centered on Romania
        mapInstanceRef.current = L.map(mapRef.current).setView([45.9432, 24.9668], 7)

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "© OpenStreetMap contributors",
        }).addTo(mapInstanceRef.current)
      }
    }

    initMap()

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [])

  useEffect(() => {
    if (!mapInstanceRef.current || typeof window === "undefined") return

    const updateMarkers = async () => {
      const L = (await import("leaflet")).default

      // Clear existing markers
      markersRef.current.forEach((marker) => marker.remove())
      markersRef.current = []

      // Add new markers
      properties.forEach((property) => {
        const isSelected = selectedProperty?.id === property.id

        const icon = L.divIcon({
          className: "custom-marker",
          html: `
            <div style="
              background-color: ${isSelected ? "#0d9488" : "#14b8a6"};
              color: white;
              padding: 8px 12px;
              border-radius: 20px;
              font-weight: 600;
              font-size: 14px;
              box-shadow: 0 2px 8px rgba(0,0,0,0.2);
              white-space: nowrap;
              transform: ${isSelected ? "scale(1.1)" : "scale(1)"};
              transition: all 0.2s;
            ">
              €${property.price.toLocaleString()}
            </div>
          `,
          iconSize: [80, 32],
          iconAnchor: [40, 16],
        })

        const marker = L.marker([property.lat, property.lng], { icon })
          .addTo(mapInstanceRef.current)
          .on("click", () => onPropertySelect(property))

        markersRef.current.push(marker)
      })

      // Fit bounds to show all markers
      if (properties.length > 0) {
        const bounds = L.latLngBounds(properties.map((p) => [p.lat, p.lng]))
        mapInstanceRef.current.fitBounds(bounds, { padding: [50, 50] })
      }
    }

    updateMarkers()
  }, [properties, selectedProperty, onPropertySelect])

  return <div ref={mapRef} className="w-full h-full" />
}
