import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function CareersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-28 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Join Our <span className="text-blue-600">Mission</span>
            </h1>
            <p className="max-w-[600px] mx-auto text-gray-500 md:text-xl/relaxed">
              Help us revolutionize personal finance and make a real impact on people's lives.
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="w-full py-20 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">Open Positions</h2>
          <div className="grid gap-6">
            {[
              {
                title: "Senior Full Stack Developer",
                department: "Engineering",
                location: "Remote",
                type: "Full-time",
              },
              {
                title: "Product Manager",
                department: "Product",
                location: "Hybrid",
                type: "Full-time",
              },
              {
                title: "Financial Analyst",
                department: "Finance",
                location: "On-site",
                type: "Full-time",
              },
            ].map((job, i) => (
              <Card key={i} className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <div className="text-gray-500 mt-1">
                      {job.department} · {job.location} · {job.type}
                    </div>
                  </div>
                  <Button>Apply Now</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">Why Join Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Competitive Package",
                description: "Excellent salary, equity, and comprehensive benefits package",
              },
              {
                title: "Work-Life Balance",
                description: "Flexible working hours and generous PTO policy",
              },
              {
                title: "Growth Opportunities",
                description: "Continuous learning and career development programs",
              },
            ].map((benefit, i) => (
              <Card key={i} className="p-6">
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-500">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
