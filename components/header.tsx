'use client'

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Home, User, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAccount, useLogout } from "@/components/api/login/hooks"
import { getToken } from "@/lib/auth"

export function Header() {
  const router = useRouter()
  const { data: account, isLoading: accountLoading } = useAccount()
  const { mutate: logout, isPending: isLoggingOut } = useLogout()
  const token = typeof window !== 'undefined' ? getToken() : null
  const isAuthenticated = !!token

  const handleLogout = () => {
    logout(undefined, {
      onSuccess: () => {
        router.push('/')
      },
    })
  }

  const displayName = account
    ? `${account.firstName || ''} ${account.lastName || ''}`.trim() || account.email
    : null

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold text-xl">
          <Home className="h-6 w-6 text-primary" />
          <span className="text-foreground">EstateHub</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Buy
          </Link>
          <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Rent
          </Link>
          <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Agents
          </Link>
          <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <>
              {accountLoading ? (
                <div className="text-sm text-muted-foreground">Loading...</div>
              ) : displayName ? (
                <div className="hidden sm:flex items-center gap-2 text-sm text-foreground">
                  <User className="h-4 w-4" />
                  <span className="max-w-[150px] truncate">{displayName}</span>
                </div>
              ) : null}
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                disabled={isLoggingOut}
                className="hidden sm:flex"
              >
                <LogOut className="h-4 w-4 mr-2" />
                {isLoggingOut ? 'Logging out...' : 'Logout'}
              </Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost" size="sm" className="hidden sm:flex">
                  <User className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="sm">Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
