"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface SearchBarProps {
  onSearch?: (filters: SearchFilters) => void
  variant?: "hero" | "compact"
}

export interface SearchFilters {
  location: string
  propertyType: string
  listingType: string
  priceRange: string
}

export function SearchBar({ onSearch, variant = "hero" }: SearchBarProps) {
  const router = useRouter()
  const [filters, setFilters] = useState<SearchFilters>({
    location: "",
    propertyType: "all",
    listingType: "sale",
    priceRange: "all",
  })

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (filters.location) params.set("location", filters.location)
    if (filters.propertyType !== "all") params.set("type", filters.propertyType)
    if (filters.listingType) params.set("listing", filters.listingType)
    if (filters.priceRange !== "all") params.set("price", filters.priceRange)

    router.push(`/search?${params.toString()}`)
    onSearch?.(filters)
  }

  if (variant === "compact") {
    return (
      <div className="flex gap-2 flex-wrap">
        <Input
          placeholder="Location..."
          value={filters.location}
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          className="flex-1 min-w-[200px] bg-card"
        />
        <Select value={filters.propertyType} onValueChange={(value) => setFilters({ ...filters, propertyType: value })}>
          <SelectTrigger className="w-[150px] bg-card">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="Apartment">Apartment</SelectItem>
            <SelectItem value="House">House</SelectItem>
            <SelectItem value="Land">Land</SelectItem>
            <SelectItem value="Commercial">Commercial</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={handleSearch} className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Search className="h-4 w-4" />
        </Button>
      </div>
    )
  }

  return (
    <div className="bg-card rounded-xl shadow-xl p-6 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <Input
          placeholder="City, area..."
          value={filters.location}
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          className="bg-background"
        />

        <Select value={filters.propertyType} onValueChange={(value) => setFilters({ ...filters, propertyType: value })}>
          <SelectTrigger className="bg-background">
            <SelectValue placeholder="Property Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="Apartment">Apartment</SelectItem>
            <SelectItem value="House">House</SelectItem>
            <SelectItem value="Land">Land</SelectItem>
            <SelectItem value="Commercial">Commercial</SelectItem>
          </SelectContent>
        </Select>

        <Select value={filters.listingType} onValueChange={(value) => setFilters({ ...filters, listingType: value })}>
          <SelectTrigger className="bg-background">
            <SelectValue placeholder="Sale/Rent" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sale">For Sale</SelectItem>
            <SelectItem value="rent">For Rent</SelectItem>
          </SelectContent>
        </Select>

        <Select value={filters.priceRange} onValueChange={(value) => setFilters({ ...filters, priceRange: value })}>
          <SelectTrigger className="bg-background">
            <SelectValue placeholder="Price Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Any Price</SelectItem>
            <SelectItem value="0-100000">€0 - €100,000</SelectItem>
            <SelectItem value="100000-300000">€100,000 - €300,000</SelectItem>
            <SelectItem value="300000-500000">€300,000 - €500,000</SelectItem>
            <SelectItem value="500000+">€500,000+</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button
        onClick={handleSearch}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
        size="lg"
      >
        <Search className="h-5 w-5 mr-2" />
        Search Properties
      </Button>
    </div>
  )
}
