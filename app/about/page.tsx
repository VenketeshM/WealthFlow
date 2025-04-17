import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Phone } from "lucide-react"
import { getImagePath } from "@/lib/image-path"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-28 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Our Mission is Your <span className="text-blue-600">Financial Success</span>
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-xl/relaxed xl:text-xl/relaxed">
                  Building the most intuitive and powerful financial platform to help everyone achieve financial freedom.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[550px] aspect-video overflow-hidden rounded-2xl shadow-2xl">
                <img
                  alt="Financial dashboard"
                  className="object-cover object-center"
                  src={getImagePath('images/dashboard-preview.png')}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creator Section */}
      <section className="w-full py-20 md:py-28 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet the Creator</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <Card className="p-6">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-48 h-48 rounded-full overflow-hidden">
                  <img
                    alt="Venketesh M"
                    className="w-full h-full object-cover"
                    src={getImagePath('images/profile.jpg')}
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">Venketesh M</h3>
                  <p className="text-gray-600 mb-4">
                    Creator & Full Stack Developer of Wealth Flow
                  </p>
                  <p className="text-gray-600 mb-6">
                    Passionate about creating intuitive financial tools that help people manage their wealth effectively
                    and achieve their financial goals.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <Link
                      href="https://github.com/VenketeshM"
                      target="_blank"
                      className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
                    >
                      <Github className="h-5 w-5" />
                      <span>GitHub</span>
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/venketesh-kini-m"
                      target="_blank"
                      className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span>LinkedIn</span>
                    </Link>
                    <Link
                      href="mailto:venketeshofficial.1@gmail.com"
                      className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
                    >
                      <Mail className="h-5 w-5" />
                      <span>Email</span>
                    </Link>
                    <Link
                      href="https://wa.me/7907758505"
                      target="_blank"
                      className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
                    >
                      <Phone className="h-5 w-5" />
                      <span>WhatsApp</span>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center">Our Story</h2>
            <p className="text-gray-600">
              Wealth Flow was created with a vision to revolutionize personal finance management. By combining
              cutting-edge technology with user-friendly design, we're making financial management accessible and
              intuitive for everyone.
            </p>
            <p className="text-gray-600">
              Our platform helps users track their assets, manage investments, and plan for their financial future
              all in one place. We're committed to continuous innovation and improvement to serve our users better.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
