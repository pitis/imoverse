import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Bed, Bath, Maximize, Building2, MapPin, Calendar, Phone, Mail, Share2 } from "lucide-react"
import { mockProperties } from "@/lib/mock-data"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export function generateStaticParams() {
  return mockProperties.map((property) => ({
    id: property.id,
  }))
}

export default function PropertyDetailsPage({ params }: { params: { id: string } }) {
  const property = mockProperties.find((p) => p.id === params.id)

  if (!property) {
    notFound()
  }

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
    <div className="min-h-screen bg-background">
      {/* Header with back button */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/search"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to search results
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image src={property.image || "/placeholder.svg"} alt={property.title} fill className="object-cover" />
              {property.badge && (
                <Badge
                  className={`absolute top-4 left-4 text-sm font-semibold px-3 py-1 ${getBadgeColor(property.badge)}`}
                >
                  {property.badge}
                </Badge>
              )}
              <Button variant="secondary" size="sm" className="absolute top-4 right-4">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>

            {/* Property Title and Price */}
            <div>
              <div className="flex items-start justify-between gap-4 mb-2">
                <h1 className="text-3xl font-bold text-foreground">{property.title}</h1>
                <div className="text-right">
                  <p className="text-3xl font-bold text-primary">€{property.price.toLocaleString()}</p>
                  {property.listingType === "rent" && <p className="text-sm text-muted-foreground">per month</p>}
                </div>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>
                  {property.address}, {property.city}
                </span>
              </div>
            </div>

            {/* Key Features */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Property Details</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {property.bedrooms > 0 && (
                  <div className="flex flex-col items-center text-center">
                    <Bed className="h-8 w-8 text-primary mb-2" />
                    <p className="text-2xl font-semibold">{property.bedrooms}</p>
                    <p className="text-sm text-muted-foreground">{property.bedrooms === 1 ? "Bedroom" : "Bedrooms"}</p>
                  </div>
                )}
                {property.bathrooms > 0 && (
                  <div className="flex flex-col items-center text-center">
                    <Bath className="h-8 w-8 text-primary mb-2" />
                    <p className="text-2xl font-semibold">{property.bathrooms}</p>
                    <p className="text-sm text-muted-foreground">
                      {property.bathrooms === 1 ? "Bathroom" : "Bathrooms"}
                    </p>
                  </div>
                )}
                <div className="flex flex-col items-center text-center">
                  <Maximize className="h-8 w-8 text-primary mb-2" />
                  <p className="text-2xl font-semibold">{property.size}</p>
                  <p className="text-sm text-muted-foreground">m²</p>
                </div>
                {property.floor !== undefined && property.floor > 0 && (
                  <div className="flex flex-col items-center text-center">
                    <Building2 className="h-8 w-8 text-primary mb-2" />
                    <p className="text-2xl font-semibold">{property.floor}</p>
                    <p className="text-sm text-muted-foreground">Floor</p>
                  </div>
                )}
              </div>
            </Card>

            {/* Description */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Description</h2>
              <p className="text-muted-foreground leading-relaxed">{property.description}</p>
            </Card>

            {/* Additional Information */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Additional Information</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Property Type</span>
                  <span className="font-medium">{property.type}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Listing Type</span>
                  <span className="font-medium capitalize">{property.listingType}</span>
                </div>
                {property.yearBuilt && (
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Year Built</span>
                    <span className="font-medium">{property.yearBuilt}</span>
                  </div>
                )}
                {property.floor !== undefined && property.floor > 0 && (
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Floor</span>
                    <span className="font-medium">{property.floor}</span>
                  </div>
                )}
              </div>
            </Card>

            {/* Amenities */}
            {property.amenities.length > 0 && (
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Amenities</h2>
                <div className="flex flex-wrap gap-2">
                  {property.amenities.map((amenity) => (
                    <Badge key={amenity} variant="secondary" className="capitalize">
                      {amenity}
                    </Badge>
                  ))}
                </div>
              </Card>
            )}
          </div>

          {/* Sidebar - Agent Contact */}
          <div className="lg:col-span-1">
            <div className="sticky top-4">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Contact Agent</h2>
                {property.agency && (
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground mb-1">Agency</p>
                    <p className="font-semibold text-lg">{property.agency}</p>
                  </div>
                )}
                {property.agent && (
                  <div className="mb-6">
                    <p className="text-sm text-muted-foreground mb-1">Agent</p>
                    <p className="font-medium">{property.agent}</p>
                  </div>
                )}
                <Separator className="my-4" />
                <div className="space-y-3">
                  <Button className="w-full" size="lg">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Agent
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent" size="lg">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </div>
                <Separator className="my-4" />
                <div className="text-sm text-muted-foreground">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>Available for viewing</span>
                  </div>
                  <p className="text-xs">Contact the agent to schedule a visit</p>
                </div>
              </Card>

              {/* Map Preview */}
              <Card className="p-6 mt-4">
                <h2 className="text-lg font-semibold mb-4">Location</h2>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-8 w-8 mx-auto mb-2" />
                    <p className="text-sm">
                      {property.city}
                      <br />
                      {property.address}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
