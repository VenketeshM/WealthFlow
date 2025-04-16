import { Card } from "@/components/ui/card"

export default function PressPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-28 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Press <span className="text-blue-600">Room</span>
            </h1>
            <p className="max-w-[600px] mx-auto text-gray-500 md:text-xl/relaxed">
              Latest news, press releases, and media resources about Wealth Flow.
            </p>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="w-full py-20 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">Latest Press Releases</h2>
          <div className="grid gap-6">
            {[
              {
                title: "Wealth Flow Raises $50M Series B to Accelerate Growth",
                date: "April 16, 2025",
                excerpt:
                  "Funding will be used to expand product offerings and accelerate international expansion.",
              },
              {
                title: "Wealth Flow Launches Revolutionary AI-Powered Financial Advisory",
                date: "March 28, 2025",
                excerpt:
                  "New feature uses advanced AI to provide personalized financial recommendations.",
              },
              {
                title: "Wealth Flow Reaches 1 Million Active Users Milestone",
                date: "March 15, 2025",
                excerpt:
                  "Platform celebrates significant user growth and announces new features.",
              },
            ].map((release, i) => (
              <Card key={i} className="p-6">
                <div className="space-y-2">
                  <div className="text-sm text-gray-500">{release.date}</div>
                  <h3 className="text-xl font-semibold">{release.title}</h3>
                  <p className="text-gray-500">{release.excerpt}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="w-full py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Media Contact</h2>
            <p className="text-gray-500 mb-6">
              For press inquiries, please contact our media relations team:
            </p>
            <div className="space-y-2">
              <p className="font-medium">Press Team</p>
              <p className="text-blue-600">press@wealthflow.com</p>
              <p className="text-gray-500">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
