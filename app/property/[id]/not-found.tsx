import Link from "next/link"
import { Home } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Property Not Found</h1>
        <p className="text-muted-foreground mb-8">The property you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link href="/search">
            <Home className="h-4 w-4 mr-2" />
            Back to Search
          </Link>
        </Button>
      </div>
    </div>
  )
}
