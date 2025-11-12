"use client"

import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"
import type { Filters } from "@/app/search/page"

interface FilterPanelProps {
  filters: Filters
  onFiltersChange: (filters: Filters) => void
}

export function FilterPanel({ filters, onFiltersChange }: FilterPanelProps) {
  const [expandedSections, setExpandedSections] = useState({
    type: true,
    price: true,
    details: true,
    amenities: false,
  })

  const amenitiesList = ["balcony", "parking", "furnished", "garden", "pool", "elevator"]

  const handleAmenityToggle = (amenity: string) => {
    const newAmenities = filters.amenities.includes(amenity)
      ? filters.amenities.filter((a) => a !== amenity)
      : [...filters.amenities, amenity]
    onFiltersChange({ ...filters, amenities: newAmenities })
  }

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }))
  }

  return (
    <div className="space-y-4">
      {/* Property Type Section */}
      <div className="border-b border-border pb-4">
        <button onClick={() => toggleSection("type")} className="flex items-center justify-between w-full mb-3">
          <Label className="text-foreground font-semibold cursor-pointer">Property Type</Label>
          {expandedSections.type ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        {expandedSections.type && (
          <Select
            value={filters.propertyType}
            onValueChange={(value) => onFiltersChange({ ...filters, propertyType: value })}
          >
            <SelectTrigger className="bg-background">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="Apartment">Apartment</SelectItem>
              <SelectItem value="House">House</SelectItem>
              <SelectItem value="Land">Land</SelectItem>
              <SelectItem value="Commercial">Commercial</SelectItem>
            </SelectContent>
          </Select>
        )}
      </div>

      {/* Price Range Section */}
      <div className="border-b border-border pb-4">
        <button onClick={() => toggleSection("price")} className="flex items-center justify-between w-full mb-3">
          <Label className="text-foreground font-semibold cursor-pointer">Price Range</Label>
          {expandedSections.price ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        {expandedSections.price && (
          <div className="space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label className="text-xs text-muted-foreground mb-1">Min Price</Label>
                <Select
                  value={filters.priceMin.toString()}
                  onValueChange={(value) => onFiltersChange({ ...filters, priceMin: Number.parseInt(value) })}
                >
                  <SelectTrigger className="bg-background">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">€0</SelectItem>
                    <SelectItem value="50000">€50,000</SelectItem>
                    <SelectItem value="100000">€100,000</SelectItem>
                    <SelectItem value="200000">€200,000</SelectItem>
                    <SelectItem value="300000">€300,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-xs text-muted-foreground mb-1">Max Price</Label>
                <Select
                  value={filters.priceMax.toString()}
                  onValueChange={(value) => onFiltersChange({ ...filters, priceMax: Number.parseInt(value) })}
                >
                  <SelectTrigger className="bg-background">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="100000">€100,000</SelectItem>
                    <SelectItem value="300000">€300,000</SelectItem>
                    <SelectItem value="500000">€500,000</SelectItem>
                    <SelectItem value="1000000">€1,000,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Property Details Section */}
      <div className="border-b border-border pb-4">
        <button onClick={() => toggleSection("details")} className="flex items-center justify-between w-full mb-3">
          <Label className="text-foreground font-semibold cursor-pointer">Property Details</Label>
          {expandedSections.details ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        {expandedSections.details && (
          <div className="space-y-3">
            {/* Bedrooms */}
            <div>
              <Label className="text-xs text-muted-foreground mb-1">Minimum Bedrooms</Label>
              <Select
                value={filters.bedrooms.toString()}
                onValueChange={(value) => onFiltersChange({ ...filters, bedrooms: Number.parseInt(value) })}
              >
                <SelectTrigger className="bg-background">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">Any</SelectItem>
                  <SelectItem value="1">1+</SelectItem>
                  <SelectItem value="2">2+</SelectItem>
                  <SelectItem value="3">3+</SelectItem>
                  <SelectItem value="4">4+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Size Range */}
            <div>
              <Label className="text-xs text-muted-foreground mb-1">Size (m²)</Label>
              <div className="grid grid-cols-2 gap-2">
                <Select
                  value={filters.sizeMin.toString()}
                  onValueChange={(value) => onFiltersChange({ ...filters, sizeMin: Number.parseInt(value) })}
                >
                  <SelectTrigger className="bg-background">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">0 m²</SelectItem>
                    <SelectItem value="50">50 m²</SelectItem>
                    <SelectItem value="100">100 m²</SelectItem>
                    <SelectItem value="150">150 m²</SelectItem>
                  </SelectContent>
                </Select>
                <Select
                  value={filters.sizeMax.toString()}
                  onValueChange={(value) => onFiltersChange({ ...filters, sizeMax: Number.parseInt(value) })}
                >
                  <SelectTrigger className="bg-background">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="100">100 m²</SelectItem>
                    <SelectItem value="200">200 m²</SelectItem>
                    <SelectItem value="300">300 m²</SelectItem>
                    <SelectItem value="500">500 m²</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Amenities Section */}
      <div className="border-b border-border pb-4">
        <button onClick={() => toggleSection("amenities")} className="flex items-center justify-between w-full mb-3">
          <Label className="text-foreground font-semibold cursor-pointer">Amenities</Label>
          {expandedSections.amenities ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        {expandedSections.amenities && (
          <div className="space-y-2">
            {amenitiesList.map((amenity) => (
              <div key={amenity} className="flex items-center space-x-2">
                <Checkbox
                  id={amenity}
                  checked={filters.amenities.includes(amenity)}
                  onCheckedChange={() => handleAmenityToggle(amenity)}
                />
                <label htmlFor={amenity} className="text-sm text-foreground capitalize cursor-pointer">
                  {amenity}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Sort */}
      <div>
        <Label className="text-foreground font-semibold mb-2 block">Sort By</Label>
        <Select value={filters.sortBy} onValueChange={(value) => onFiltersChange({ ...filters, sortBy: value })}>
          <SelectTrigger className="bg-background">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Reset Button */}
      <Button
        variant="outline"
        className="w-full bg-transparent"
        onClick={() =>
          onFiltersChange({
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
        Reset All Filters
      </Button>
    </div>
  )
}
