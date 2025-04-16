import Link from "next/link"
import { Facebook, Github, Instagram, Linkedin, Mail, Phone } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-white py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-blue-600">Wealth Flow</h3>
            <p className="text-gray-600">
              Your all-in-one platform for managing assets, tracking spending, and planning for the future.
            </p>
            <div className="flex gap-4 mt-2">
              <Link
                href="https://github.com/VenketeshM"
                target="_blank"
                className="text-gray-500 hover:text-blue-600 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/venketesh-kini-m"
                target="_blank"
                className="text-gray-500 hover:text-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:venketeshofficial.1@gmail.com"
                className="text-gray-500 hover:text-blue-600 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
              <Link
                href="https://wa.me/7907758505"
                target="_blank"
                className="text-gray-500 hover:text-blue-600 transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-gray-900">Products</h3>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/assets", label: "Asset Management" },
                { href: "/banking", label: "Banking Integration" },
                { href: "/budgeting", label: "Budgeting Tools" },
                { href: "/credit", label: "Credit Management" },
                { href: "/taxation", label: "Tax Planning" },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="text-gray-600 hover:text-blue-600 transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-gray-900">Company</h3>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/about", label: "About Me" },
                { href: "/blog", label: "Blog" },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="text-gray-600 hover:text-blue-600 transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-gray-900">Legal</h3>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/terms", label: "Terms of Service" },
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/cookies", label: "Cookie Policy" },
                { href: "/compliance", label: "Compliance" },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="text-gray-600 hover:text-blue-600 transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        <div className="mt-12 border-t pt-8">
          <p className="text-center text-gray-500">
            {new Date().getFullYear()} Wealth Flow by Venketesh M. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
