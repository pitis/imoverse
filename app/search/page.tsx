"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { PropertyCard } from "@/components/property-card"
import { mockProperties } from "@/lib/mock-data"
import type { Property } from "@/lib/mock-data"
import { MapView } from "@/components/map-view"
import { FilterPanel } from "@/components/filter-panel"
import { Button } from "@/components/ui/button"
import { SlidersHorizontal } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export interface Filters {
  propertyType: string
  priceMin: number
  priceMax: number
  bedrooms: number
  sizeMin: number
  sizeMax: number
  amenities: string[]
  sortBy: string
}

export default function SearchPage() {
  const [filters, setFilters] = useState<Filters>({
    propertyType: "all",
    priceMin: 0,
    priceMax: 1000000,
    bedrooms: 0,
    sizeMin: 0,
    sizeMax: 500,
    amenities: [],
    sortBy: "newest",
  })

  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)

  const filteredProperties = useMemo(() => {
    const filtered = mockProperties.filter((property) => {
      if (filters.propertyType !== "all" && property.type !== filters.propertyType) {
        return false
      }
      if (property.price < filters.priceMin || property.price > filters.priceMax) {
        return false
      }
      if (filters.bedrooms > 0 && property.bedrooms < filters.bedrooms) {
        return false
      }
      if (property.size < filters.sizeMin || property.size > filters.sizeMax) {
        return false
      }
      if (filters.amenities.length > 0) {
        const hasAllAmenities = filters.amenities.every((amenity) => property.amenities.includes(amenity))
        if (!hasAllAmenities) return false
      }
      return true
    })

    // Sort
    switch (filters.sortBy) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "newest":
      default:
        break
    }

    return filtered
  }, [filters])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex flex-col lg:flex-row">
        {/* Map Section */}
        <div className="lg:w-1/2 h-[400px] lg:h-auto lg:sticky lg:top-16">
          <MapView
            properties={filteredProperties}
            selectedProperty={selectedProperty}
            onPropertySelect={setSelectedProperty}
          />
        </div>

        {/* Listings Section */}
        <div className="lg:w-1/2 bg-background">
          <div className="sticky top-16 z-10 bg-card border-b border-border shadow-sm">
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-xl font-bold text-foreground">
                    {filteredProperties.length} {filteredProperties.length === 1 ? "Property" : "Properties"} Found
                  </h1>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {filters.propertyType !== "all" ? filters.propertyType : "All types"} •{" "}
                    {filters.bedrooms > 0 ? `${filters.bedrooms}+ beds` : "Any beds"}
                  </p>
                </div>

                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm" className="lg:hidden bg-transparent">
                      <SlidersHorizontal className="h-4 w-4 mr-2" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[300px] overflow-y-auto">
                    <SheetHeader>
                      <SheetTitle>Filters</SheetTitle>
                    </SheetHeader>
                    <div className="mt-4">
                      <FilterPanel filters={filters} onFiltersChange={setFilters} />
                    </div>
                  </SheetContent>
                </Sheet>
              </div>

              <div className="hidden lg:block">
                <FilterPanel filters={filters} onFiltersChange={setFilters} />
              </div>
            </div>
          </div>

          <div className="p-4 space-y-3 overflow-y-auto">
            {filteredProperties.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No properties match your criteria</p>
                <Button
                  variant="outline"
                  className="mt-4 bg-transparent"
                  onClick={() =>
                    setFilters({
                      propertyType: "all",
                      priceMin: 0,
                      priceMax: 1000000,
                      bedrooms: 0,
                      sizeMin: 0,
                      sizeMax: 500,
                      amenities: [],
                      sortBy: "newest",
                    })
                  }
                >
                  Reset Filters
                </Button>
              </div>
            ) : (
              filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} onClick={() => setSelectedProperty(property)} />
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
