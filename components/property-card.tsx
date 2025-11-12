"use client"

import Image from "next/image"
import Link from "next/link"
import { Bed, Bath, Maximize, Building2 } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Property } from "@/lib/mock-data"

interface PropertyCardProps {
  property: Property
  onClick?: () => void
}

export function PropertyCard({ property, onClick }: PropertyCardProps) {
  const getBadgeColor = (badge: string | null | undefined) => {
    switch (badge) {
      case "NEW":
        return "bg-green-600 text-white hover:bg-green-700"
      case "URGENT":
        return "bg-red-600 text-white hover:bg-red-700"
      case "TOP":
        return "bg-primary text-primary-foreground hover:bg-primary/90"
      default:
        return ""
    }
  }

  return (
    <Link href={`/property/${property.id}`} onClick={onClick}>
      <Card className="overflow-hidden hover:shadow-md transition-all cursor-pointer border border-border bg-card">
        <div className="flex gap-3 p-3">
          <div className="relative w-48 h-36 flex-shrink-0 rounded overflow-hidden">
            <Image src={property.image || "/placeholder.svg"} alt={property.title} fill className="object-cover" />
            {property.badge && (
              <Badge
                className={`absolute top-2 left-2 text-xs font-semibold px-2 py-0.5 ${getBadgeColor(property.badge)}`}
              >
                {property.badge}
              </Badge>
            )}
          </div>
          <div className="flex-1 flex flex-col justify-between min-w-0">
            <div>
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="font-semibold text-base text-foreground line-clamp-1">{property.title}</h3>
                <p className="font-bold text-lg text-primary whitespace-nowrap flex-shrink-0">
                  €{property.price.toLocaleString()}
                  {property.listingType === "rent" && <span className="text-sm font-normal">/mo</span>}
                </p>
              </div>
              <p className="text-sm text-muted-foreground mb-2 line-clamp-1">
                {property.address}, {property.city}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                {property.bedrooms > 0 && (
                  <div className="flex items-center gap-1">
                    <Bed className="h-4 w-4" />
                    <span>
                      {property.bedrooms} {property.bedrooms === 1 ? "room" : "rooms"}
                    </span>
                  </div>
                )}
                {property.bathrooms > 0 && (
                  <div className="flex items-center gap-1">
                    <Bath className="h-4 w-4" />
                    <span>{property.bathrooms}</span>
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <Maximize className="h-4 w-4" />
                  <span>{property.size} m²</span>
                </div>
                {property.floor !== undefined && property.floor > 0 && (
                  <div className="flex items-center gap-1">
                    <Building2 className="h-4 w-4" />
                    <span>Floor {property.floor}</span>
                  </div>
                )}
              </div>
              {property.yearBuilt && (
                <p className="text-xs text-muted-foreground mb-1">Built in {property.yearBuilt}</p>
              )}
            </div>
            {property.agency && (
              <div className="flex items-center justify-between pt-2 border-t border-border">
                <div className="text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">{property.agency}</span>
                  {property.agent && <span className="ml-1">• {property.agent}</span>}
                </div>
                <Badge variant="outline" className="text-xs">
                  {property.listingType === "sale" ? "For Sale" : "For Rent"}
                </Badge>
              </div>
            )}
          </div>
        </div>
      </Card>
    </Link>
  )
}
