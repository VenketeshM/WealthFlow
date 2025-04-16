"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ArrowRight,
  BarChart3,
  Check,
  CreditCard,
  HelpCircle,
  PieChart,
  Shield,
  Wallet,
  Star,
  TrendingUp,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredChildren } from "@/components/staggered-children"
import { ParallaxImage } from "@/components/parallax-image"
import { AnimatedCounter } from "@/components/animated-counter"
import { InteractiveCard } from "@/components/interactive-card"
import { FloatingElement } from "@/components/floating-elements"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-28 lg:py-32 bg-gradient-to-b from-blue-50 to-white overflow-hidden relative">
        {/* Floating elements in background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <FloatingElement className="absolute top-20 left-[10%]" delay={0.5} yOffset={15}>
            <div className="w-16 h-16 rounded-full bg-blue-100 opacity-60"></div>
          </FloatingElement>
          <FloatingElement className="absolute top-40 right-[15%]" delay={0} yOffset={20}>
            <div className="w-24 h-24 rounded-full bg-blue-200 opacity-40"></div>
          </FloatingElement>
          <FloatingElement className="absolute bottom-20 left-[20%]" delay={1.5} yOffset={10}>
            <div className="w-12 h-12 rounded-full bg-blue-300 opacity-30"></div>
          </FloatingElement>
          <FloatingElement className="absolute bottom-40 right-[25%]" delay={1} yOffset={12}>
            <div className="w-20 h-20 rounded-full bg-blue-100 opacity-50"></div>
          </FloatingElement>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <motion.div
              className="flex flex-col justify-center space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  Simplify Your <span className="text-blue-600">Financial Journey</span>
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-xl/relaxed xl:text-xl/relaxed">
                  Wealth Flow helps you manage assets, track spending, and plan for the future with elegance and
                  precision.
                </p>
              </div>
              <motion.div
                className="flex flex-col gap-3 min-[400px]:flex-row"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 rounded-full px-8">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative w-full max-w-[550px] aspect-video overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/sleek-financial-overview.png"
                  alt="Financial Dashboard Preview"
                  width={550}
                  height={310}
                  className="object-cover object-center"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                ></motion.div>
              </div>
            </motion.div>
          </div>

          {/* Stats Counter */}
          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {[
              { label: "Active Users", value: 250000, suffix: "+" },
              { label: "Transactions Processed", value: 15000000, suffix: "+" },
              { label: "Financial Institutions", value: 12000, suffix: "+" },
              { label: "Customer Satisfaction", value: 98, suffix: "%" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm">
                <AnimatedCounter
                  from={0}
                  to={stat.value}
                  suffix={stat.suffix}
                  className="text-2xl md:text-3xl font-bold text-blue-600 block"
                  delay={i * 0.1}
                  duration={2}
                />
                <span className="text-sm md:text-base text-gray-600">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-20 md:py-28 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <AnimatedSection>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2 max-w-[800px]">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How Wealth Flow Works</h2>
                <p className="text-gray-500 md:text-xl/relaxed">
                  Our simple process helps you take control of your finances in three easy steps.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <StaggeredChildren className="grid gap-8 md:grid-cols-3" staggerDelay={0.2}>
            {[
              {
                step: "1",
                title: "Connect Your Accounts",
                description:
                  "Securely link your bank accounts, credit cards, and investment portfolios to get a complete financial picture.",
                image: "/digital-connections.png",
              },
              {
                step: "2",
                title: "Analyze Your Finances",
                description:
                  "Our intelligent system categorizes transactions, tracks spending patterns, and identifies opportunities for improvement.",
                image: "/data-driven-growth.png",
              },
              {
                step: "3",
                title: "Optimize Your Wealth",
                description:
                  "Receive personalized recommendations to reduce expenses, increase savings, and grow your investments over time.",
                image: "/upward-trend-chart.png",
              },
            ].map((step, i) => (
              <InteractiveCard
                key={i}
                className="flex flex-col items-center text-center bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-xl">
                  {step.step}
                </div>
                <div className="relative w-full h-[200px] mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={step.image || "/placeholder.svg"}
                    alt={step.title}
                    width={300}
                    height={200}
                    className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </InteractiveCard>
            ))}
          </StaggeredChildren>

          <AnimatedSection delay={0.4} direction="up">
            <div className="mt-16 text-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full px-8">
                Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features Section with Parallax */}
      <section className="w-full py-20 md:py-28 lg:py-32 bg-gray-50 overflow-hidden">
        <div className="container px-4 md:px-6">
          <AnimatedSection>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2 max-w-[800px]">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Powerful Financial Tools
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed">
                  Everything you need to take control of your financial life in one elegant platform.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid gap-12 lg:grid-cols-2 items-center mb-16">
            <AnimatedSection direction="left">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-blue-100 p-2 text-blue-600">
                  <Wallet className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">Complete Financial Overview</h3>
                <p className="text-gray-600">
                  Get a holistic view of your finances with our intuitive dashboard. Track your net worth, monitor
                  spending patterns, and visualize your financial health in real-time.
                </p>
                <ul className="space-y-2">
                  {["Real-time account syncing", "Customizable dashboard", "Visual spending breakdowns"].map(
                    (feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <ParallaxImage
                  src="/financial-dashboard-detailed.png"
                  alt="Financial Dashboard"
                  width={600}
                  height={400}
                  className="w-full h-[350px]"
                />
              </div>
            </AnimatedSection>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 items-center mb-16">
            <AnimatedSection direction="left" className="order-2 lg:order-1">
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <ParallaxImage
                  src="/budget-planning-tool.png"
                  alt="Budget Planning"
                  width={600}
                  height={400}
                  className="w-full h-[350px]"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2} className="order-1 lg:order-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-blue-100 p-2 text-blue-600">
                  <PieChart className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">Smart Budgeting Tools</h3>
                <p className="text-gray-600">
                  Create personalized budgets that adapt to your spending habits. Set goals, track progress, and receive
                  alerts when you're approaching your limits.
                </p>
                <ul className="space-y-2">
                  {[
                    "Automated expense categorization",
                    "Flexible budget templates",
                    "Real-time spending notifications",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <AnimatedSection direction="left">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-blue-100 p-2 text-blue-600">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">Investment Tracking & Analysis</h3>
                <p className="text-gray-600">
                  Monitor your investments across multiple accounts and platforms. Analyze performance, track asset
                  allocation, and identify opportunities for portfolio optimization.
                </p>
                <ul className="space-y-2">
                  {[
                    "Portfolio performance metrics",
                    "Asset allocation visualization",
                    "Investment opportunity alerts",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <ParallaxImage
                  src="/investment-portfolio-analysis.png"
                  alt="Investment Analysis"
                  width={600}
                  height={400}
                  className="w-full h-[350px]"
                />
              </div>
            </AnimatedSection>
          </div>

          <StaggeredChildren className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-20">
            {[
              {
                title: "Credit Management",
                description: "Monitor your credit score and get personalized recommendations to improve your rating.",
                icon: <Shield className="h-10 w-10 text-blue-600" />,
              },
              {
                title: "Tax Planning",
                description: "Simplify tax preparation with automated categorization and comprehensive reporting.",
                icon: <BarChart3 className="h-10 w-10 text-blue-600" />,
              },
              {
                title: "Banking Integration",
                description: "Connect your bank accounts securely for automatic transaction tracking and analysis.",
                icon: <CreditCard className="h-10 w-10 text-blue-600" />,
              },
            ].map((feature, i) => (
              <InteractiveCard key={i} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="mb-4">{feature.icon}</div>
                    <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </InteractiveCard>
            ))}
          </StaggeredChildren>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-20 md:py-28 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <AnimatedSection>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2 max-w-[800px]">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Simple, Transparent Pricing
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed">
                  Choose the plan that fits your financial needs and goals.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <Tabs defaultValue="monthly" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="monthly">Monthly Billing</TabsTrigger>
              <TabsTrigger value="yearly">Yearly Billing (Save 20%)</TabsTrigger>
            </TabsList>
            <TabsContent value="monthly">
              <StaggeredChildren className="grid gap-8 md:grid-cols-3">
                {[
                  {
                    name: "Basic",
                    price: "$9.99",
                    description: "Perfect for individuals just starting their financial journey",
                    features: [
                      "Connect up to 3 accounts",
                      "Basic budgeting tools",
                      "Transaction categorization",
                      "Monthly financial reports",
                      "Email support",
                    ],
                    cta: "Get Started",
                    popular: false,
                  },
                  {
                    name: "Premium",
                    price: "$19.99",
                    description: "Ideal for individuals and families with multiple financial goals",
                    features: [
                      "Connect up to 10 accounts",
                      "Advanced budgeting tools",
                      "Smart transaction categorization",
                      "Weekly financial reports",
                      "Investment tracking",
                      "Tax planning tools",
                      "Priority email support",
                    ],
                    cta: "Get Premium",
                    popular: true,
                  },
                  {
                    name: "Business",
                    price: "$49.99",
                    description: "For small businesses and entrepreneurs",
                    features: [
                      "Unlimited account connections",
                      "Business expense tracking",
                      "Invoice management",
                      "Tax preparation",
                      "Multiple user access",
                      "Custom financial reports",
                      "Dedicated support",
                      "API access",
                    ],
                    cta: "Contact Sales",
                    popular: false,
                  },
                ].map((plan, i) => (
                  <InteractiveCard
                    key={i}
                    className={`border ${
                      plan.popular ? "border-blue-200 shadow-lg" : "border-gray-100 shadow-sm"
                    } relative`}
                  >
                    <Card>
                      {plan.popular && (
                        <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                          MOST POPULAR
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle className="text-xl">{plan.name}</CardTitle>
                        <div className="mt-2">
                          <span className="text-3xl font-bold">{plan.price}</span>
                          <span className="text-gray-500 ml-1">/month</span>
                        </div>
                        <CardDescription className="mt-2">{plan.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {plan.features.map((feature, j) => (
                            <li key={j} className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                              <span className="text-gray-600 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button
                          className={`w-full mt-6 ${
                            plan.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-900 hover:bg-gray-800"
                          } rounded-full`}
                        >
                          {plan.cta}
                        </Button>
                      </CardContent>
                    </Card>
                  </InteractiveCard>
                ))}
              </StaggeredChildren>
            </TabsContent>
            <TabsContent value="yearly">
              <StaggeredChildren className="grid gap-8 md:grid-cols-3">
                {[
                  {
                    name: "Basic",
                    price: "$95.90",
                    description: "Perfect for individuals just starting their financial journey",
                    features: [
                      "Connect up to 3 accounts",
                      "Basic budgeting tools",
                      "Transaction categorization",
                      "Monthly financial reports",
                      "Email support",
                    ],
                    cta: "Get Started",
                    popular: false,
                  },
                  {
                    name: "Premium",
                    price: "$191.90",
                    description: "Ideal for individuals and families with multiple financial goals",
                    features: [
                      "Connect up to 10 accounts",
                      "Advanced budgeting tools",
                      "Smart transaction categorization",
                      "Weekly financial reports",
                      "Investment tracking",
                      "Tax planning tools",
                      "Priority email support",
                    ],
                    cta: "Get Premium",
                    popular: true,
                  },
                  {
                    name: "Business",
                    price: "$479.90",
                    description: "For small businesses and entrepreneurs",
                    features: [
                      "Unlimited account connections",
                      "Business expense tracking",
                      "Invoice management",
                      "Tax preparation",
                      "Multiple user access",
                      "Custom financial reports",
                      "Dedicated support",
                      "API access",
                    ],
                    cta: "Contact Sales",
                    popular: false,
                  },
                ].map((plan, i) => (
                  <InteractiveCard
                    key={i}
                    className={`border ${
                      plan.popular ? "border-blue-200 shadow-lg" : "border-gray-100 shadow-sm"
                    } relative`}
                  >
                    <Card>
                      {plan.popular && (
                        <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                          MOST POPULAR
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle className="text-xl">{plan.name}</CardTitle>
                        <div className="mt-2">
                          <span className="text-3xl font-bold">{plan.price}</span>
                          <span className="text-gray-500 ml-1">/year</span>
                        </div>
                        <CardDescription className="mt-2">{plan.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {plan.features.map((feature, j) => (
                            <li key={j} className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                              <span className="text-gray-600 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button
                          className={`w-full mt-6 ${
                            plan.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-900 hover:bg-gray-800"
                          } rounded-full`}
                        >
                          {plan.cta}
                        </Button>
                      </CardContent>
                    </Card>
                  </InteractiveCard>
                ))}
              </StaggeredChildren>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-20 md:py-28 lg:py-32 bg-gray-50 overflow-hidden">
        <div className="container px-4 md:px-6 relative">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg
              className="absolute top-0 left-0 text-blue-100 opacity-50 w-32 h-32 md:w-64 md:h-64"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M42.7,-73.4C55.9,-67.1,67.7,-57.2,76.3,-44.6C84.9,-32,90.3,-16,89.5,-0.5C88.7,15,81.8,30,72.2,42.4C62.6,54.8,50.3,64.7,36.7,70.5C23.1,76.3,8.2,78.1,-6.9,77.8C-22,77.5,-37.3,75.1,-49.3,67.5C-61.3,59.9,-70,47.1,-76.2,32.8C-82.4,18.5,-86.1,2.7,-83.2,-11.8C-80.3,-26.3,-70.8,-39.6,-59.2,-49.8C-47.6,-60,-33.9,-67.2,-19.8,-72.6C-5.6,-78,8.9,-81.7,22.2,-79.9C35.5,-78.1,47.7,-70.9,42.7,-73.4Z"
                transform="translate(100 100)"
              />
            </svg>
            <svg
              className="absolute bottom-0 right-0 text-blue-100 opacity-50 w-32 h-32 md:w-64 md:h-64"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M39.9,-65.7C52.8,-60.5,65.2,-51.9,72.5,-39.7C79.8,-27.5,82,-11.7,80.3,3.1C78.6,17.9,73,31.8,64.1,43.2C55.2,54.6,43,63.5,29.5,69.7C16,75.9,1.1,79.4,-13.6,77.8C-28.3,76.2,-42.8,69.5,-54.1,59C-65.4,48.5,-73.5,34.1,-77.9,18.5C-82.3,2.9,-83,-13.9,-77.8,-28.4C-72.6,-42.9,-61.5,-55.1,-48.1,-60.2C-34.7,-65.3,-19,-63.3,-3.9,-57.4C11.2,-51.5,27,-70.9,39.9,-65.7Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>

          <AnimatedSection>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 relative z-10">
              <div className="space-y-2 max-w-[800px]">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Users Say</h2>
                <p className="text-gray-500 md:text-xl/relaxed">
                  Join thousands of satisfied users who have transformed their financial lives.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <StaggeredChildren className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                name: "Sarah Johnson",
                role: "Small Business Owner",
                content:
                  "Wealth Flow has completely changed how I manage my business finances. The intuitive interface and comprehensive tools make it easy to stay on top of my financial goals.",
                image: "/testimonial-sarah.jpg",
                rating: 5,
              },
              {
                name: "Michael Chen",
                role: "Investment Analyst",
                content:
                  "As someone who works with financial data daily, I'm impressed by the depth and accuracy of Wealth Flow's analytics. It's become an essential tool in my personal financial planning.",
                image: "/testimonial-michael.jpg",
                rating: 5,
              },
              {
                name: "Emily Rodriguez",
                role: "Freelance Designer",
                content:
                  "Managing irregular income used to be a challenge until I found Wealth Flow. Now I can easily track projects, plan for taxes, and ensure I'm saving enough for the future.",
                image: "/testimonial-emily.jpg",
                rating: 4,
              },
            ].map((testimonial, i) => (
              <InteractiveCard key={i} className="bg-white border-none shadow-lg">
                <Card>
                  <CardContent className="p-8">
                    <div className="flex flex-col space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-blue-100">
                          <Image
                            src={testimonial.image || "/thoughtful-artist.png"}
                            alt={testimonial.name}
                            width={56}
                            height={56}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <Star
                            key={j}
                            className={`h-4 w-4 ${
                              j < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-600 italic">"{testimonial.content}"</p>
                    </div>
                  </CardContent>
                </Card>
              </InteractiveCard>
            ))}
          </StaggeredChildren>

          <AnimatedSection delay={0.4} direction="up">
            <div className="mt-16 text-center relative z-10">
              <Button variant="outline" className="rounded-full px-8">
                Read More Testimonials
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Partners Section */}
      <section className="w-full py-16 md:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <AnimatedSection>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2 max-w-[800px]">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  Trusted by Leading Financial Institutions
                </h2>
                <p className="text-gray-500">
                  We partner with the world's top financial services to provide you with the best experience.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <motion.div
            className="mx-auto flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                className="h-12 w-auto"
                whileHover={{ scale: 1.05, opacity: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Image
                  src={`/partner-logo-${i}.png`}
                  alt={`Partner ${i}`}
                  width={150}
                  height={48}
                  className="h-full w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-20 md:py-28 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <AnimatedSection>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2 max-w-[800px]">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Frequently Asked Questions
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed">Find answers to common questions about Wealth Flow.</p>
              </div>
            </div>
          </AnimatedSection>

          <StaggeredChildren className="mx-auto max-w-3xl grid gap-6" staggerDelay={0.1}>
            {[
              {
                question: "Is my financial data secure with Wealth Flow?",
                answer:
                  "Absolutely. We use bank-level 256-bit encryption to protect your data. We never store your bank credentials, and we use secure, tokenized connections to access your financial information. Our platform is regularly audited for security compliance.",
              },
              {
                question: "How does Wealth Flow connect to my bank accounts?",
                answer:
                  "Wealth Flow uses secure API connections to link to your financial institutions. We partner with leading financial data providers to ensure secure, read-only access to your transaction data. Your login credentials are never stored on our servers.",
              },
              {
                question: "Can I cancel my subscription at any time?",
                answer:
                  "Yes, you can cancel your subscription at any time. If you cancel, you'll continue to have access to your paid features until the end of your billing period. We don't offer refunds for partial months of service.",
              },
              {
                question: "Does Wealth Flow support international banks and currencies?",
                answer:
                  "Yes, Wealth Flow supports financial institutions in over 40 countries and can handle multiple currencies. The platform will automatically convert foreign currencies to your primary currency using daily exchange rates for a unified view of your finances.",
              },
              {
                question: "How accurate is the categorization of my transactions?",
                answer:
                  "Our AI-powered categorization engine is highly accurate and gets smarter over time. It automatically categorizes your transactions based on merchant information and your spending patterns. You can also manually recategorize transactions and the system will learn from your preferences.",
              },
              {
                question: "Can I export my financial data from Wealth Flow?",
                answer:
                  "Yes, you can export your financial data in various formats including CSV, Excel, and PDF. This is useful for tax preparation, sharing information with financial advisors, or creating your own custom analyses.",
              },
            ].map((faq, i) => (
              <InteractiveCard key={i} className="border border-gray-100">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-start">
                      <HelpCircle className="h-5 w-5 text-blue-600 mr-2 shrink-0 mt-0.5" />
                      <span>{faq.question}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              </InteractiveCard>
            ))}
          </StaggeredChildren>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="w-full py-20 md:py-28 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <AnimatedSection>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2 max-w-[800px]">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Latest Financial Insights
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed">
                  Expert advice and tips to improve your financial well-being.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <StaggeredChildren className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "10 Strategies to Boost Your Savings Rate",
                excerpt:
                  "Discover practical techniques to increase your savings rate without drastically changing your lifestyle.",
                category: "Saving",
                date: "June 12, 2023",
                image: "/piggy-bank-growth.png",
              },
              {
                title: "Understanding Market Volatility: A Beginner's Guide",
                excerpt:
                  "Learn how market fluctuations work and strategies to manage your investments during uncertain times.",
                category: "Investing",
                date: "May 28, 2023",
                image: "/market-volatility-guide.jpg",
              },
              {
                title: "Tax-Efficient Investment Strategies for Long-Term Growth",
                excerpt:
                  "Explore how to structure your investments to minimize tax impact and maximize long-term returns.",
                category: "Taxes",
                date: "May 15, 2023",
                image: "/tax-planning-strategies.jpg",
              },
            ].map((post, i) => (
              <InteractiveCard
                key={i}
                className="overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <Card>
                  <div className="aspect-video w-full overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={400}
                      height={225}
                      className="h-full w-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium px-2.5 py-0.5 bg-blue-100 text-blue-800 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </div>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <Link href="/blog" className="text-blue-600 font-medium inline-flex items-center hover:underline">
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </InteractiveCard>
            ))}
          </StaggeredChildren>

          <AnimatedSection delay={0.4} direction="up">
            <div className="mt-12 text-center">
              <Button variant="outline" className="rounded-full px-8">
                View All Articles
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 md:py-28 lg:py-32 bg-blue-600 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-500 opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 45, 0],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-blue-400 opacity-20"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -45, 0],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            className="flex flex-col items-center justify-center space-y-6 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-3 max-w-[800px]">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Transform Your Financial Life?
              </h2>
              <p className="text-blue-100 md:text-xl/relaxed">
                Join thousands of users who have taken control of their finances with Wealth Flow.
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-8">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-blue-700 rounded-full px-8"
              >
                Watch Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
