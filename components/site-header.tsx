"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Bell } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"
import { CurrencySelector } from "@/components/currency-selector"
import { UserDropdown } from "@/components/user-dropdown"
import { useAuth } from "@/contexts/auth-context"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function SiteHeader() {
  const pathname = usePathname()
  const isMobile = useMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, isAuthenticated, logout } = useAuth()

  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/dashboard",
      label: "Dashboard",
      active: pathname === "/dashboard",
    },
    {
      href: "/assets",
      label: "Asset Management",
      active: pathname === "/assets",
    },
    {
      href: "/banking",
      label: "Banking",
      active: pathname === "/banking",
    },
    {
      href: "/budgeting",
      label: "Budgeting",
      active: pathname === "/budgeting",
    },
    {
      href: "/credit",
      label: "Credit Tools",
      active: pathname === "/credit",
    },
    {
      href: "/taxation",
      label: "Taxation",
      active: pathname === "/taxation",
    },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl text-primary-600">Wealth Flow</span>
          </Link>
          {!isMobile && (
            <nav className="hidden gap-8 md:flex">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                    route.active ? "text-primary-600" : "text-gray-600"
                  }`}
                >
                  {route.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
        <div className="flex items-center gap-3">
          <CurrencySelector />

          {!isMobile ? (
            <>
              {isAuthenticated ? (
                <>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="rounded-full relative">
                        <Bell className="h-5 w-5" />
                        <span className="sr-only">Notifications</span>
                        <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500"></span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[300px]">
                      <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>New features available</DropdownMenuItem>
                      <DropdownMenuItem>Your account has been updated</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <UserDropdown />
                </>
              ) : (
                <>
                  <Button variant="ghost" size="sm" asChild className="text-gray-600 hover:text-primary-600">
                    <Link href="/login">Login</Link>
                  </Button>
                  <Button size="sm" asChild className="bg-primary-600 hover:bg-primary-700 rounded-full px-6">
                    <Link href="/login?tab=register">Sign Up</Link>
                  </Button>
                </>
              )}
            </>
          ) : (
            <Button variant="ghost" size="icon" aria-label="Toggle Menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          )}
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className="container pb-6 animate-fade-in">
          <nav className="flex flex-col gap-3 mt-2">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`rounded-md px-4 py-3 text-sm font-medium transition-colors hover:bg-primary-50 ${
                  route.active ? "bg-primary-50 text-primary-600" : "text-gray-600"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {route.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-3 pt-4 border-t">
              {isAuthenticated ? (
                <>
                  <div className="flex items-center gap-3 px-4 py-2">
                    <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                      {user?.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-medium text-sm">{user?.name}</p>
                      <p className="text-xs text-gray-500">{user?.email}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="justify-start text-gray-600" asChild>
                    <Link href="/profile">Profile</Link>
                  </Button>
                  <Button variant="ghost" size="sm" className="justify-start text-gray-600" asChild>
                    <Link href="/settings">Settings</Link>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="justify-start text-destructive-600"
                    onClick={() => {
                      logout()
                      setIsMenuOpen(false)
                    }}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="ghost" size="sm" asChild className="justify-start text-gray-600">
                    <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                      Login
                    </Link>
                  </Button>
                  <Button size="sm" asChild className="justify-start bg-primary-600 hover:bg-primary-700 rounded-full">
                    <Link href="/login?tab=register" onClick={() => setIsMenuOpen(false)}>
                      Sign Up
                    </Link>
                  </Button>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
