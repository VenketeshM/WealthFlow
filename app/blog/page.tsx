import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-28 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Wealth Flow <span className="text-blue-600">Blog</span>
            </h1>
            <p className="max-w-[600px] mx-auto text-gray-500 md:text-xl/relaxed">
              Insights, tips, and strategies for better financial management.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="w-full py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "10 Tips for Smart Investment in 2025",
                category: "Investing",
                date: "April 16, 2025",
                image: "/placeholder.svg?height=200&width=400&query=investment",
                excerpt: "Learn the top investment strategies that will help you grow your wealth in 2025.",
              },
              {
                title: "Understanding Cryptocurrency Markets",
                category: "Crypto",
                date: "April 15, 2025",
                image: "/placeholder.svg?height=200&width=400&query=cryptocurrency",
                excerpt: "A comprehensive guide to understanding and navigating cryptocurrency markets.",
              },
              {
                title: "Budgeting Basics for Beginners",
                category: "Personal Finance",
                date: "April 14, 2025",
                image: "/placeholder.svg?height=200&width=400&query=budgeting",
                excerpt: "Master the fundamentals of personal budgeting with our step-by-step guide.",
              },
            ].map((post, i) => (
              <Card key={i} className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                    <span>{post.category}</span>
                    <span>·</span>
                    <span>{post.date}</span>
                  </div>
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-500 mb-4">{post.excerpt}</p>
                  <Link
                    href="#"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Read More →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
