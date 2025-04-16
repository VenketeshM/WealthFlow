"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  ArrowRight,
  BarChart3,
  CreditCard,
  Download,
  PieChart,
  Plus,
  TrendingDown,
  TrendingUp,
  AlertCircle,
  Calendar,
  DollarSign,
  RefreshCw,
  Clock,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { InteractiveCard } from "@/components/interactive-card"
import { StaggeredChildren } from "@/components/staggered-children"
import { useCurrency } from "@/contexts/currency-context"

export default function CreditPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const { formatCurrency } = useCurrency()

  return (
    <div className="flex-1 space-y-8 p-4 md:p-8 pt-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl font-bold tracking-tight">Credit Tools</h2>
          <p className="text-gray-500">Monitor and improve your credit health</p>
        </motion.div>
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button variant="outline" className="gap-2 rounded-full">
            <RefreshCw className="h-4 w-4" /> Refresh Score
          </Button>
          <Button className="rounded-full bg-primary-600 hover:bg-primary-700">
            <Download className="mr-2 h-4 w-4" /> Credit Report
          </Button>
        </motion.div>
      </div>

      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-8">
        <TabsList className="grid grid-cols-4 md:w-[600px]">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="score">Credit Score</TabsTrigger>
          <TabsTrigger value="cards">Credit Cards</TabsTrigger>
          <TabsTrigger value="debt">Debt Planner</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-8">
          {/* Credit Summary Cards */}
          <StaggeredChildren className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
            {[
              {
                title: "Credit Score",
                value: "750",
                description: "Excellent",
                icon: <BarChart3 className="h-5 w-5 text-primary-600" />,
                trend: "up",
                change: "+15 points since last month",
              },
              {
                title: "Total Credit",
                value: 300000,
                description: "Available credit limit",
                icon: <CreditCard className="h-5 w-5 text-primary-600" />,
              },
              {
                title: "Credit Utilization",
                value: "18%",
                description: "Healthy (below 30%)",
                icon: <PieChart className="h-5 w-5 text-primary-600" />,
              },
              {
                title: "Total Debt",
                value: 54000,
                description: "Across all accounts",
                icon: <DollarSign className="h-5 w-5 text-primary-600" />,
                trend: "down",
                change: "-5% from last month",
              },
            ].map((item, i) => (
              <InteractiveCard key={i} className="border border-gray-100 shadow-sm">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">{item.title}</CardTitle>
                    {item.icon}
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-gray-900 flex items-center">
                      {typeof item.value === "number" ? formatCurrency(item.value) : item.value}
                      {item.trend === "up" && <TrendingUp className="ml-2 h-4 w-4 text-success-500" />}
                      {item.trend === "down" && <TrendingDown className="ml-2 h-4 w-4 text-success-500" />}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{item.description}</p>
                    {item.change && <p className="text-xs text-success-600 mt-1">{item.change}</p>}
                  </CardContent>
                </Card>
              </InteractiveCard>
            ))}
          </StaggeredChildren>

          {/* Credit Score Gauge */}
          <Card>
            <CardHeader>
              <CardTitle>Credit Score</CardTitle>
              <CardDescription>Your CIBIL score and factors affecting it</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="flex flex-col items-center justify-center">
                  <div className="relative w-64 h-32 overflow-hidden">
                    <svg viewBox="0 0 200 100" className="w-full">
                      {/* Background arc */}
                      <path
                        d="M20 100 A 80 80 0 0 1 180 100"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="20"
                        strokeLinecap="round"
                      />
                      {/* Score indicator */}
                      <path
                        d="M20 100 A 80 80 0 0 1 150 35"
                        fill="none"
                        stroke="#4c51ff"
                        strokeWidth="20"
                        strokeLinecap="round"
                      />
                      {/* Score ranges */}
                      <text x="20" y="130" fontSize="8" fill="#ef4444">
                        Poor
                      </text>
                      <text x="60" y="130" fontSize="8" fill="#f59e0b">
                        Fair
                      </text>
                      <text x="100" y="130" fontSize="8" fill="#10b981">
                        Good
                      </text>
                      <text x="140" y="130" fontSize="8" fill="#4c51ff">
                        Excellent
                      </text>
                    </svg>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                      <div className="text-4xl font-bold">750</div>
                      <div className="text-sm text-gray-500">Excellent</div>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                      Your credit score is excellent, which gives you access to the best credit products and rates.
                    </p>
                    <Button variant="link" className="mt-2 text-primary-600">
                      View Full Report <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="font-semibold">Factors Affecting Your Score</h3>
                  <div className="space-y-4">
                    {[
                      {
                        name: "Payment History",
                        value: 100,
                        max: 100,
                        percent: 100,
                        status: "Excellent",
                        impact: "Very High",
                      },
                      {
                        name: "Credit Utilization",
                        value: 85,
                        max: 100,
                        percent: 85,
                        status: "Good",
                        impact: "High",
                      },
                      {
                        name: "Credit Age",
                        value: 70,
                        max: 100,
                        percent: 70,
                        status: "Good",
                        impact: "Medium",
                      },
                      {
                        name: "Credit Mix",
                        value: 90,
                        max: 100,
                        percent: 90,
                        status: "Excellent",
                        impact: "Medium",
                      },
                      {
                        name: "Credit Inquiries",
                        value: 95,
                        max: 100,
                        percent: 95,
                        status: "Excellent",
                        impact: "Low",
                      },
                    ].map((factor, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-medium">{factor.name}</div>
                            <div className="text-xs text-gray-500">Impact: {factor.impact}</div>
                          </div>
                          <div className="text-sm font-medium">
                            <span
                              className={
                                factor.percent >= 90
                                  ? "text-primary-600"
                                  : factor.percent >= 70
                                    ? "text-success-600"
                                    : factor.percent >= 40
                                      ? "text-warning-600"
                                      : "text-destructive-600"
                              }
                            >
                              {factor.status}
                            </span>
                          </div>
                        </div>
                        <div className="relative w-full h-2 bg-gray-100 rounded-full">
                          <div
                            className={`absolute top-0 left-0 h-2 rounded-full ${
                              factor.percent >= 90
                                ? "bg-primary-500"
                                : factor.percent >= 70
                                  ? "bg-success-500"
                                  : factor.percent >= 40
                                    ? "bg-warning-500"
                                    : "bg-destructive-500"
                            }`}
                            style={{ width: `${factor.percent}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Credit Cards Summary */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Credit Cards</CardTitle>
                <CardDescription>Summary of your credit cards</CardDescription>
              </div>
              <Button variant="ghost" size="sm" className="text-primary-600">
                View All
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  {
                    name: "Platinum Rewards Card",
                    bank: "HDFC Bank",
                    number: "•••• •••• •••• 4321",
                    limit: 100000,
                    balance: 18500,
                    dueDate: "June 15, 2024",
                    color: "bg-gradient-to-r from-gray-800 to-gray-900",
                  },
                  {
                    name: "Cashback Credit Card",
                    bank: "ICICI Bank",
                    number: "•••• •••• •••• 8765",
                    limit: 80000,
                    balance: 12000,
                    dueDate: "June 20, 2024",
                    color: "bg-gradient-to-r from-primary-600 to-primary-800",
                  },
                  {
                    name: "Travel Miles Card",
                    bank: "SBI Card",
                    number: "•••• •••• •••• 9876",
                    limit: 120000,
                    balance: 23500,
                    dueDate: "June 5, 2024",
                    color: "bg-gradient-to-r from-success-600 to-success-800",
                  },
                ].map((card, i) => (
                  <div key={i} className="flex flex-col md:flex-row gap-6 p-4 border rounded-lg">
                    <div className={`${card.color} text-white rounded-lg p-4 md:w-64 flex flex-col justify-between`}>
                      <div>
                        <div className="text-sm opacity-80">{card.bank}</div>
                        <div className="font-semibold">{card.name}</div>
                      </div>
                      <div className="mt-4">
                        <div className="text-sm opacity-80">Card Number</div>
                        <div className="font-mono">{card.number}</div>
                      </div>
                    </div>
                    <div className="flex-1 space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-sm text-gray-500">Credit Limit</div>
                          <div className="font-semibold">{formatCurrency(card.limit)}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Current Balance</div>
                          <div className="font-semibold">{formatCurrency(card.balance)}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Available Credit</div>
                          <div className="font-semibold">{formatCurrency(card.limit - card.balance)}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Payment Due Date</div>
                          <div className="font-semibold">{card.dueDate}</div>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Credit Utilization</span>
                          <span className="font-medium">{Math.round((card.balance / card.limit) * 100)}%</span>
                        </div>
                        <div className="relative h-2 w-full overflow-hidden rounded-full bg-gray-100">
                          <div
                            className={`h-full transition-all duration-500 ${
                              (card.balance / card.limit) * 100 > 75
                                ? "bg-destructive-500"
                                : (card.balance / card.limit) * 100 > 30
                                  ? "bg-warning-500"
                                  : "bg-success-500"
                            }`}
                            style={{ width: `${(card.balance / card.limit) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Credit Improvement Tips */}
          <Card>
            <CardHeader>
              <CardTitle>Credit Improvement Tips</CardTitle>
              <CardDescription>Personalized recommendations to boost your credit score</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  {
                    title: "Keep Credit Utilization Below 30%",
                    description:
                      "Your current utilization is 18%, which is good. Continue to keep your credit card balances low relative to your credit limits.",
                    icon: <PieChart className="h-5 w-5" />,
                    status: "good",
                  },
                  {
                    title: "Pay Bills on Time",
                    description:
                      "You have a perfect payment history. Continue to make all your payments on time to maintain your excellent score.",
                    icon: <Calendar className="h-5 w-5" />,
                    status: "good",
                  },
                  {
                    title: "Avoid Multiple Credit Applications",
                    description:
                      "Multiple credit inquiries can lower your score. Space out new credit applications by at least 6 months.",
                    icon: <AlertCircle className="h-5 w-5" />,
                    status: "warning",
                  },
                  {
                    title: "Maintain a Diverse Credit Mix",
                    description:
                      "Having different types of credit (credit cards, loans, mortgage) can positively impact your score.",
                    icon: <CreditCard className="h-5 w-5" />,
                    status: "good",
                  },
                ].map((tip, i) => (
                  <div key={i} className="flex gap-4 p-4 border rounded-lg">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                        tip.status === "good"
                          ? "bg-success-100 text-success-600"
                          : tip.status === "warning"
                            ? "bg-warning-100 text-warning-600"
                            : "bg-destructive-100 text-destructive-600"
                      }`}
                    >
                      {tip.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold">{tip.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{tip.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="score" className="space-y-8">
          {/* Credit Score History */}
          <Card>
            <CardHeader>
              <CardTitle>Credit Score History</CardTitle>
              <CardDescription>Track your credit score changes over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full bg-gradient-to-b from-primary-50 to-white rounded-md flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0">
                  <svg className="w-full h-full" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0 250L26.6667 240C53.3333 230 106.667 210 160 200C213.333 190 266.667 190 320 190C373.333 190 426.667 190 480 180C533.333 170 586.667 150 640 150C693.333 150 746.667 170 773.333 180L800 190V300H773.333C746.667 300 693.333 300 640 300C586.667 300 533.333 300 480 300C426.667 300 373.333 300 320 300C266.667 300 213.333 300 160 300C106.667 300 53.3333 300 26.6667 300H0V250Z"
                      fill="url(#paint0_linear)"
                    />
                    <path
                      d="M0 250L26.6667 240C53.3333 230 106.667 210 160 200C213.333 190 266.667 190 320 190C373.333 190 426.667 190 480 180C533.333 170 586.667 150 640 150C693.333 150 746.667 170 773.333 180L800 190"
                      stroke="#4c51ff"
                      strokeWidth="2"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="400"
                        y1="150"
                        x2="400"
                        y2="300"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#4c51ff" stopOpacity="0.2" />
                        <stop offset="1" stopColor="#4c51ff" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="z-10 flex flex-col items-center">
                  <BarChart3 className="h-8 w-8 text-primary-300 mb-2" />
                  <span className="text-gray-500">Credit Score History Chart (Placeholder)</span>
                </div>
              </div>

              <div className="mt-8 space-y-6">
                <h3 className="font-semibold">Recent Score Changes</h3>
                <div className="space-y-4">
                  {[
                    {
                      date: "May 2024",
                      score: 750,
                      change: "+15",
                      reason: "Decreased credit utilization ratio",
                    },
                    {
                      date: "April 2024",
                      score: 735,
                      change: "+5",
                      reason: "On-time payment history",
                    },
                    {
                      date: "March 2024",
                      score: 730,
                      change: "+10",
                      reason: "Reduced overall debt",
                    },
                    {
                      date: "February 2024",
                      score: 720,
                      change: "-5",
                      reason: "New credit inquiry",
                    },
                    {
                      date: "January 2024",
                      score: 725,
                      change: "+15",
                      reason: "Increased credit age",
                    },
                  ].map((record, i) => (
                    <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <div className="font-medium">{record.date}</div>
                        <div className="text-sm text-gray-500">{record.reason}</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="font-semibold">{record.score}</div>
                        <div
                          className={`flex items-center ${
                            Number.parseInt(record.change) > 0 ? "text-success-600" : "text-destructive-600"
                          }`}
                        >
                          {Number.parseInt(record.change) > 0 ? (
                            <TrendingUp className="h-4 w-4 mr-1" />
                          ) : (
                            <TrendingDown className="h-4 w-4 mr-1" />
                          )}
                          {record.change}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Credit Score Factors */}
          <Card>
            <CardHeader>
              <CardTitle>Credit Score Factors</CardTitle>
              <CardDescription>Understanding what impacts your credit score</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="font-semibold mb-4">Score Composition</h3>
                  <div className="h-[300px] relative flex items-center justify-center">
                    <div className="absolute inset-0">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="15" />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#4c51ff"
                          strokeWidth="15"
                          strokeDasharray="251.2"
                          strokeDashoffset="175.84"
                          transform="rotate(-90 50 50)"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#0eaf4e"
                          strokeWidth="15"
                          strokeDasharray="251.2"
                          strokeDashoffset="200.96"
                          transform="rotate(-90 50 50)"
                          className="opacity-75"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#f5b90a"
                          strokeWidth="15"
                          strokeDasharray="251.2"
                          strokeDashoffset="225.08"
                          transform="rotate(-90 50 50)"
                          className="opacity-75"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#e81414"
                          strokeWidth="15"
                          strokeDasharray="251.2"
                          strokeDashoffset="237.64"
                          transform="rotate(-90 50 50)"
                          className="opacity-75"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#6366f1"
                          strokeWidth="15"
                          strokeDasharray="251.2"
                          strokeDashoffset="245.92"
                          transform="rotate(-90 50 50)"
                          className="opacity-75"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="space-y-2 mt-4">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-primary-500 rounded-full mr-3"></div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="font-medium">Payment History</span>
                          <span>35%</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-success-500 rounded-full mr-3"></div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="font-medium">Credit Utilization</span>
                          <span>30%</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-warning-500 rounded-full mr-3"></div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="font-medium">Credit Age</span>
                          <span>15%</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-destructive-500 rounded-full mr-3"></div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="font-medium">Credit Mix</span>
                          <span>10%</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-indigo-500 rounded-full mr-3"></div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="font-medium">New Credit</span>
                          <span>10%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="font-semibold">What Affects Your Score</h3>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Payment History (35%)",
                        description:
                          "Your track record of paying bills on time. Late payments, defaults, and bankruptcies can significantly lower your score.",
                        icon: <Calendar className="h-5 w-5" />,
                      },
                      {
                        title: "Credit Utilization (30%)",
                        description:
                          "The ratio of your credit card balances to credit limits. Lower utilization (under 30%) is better for your score.",
                        icon: <PieChart className="h-5 w-5" />,
                      },
                      {
                        title: "Credit Age (15%)",
                        description:
                          "The length of your credit history, including the age of your oldest account and the average age of all accounts.",
                        icon: <Clock className="h-5 w-5" />,
                      },
                      {
                        title: "Credit Mix (10%)",
                        description:
                          "The variety of credit accounts you have, such as credit cards, retail accounts, installment loans, and mortgages.",
                        icon: <CreditCard className="h-5 w-5" />,
                      },
                      {
                        title: "New Credit (10%)",
                        description:
                          "Recent applications for credit, including hard inquiries and newly opened accounts.",
                        icon: <Plus className="h-5 w-5" />,
                      },
                    ].map((factor, i) => (
                      <div key={i} className="flex gap-4 p-4 border rounded-lg">
                        <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center shrink-0">
                          {factor.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold">{factor.title}</h4>
                          <p className="text-sm text-gray-600 mt-1">{factor.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cards" className="space-y-8">
          {/* Credit Cards Management */}
          <Card>
            <CardHeader>
              <CardTitle>Credit Cards Management</CardTitle>
              <CardDescription>View and manage your credit cards</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    name: "Platinum Rewards Card",
                    bank: "HDFC Bank",
                    number: "•••• •••• •••• 4321",
                    limit: 100000,
                    balance: 18500,
                    dueDate: "June 15, 2024",
                    minPayment: 1850,
                    color: "bg-gradient-to-r from-gray-800 to-gray-900",
                  },
                  {
                    name: "Cashback Credit Card",
                    bank: "ICICI Bank",
                    number: "•••• •••• •••• 8765",
                    limit: 80000,
                    balance: 12000,
                    dueDate: "June 20, 2024",
                    minPayment: 1200,
                    color: "bg-gradient-to-r from-primary-600 to-primary-800",
                  },
                  {
                    name: "Travel Miles Card",
                    bank: "SBI Card",
                    number: "•••• •••• •••• 9876",
                    limit: 120000,
                    balance: 23500,
                    dueDate: "June 5, 2024",
                    minPayment: 2350,
                    color: "bg-gradient-to-r from-success-600 to-success-800",
                  },
                ].map((card, i) => (
                  <Card key={i}>
                    <CardContent className="p-0">
                      <div className={`${card.color} text-white rounded-t-lg p-6 relative overflow-hidden`}>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-10 -mb-10"></div>

                        <div className="space-y-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="text-sm opacity-80">{card.bank}</p>
                              <h3 className="font-semibold text-lg">{card.name}</h3>
                            </div>
                          </div>

                          <div>
                            <p className="text-sm opacity-80">Card Number</p>
                            <p className="font-mono">{card.number}</p>
                          </div>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="space-y-4">
                          <div className="flex justify-between">
                            <div>
                              <p className="text-sm text-gray-500">Current Balance</p>
                              <p className="text-lg font-bold">{formatCurrency(card.balance)}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Credit Limit</p>
                              <p className="text-lg font-bold">{formatCurrency(card.limit)}</p>
                            </div>
                          </div>

                          <div className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span>Credit Utilization</span>
                              <span className="font-medium">{Math.round((card.balance / card.limit) * 100)}%</span>
                            </div>
                            <div className="relative h-2 w-full overflow-hidden rounded-full bg-gray-100">
                              <div
                                className={`h-full transition-all duration-500 ${
                                  (card.balance / card.limit) * 100 > 75
                                    ? "bg-destructive-500"
                                    : (card.balance / card.limit) * 100 > 30
                                      ? "bg-warning-500"
                                      : "bg-success-500"
                                }`}
                                style={{ width: `${(card.balance / card.limit) * 100}%` }}
                              ></div>
                            </div>
                          </div>

                          <div className="flex justify-between">
                            <div>
                              <p className="text-sm text-gray-500">Due Date</p>
                              <p>{card.dueDate}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Minimum Payment</p>
                              <p>{formatCurrency(card.minPayment)}</p>
                            </div>
                          </div>

                          <div className="flex gap-2 pt-2">
                            <Button variant="outline" size="sm" className="rounded-full">
                              Pay Bill
                            </Button>
                            <Button variant="ghost" size="sm" className="rounded-full">
                              View Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="debt" className="space-y-8">
          {/* Debt Planner */}
          <Card>
            <CardHeader>
              <CardTitle>Debt Repayment Planner</CardTitle>
              <CardDescription>Optimize your debt repayment strategy</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="font-semibold mb-4">Debt Overview</h3>
                  <div className="space-y-4">
                    {[
                      {
                        name: "Credit Card Debt",
                        amount: 54000,
                        interestRate: "18%",
                        minPayment: 5400,
                      },
                      {
                        name: "Personal Loan",
                        amount: 150000,
                        interestRate: "12%",
                        minPayment: 12000,
                      },
                      {
                        name: "Car Loan",
                        amount: 350000,
                        interestRate: "8.5%",
                        minPayment: 15000,
                      },
                    ].map((debt, i) => (
                      <div key={i} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-semibold">{debt.name}</h4>
                          <div className="font-bold">{formatCurrency(debt.amount)}</div>
                        </div>
                        <div className="flex justify-between text-sm text-gray-500">
                          <div>Interest Rate: {debt.interestRate}</div>
                          <div>Min Payment: {formatCurrency(debt.minPayment)}</div>
                        </div>
                      </div>
                    ))}

                    <div className="p-4 border rounded-lg bg-gray-50">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold">Total Debt</h4>
                        <div className="font-bold">{formatCurrency(554000)}</div>
                      </div>
                      <div className="flex justify-between text-sm text-gray-500">
                        <div>Average Interest Rate: 12.8%</div>
                        <div>Total Min Payment: {formatCurrency(32400)}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Repayment Strategy</h3>
                  <div className="p-4 border rounded-lg mb-4">
                    <h4 className="font-semibold mb-2">Recommended Strategy: Avalanche Method</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Pay minimum payments on all debts, then put extra money toward the debt with the highest interest
                      rate first. This saves the most money in interest.
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>1. Credit Card Debt (18%)</span>
                        <span className="font-medium">{formatCurrency(54000)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>2. Personal Loan (12%)</span>
                        <span className="font-medium">{formatCurrency(150000)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>3. Car Loan (8.5%)</span>
                        <span className="font-medium">{formatCurrency(350000)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Time to Debt Free</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-500">Monthly Payment</p>
                        <div className="flex items-center gap-2">
                          <input
                            type="range"
                            min="32400"
                            max="100000"
                            defaultValue="50000"
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                          />
                          <span className="font-medium">{formatCurrency(50000)}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Time to Debt Free</p>
                          <p className="font-bold text-xl">13 months</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Interest Saved</p>
                          <p className="font-bold text-xl text-success-600">{formatCurrency(48500)}</p>
                        </div>
                      </div>

                      <Button className="w-full bg-primary-600 hover:bg-primary-700 rounded-full">
                        Create Debt Payoff Plan
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
