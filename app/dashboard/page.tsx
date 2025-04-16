"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  BarChart3,
  Bell,
  Calendar,
  CreditCard,
  DollarSign,
  HelpCircle,
  PieChart,
  Plus,
  Settings,
  Wallet,
  ChevronDown,
  ChevronUp,
  TrendingUp,
  TrendingDown,
  CheckCircle,
  RefreshCw,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"
import { AnimatedCounter } from "@/components/animated-counter"
import { InteractiveCard } from "@/components/interactive-card"
import { StaggeredChildren } from "@/components/staggered-children"
import { useCurrency } from "@/contexts/currency-context"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [isLoading, setIsLoading] = useState(true)
  const [showNotification, setShowNotification] = useState(false)
  const { formatCurrency } = useCurrency()

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    // Show notification after a delay
    const notificationTimer = setTimeout(() => {
      setShowNotification(true)
    }, 3000)

    return () => {
      clearTimeout(timer)
      clearTimeout(notificationTimer)
    }
  }, [])

  return (
    <div className="flex-1 space-y-8 p-4 md:p-8 pt-6 relative">
      {/* Loading overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="absolute inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="flex flex-col items-center"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <RefreshCw className="h-10 w-10 text-primary-600 animate-spin mb-4" />
              <p className="text-gray-600 font-medium">Loading your financial dashboard...</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Notification toast */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            className="fixed top-6 right-6 z-50 max-w-md"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="border border-success-100 shadow-lg bg-white">
              <CardContent className="p-4 flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-success-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">Account Updated</p>
                  <p className="text-sm text-gray-600">Your financial data has been refreshed successfully.</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 shrink-0 rounded-full"
                  onClick={() => setShowNotification(false)}
                >
                  <span className="sr-only">Close</span>
                  <ChevronUp className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-gray-500">Welcome back, Alex. Here's an overview of your finances.</p>
        </motion.div>
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full relative">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
                <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-destructive-500"></span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[300px]">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="max-h-[300px] overflow-auto">
                {[
                  {
                    title: "Budget Alert",
                    description: "You've reached 80% of your dining budget for this month.",
                    time: "Just now",
                  },
                  {
                    title: "New Transaction",
                    description: "A payment of " + formatCurrency(45.99) + " was made to Netflix.",
                    time: "2 hours ago",
                  },
                  {
                    title: "Bill Due",
                    description: "Your electricity bill is due in 3 days.",
                    time: "Yesterday",
                  },
                ].map((notification, i) => (
                  <DropdownMenuItem key={i} className="cursor-pointer flex flex-col items-start py-2">
                    <div className="font-medium">{notification.title}</div>
                    <div className="text-sm text-gray-500">{notification.description}</div>
                    <div className="text-xs text-gray-400 mt-1">{notification.time}</div>
                  </DropdownMenuItem>
                ))}
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer justify-center text-primary-600">
                View all notifications
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button className="rounded-full bg-primary-600 hover:bg-primary-700">
            <Plus className="mr-2 h-4 w-4" /> Add Account
          </Button>
        </motion.div>
      </div>

      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-8">
        <TabsList className="grid grid-cols-4 md:w-[400px]">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="accounts">Accounts</TabsTrigger>
          <TabsTrigger value="budgets">Budgets</TabsTrigger>
          <TabsTrigger value="goals">Goals</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-8">
          {/* Financial Summary Cards */}
          <StaggeredChildren className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
            {[
              {
                title: "Total Balance",
                value: 45231.89,
                change: "+20.1% from last month",
                icon: <DollarSign className="h-5 w-5 text-primary-600" />,
                trend: "up",
              },
              {
                title: "Investments",
                value: 12234.0,
                change: "+4.3% from last month",
                icon: <Wallet className="h-5 w-5 text-primary-600" />,
                trend: "up",
              },
              {
                title: "Spending",
                value: 2345.0,
                change: "+7.2% from last month",
                icon: <CreditCard className="h-5 w-5 text-primary-600" />,
                trend: "up",
              },
              {
                title: "Budget Status",
                value: 68,
                suffix: "%",
                change: "of monthly budget used",
                icon: <PieChart className="h-5 w-5 text-primary-600" />,
                trend: "neutral",
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
                      {item.title !== "Budget Status" ? (
                        <AnimatedCounter
                          from={0}
                          to={item.value}
                          prefix={formatCurrency(0).charAt(0)}
                          suffix={item.suffix || ""}
                          duration={1.5}
                          delay={i * 0.1}
                        />
                      ) : (
                        <AnimatedCounter
                          from={0}
                          to={item.value}
                          suffix={item.suffix || ""}
                          duration={1.5}
                          delay={i * 0.1}
                        />
                      )}
                      {item.trend === "up" && <TrendingUp className="ml-2 h-4 w-4 text-success-500" />}
                      {item.trend === "down" && <TrendingDown className="ml-2 h-4 w-4 text-destructive-500" />}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{item.change}</p>
                  </CardContent>
                </Card>
              </InteractiveCard>
            ))}
          </StaggeredChildren>

          {/* Charts and Transactions */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
            <motion.div
              className="col-span-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <InteractiveCard className="border border-gray-100 shadow-sm">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>Financial Overview</CardTitle>
                      <CardDescription>Your financial activity for the past 30 days</CardDescription>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm">
                          Last 30 Days <ChevronDown className="ml-2 h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Last 7 Days</DropdownMenuItem>
                        <DropdownMenuItem>Last 30 Days</DropdownMenuItem>
                        <DropdownMenuItem>Last 3 Months</DropdownMenuItem>
                        <DropdownMenuItem>Last Year</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Custom Range</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <div className="h-[300px] w-full bg-gradient-to-b from-primary-50 to-white rounded-md flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0">
                        <svg
                          className="w-full h-full"
                          viewBox="0 0 800 300"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
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
                      <div className="absolute inset-0">
                        <svg
                          className="w-full h-full"
                          viewBox="0 0 800 300"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 280L26.6667 270C53.3333 260 106.667 240 160 230C213.333 220 266.667 220 320 210C373.333 200 426.667 180 480 180C533.333 180 586.667 200 640 210C693.333 220 746.667 220 773.333 220L800 220V300H773.333C746.667 300 693.333 300 640 300C586.667 300 533.333 300 480 300C426.667 300 373.333 300 320 300C266.667 300 213.333 300 160 300C106.667 300 53.3333 300 26.6667 300H0V280Z"
                            fill="url(#paint1_linear)"
                          />
                          <path
                            d="M0 280L26.6667 270C53.3333 260 106.667 240 160 230C213.333 220 266.667 220 320 210C373.333 200 426.667 180 480 180C533.333 180 586.667 200 640 210C693.333 220 746.667 220 773.333 220L800 220"
                            stroke="#0eaf4e"
                            strokeWidth="2"
                          />
                          <defs>
                            <linearGradient
                              id="paint1_linear"
                              x1="400"
                              y1="180"
                              x2="400"
                              y2="300"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#0eaf4e" stopOpacity="0.2" />
                              <stop offset="1" stopColor="#0eaf4e" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <div className="z-10 flex flex-col items-center">
                        <BarChart3 className="h-8 w-8 text-primary-300 mb-2" />
                        <span className="text-gray-500">Interactive Chart (Placeholder)</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </InteractiveCard>
            </motion.div>

            <motion.div
              className="col-span-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <InteractiveCard className="border border-gray-100 shadow-sm h-full">
                <Card className="h-full">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>Recent Transactions</CardTitle>
                      <CardDescription>Your most recent financial activity</CardDescription>
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary-600">
                      View All
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <StaggeredChildren className="space-y-6" staggerDelay={0.1}>
                      {[
                        { name: "Grocery Store", amount: -56.32, date: "Today", time: "2:30 PM", category: "Food" },
                        {
                          name: "Salary Deposit",
                          amount: 2500.0,
                          date: "Yesterday",
                          time: "9:15 AM",
                          category: "Income",
                        },
                        {
                          name: "Electric Bill",
                          amount: -94.21,
                          date: "Yesterday",
                          time: "8:30 AM",
                          category: "Utilities",
                        },
                        {
                          name: "Online Purchase",
                          amount: -120.0,
                          date: "3 days ago",
                          time: "4:45 PM",
                          category: "Shopping",
                        },
                        {
                          name: "Restaurant",
                          amount: -65.5,
                          date: "4 days ago",
                          time: "7:20 PM",
                          category: "Dining",
                        },
                      ].map((transaction, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          <div className="space-y-1">
                            <p className="text-sm font-medium leading-none">{transaction.name}</p>
                            <div className="flex items-center text-xs text-gray-500">
                              <span>{transaction.category}</span>
                              <span className="mx-1">•</span>
                              <span>
                                {transaction.date} at {transaction.time}
                              </span>
                            </div>
                          </div>
                          <div className="font-medium">
                            {transaction.amount > 0 ? (
                              <span className="text-success-600 flex items-center">
                                <ArrowUpRight className="h-3 w-3 mr-1" />
                                {formatCurrency(transaction.amount)}
                              </span>
                            ) : (
                              <span className="text-gray-900 flex items-center">
                                <ArrowDownRight className="h-3 w-3 mr-1" />
                                {formatCurrency(Math.abs(transaction.amount))}
                              </span>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </StaggeredChildren>
                  </CardContent>
                </Card>
              </InteractiveCard>
            </motion.div>
          </div>

          {/* Budget Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <InteractiveCard className="border border-gray-100 shadow-sm">
              <Card>
                <CardHeader>
                  <CardTitle>Budget Overview</CardTitle>
                  <CardDescription>Track your spending against monthly budget categories</CardDescription>
                </CardHeader>
                <CardContent>
                  <StaggeredChildren className="space-y-6" staggerDelay={0.1}>
                    {[
                      { category: "Housing", spent: 1200, budget: 1500, percent: 80 },
                      { category: "Food & Dining", spent: 650, budget: 800, percent: 81 },
                      { category: "Transportation", spent: 350, budget: 400, percent: 88 },
                      { category: "Entertainment", spent: 180, budget: 300, percent: 60 },
                      { category: "Shopping", spent: 420, budget: 500, percent: 84 },
                    ].map((budget, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="font-medium">{budget.category}</div>
                          <div className="text-sm text-gray-500">
                            {formatCurrency(budget.spent)} of {formatCurrency(budget.budget)}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="relative w-full">
                            <Progress value={0} className="h-2 bg-gray-100" />
                            <motion.div
                              className={`absolute top-0 left-0 h-2 rounded-full ${
                                budget.percent > 90
                                  ? "bg-destructive-500"
                                  : budget.percent > 75
                                    ? "bg-warning-500"
                                    : "bg-primary-500"
                              }`}
                              initial={{ width: 0 }}
                              animate={{ width: `${budget.percent}%` }}
                              transition={{ duration: 1, delay: i * 0.1 }}
                            />
                          </div>
                          <span
                            className={`text-sm font-medium ${
                              budget.percent > 90
                                ? "text-destructive-600"
                                : budget.percent > 75
                                  ? "text-warning-600"
                                  : "text-primary-600"
                            }`}
                          >
                            {budget.percent}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </StaggeredChildren>
                </CardContent>
              </Card>
            </InteractiveCard>
          </motion.div>

          {/* Upcoming Bills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <InteractiveCard className="border border-gray-100 shadow-sm">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Upcoming Bills</CardTitle>
                    <CardDescription>Bills due in the next 30 days</CardDescription>
                  </div>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Calendar className="h-4 w-4" /> Calendar View
                  </Button>
                </CardHeader>
                <CardContent>
                  <StaggeredChildren className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
                    {[
                      { name: "Rent", amount: 1200.0, dueDate: "June 1, 2023", status: "Upcoming", autopay: true },
                      {
                        name: "Internet",
                        amount: 79.99,
                        dueDate: "June 5, 2023",
                        status: "Upcoming",
                        autopay: true,
                      },
                      {
                        name: "Credit Card",
                        amount: 350.0,
                        dueDate: "June 15, 2023",
                        status: "Upcoming",
                        autopay: false,
                      },
                      {
                        name: "Phone Bill",
                        amount: 85.0,
                        dueDate: "June 18, 2023",
                        status: "Upcoming",
                        autopay: true,
                      },
                      {
                        name: "Streaming Services",
                        amount: 24.99,
                        dueDate: "June 22, 2023",
                        status: "Upcoming",
                        autopay: true,
                      },
                      {
                        name: "Car Insurance",
                        amount: 120.0,
                        dueDate: "June 28, 2023",
                        status: "Upcoming",
                        autopay: false,
                      },
                    ].map((bill, i) => (
                      <InteractiveCard key={i} className="border border-gray-100">
                        <Card>
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start mb-2">
                              <div className="font-semibold">{bill.name}</div>
                              <div className="text-gray-900 font-medium">{formatCurrency(bill.amount)}</div>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                              <div className="text-gray-500">Due: {bill.dueDate}</div>
                              {bill.autopay ? (
                                <div className="text-success-600 text-xs font-medium px-2 py-0.5 bg-success-50 rounded-full">
                                  AutoPay On
                                </div>
                              ) : (
                                <Button variant="outline" size="sm" className="h-7 text-xs rounded-full">
                                  Pay Now
                                </Button>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      </InteractiveCard>
                    ))}
                  </StaggeredChildren>
                </CardContent>
              </Card>
            </InteractiveCard>
          </motion.div>

          {/* Financial Insights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <InteractiveCard className="border border-gray-100 shadow-sm">
              <Card>
                <CardHeader>
                  <CardTitle>Financial Insights</CardTitle>
                  <CardDescription>Personalized recommendations based on your financial activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <StaggeredChildren className="space-y-4" staggerDelay={0.2}>
                    {[
                      {
                        title: "Reduce Subscription Costs",
                        description: `You're spending ${formatCurrency(65)} monthly on subscriptions you rarely use. Consider canceling these services to save ${formatCurrency(780)} annually.`,
                        icon: <DollarSign className="h-5 w-5 text-primary-600" />,
                      },
                      {
                        title: "Emergency Fund Opportunity",
                        description: `Based on your income and expenses, you could increase your emergency fund by ${formatCurrency(200)} monthly without impacting your lifestyle.`,
                        icon: <Wallet className="h-5 w-5 text-primary-600" />,
                      },
                      {
                        title: "Credit Card Interest Savings",
                        description: `Transferring your balance to a 0% APR card could save you approximately ${formatCurrency(340)} in interest over the next 12 months.`,
                        icon: <CreditCard className="h-5 w-5 text-primary-600" />,
                      },
                    ].map((insight, i) => (
                      <InteractiveCard key={i} className="flex gap-4 p-4 border rounded-lg">
                        <div className="mt-0.5">{insight.icon}</div>
                        <div>
                          <h4 className="font-semibold mb-1">{insight.title}</h4>
                          <p className="text-sm text-gray-600">{insight.description}</p>
                          <Button variant="link" className="p-0 h-auto text-primary-600 text-sm mt-1">
                            Learn More <ArrowRight className="h-3 w-3 ml-1" />
                          </Button>
                        </div>
                      </InteractiveCard>
                    ))}
                  </StaggeredChildren>
                </CardContent>
              </Card>
            </InteractiveCard>
          </motion.div>
        </TabsContent>

        <TabsContent value="accounts" className="space-y-8">
          {/* Account content here */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Primary Checking",
                institution: "HDFC Bank",
                balance: 12450.75,
                accountNumber: "XXXX-XXXX-4321",
                type: "Checking",
                color: "bg-primary-500",
              },
              {
                name: "Savings Account",
                institution: "ICICI Bank",
                balance: 28750.5,
                accountNumber: "XXXX-XXXX-8765",
                type: "Savings",
                color: "bg-success-500",
              },
              {
                name: "Credit Card",
                institution: "SBI Card",
                balance: -4025.3,
                accountNumber: "XXXX-XXXX-9876",
                type: "Credit",
                color: "bg-warning-500",
              },
              {
                name: "Fixed Deposit",
                institution: "Axis Bank",
                balance: 50000.0,
                accountNumber: "XXXX-XXXX-5432",
                type: "Investment",
                color: "bg-primary-700",
              },
              {
                name: "Mutual Fund",
                institution: "Kotak Securities",
                balance: 15780.25,
                accountNumber: "XXXX-XXXX-6543",
                type: "Investment",
                color: "bg-success-700",
              },
            ].map((account, i) => (
              <InteractiveCard key={i} className="border border-gray-100 shadow-sm">
                <Card>
                  <div className={`h-2 ${account.color} rounded-t-lg`}></div>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">{account.name}</h3>
                        <p className="text-sm text-gray-500">{account.institution}</p>
                      </div>
                      <div
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          account.type === "Credit"
                            ? "bg-warning-100 text-warning-700"
                            : account.type === "Investment"
                              ? "bg-primary-100 text-primary-700"
                              : "bg-success-100 text-success-700"
                        }`}
                      >
                        {account.type}
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-500">Current Balance</p>
                        <p
                          className={`text-xl font-bold ${account.balance < 0 ? "text-destructive-600" : "text-gray-900"}`}
                        >
                          {formatCurrency(account.balance)}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Account Number</p>
                        <p className="text-sm">{account.accountNumber}</p>
                      </div>
                      <div className="flex gap-2 pt-2">
                        <Button variant="outline" size="sm" className="rounded-full">
                          View Transactions
                        </Button>
                        <Button variant="ghost" size="sm" className="rounded-full">
                          Settings
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </InteractiveCard>
            ))}
            <InteractiveCard className="border border-dashed border-gray-200 shadow-sm bg-gray-50">
              <Card className="bg-transparent">
                <CardContent className="flex flex-col items-center justify-center h-full py-12">
                  <Plus className="h-10 w-10 text-gray-400 mb-4" />
                  <h3 className="font-medium text-gray-600 mb-2">Add New Account</h3>
                  <p className="text-sm text-gray-500 text-center mb-4">Connect your bank or add a manual account</p>
                  <Button className="rounded-full bg-primary-600 hover:bg-primary-700">Connect Account</Button>
                </CardContent>
              </Card>
            </InteractiveCard>
          </div>
        </TabsContent>

        <TabsContent value="budgets" className="space-y-8">
          {/* Budget content here */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Monthly Budget Overview</CardTitle>
                      <CardDescription>May 2023 Budget Performance</CardDescription>
                    </div>
                    <Button className="rounded-full bg-primary-600 hover:bg-primary-700">
                      <Plus className="mr-2 h-4 w-4" /> Create Budget
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-500 mb-1">Total Budget</p>
                      <p className="text-2xl font-bold">{formatCurrency(5000)}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-500 mb-1">Spent So Far</p>
                      <p className="text-2xl font-bold">{formatCurrency(3250)}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-500 mb-1">Remaining</p>
                      <p className="text-2xl font-bold text-success-600">{formatCurrency(1750)}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-500 mb-1">Budget Health</p>
                      <div className="flex items-center">
                        <div className="bg-success-500 h-3 w-3 rounded-full mr-2"></div>
                        <p className="text-lg font-bold">Good</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {[
                      { category: "Housing", spent: 1200, budget: 1500, percent: 80, icon: "🏠" },
                      { category: "Food & Dining", spent: 650, budget: 800, percent: 81, icon: "🍔" },
                      { category: "Transportation", spent: 350, budget: 400, percent: 88, icon: "🚗" },
                      { category: "Entertainment", spent: 180, budget: 300, percent: 60, icon: "🎬" },
                      { category: "Shopping", spent: 420, budget: 500, percent: 84, icon: "🛍️" },
                      { category: "Utilities", spent: 250, budget: 300, percent: 83, icon: "💡" },
                      { category: "Health", spent: 120, budget: 200, percent: 60, icon: "⚕️" },
                      { category: "Personal Care", spent: 80, budget: 150, percent: 53, icon: "🧴" },
                    ].map((budget, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="font-medium flex items-center">
                            <span className="mr-2">{budget.icon}</span>
                            {budget.category}
                          </div>
                          <div className="text-sm text-gray-500">
                            {formatCurrency(budget.spent)} of {formatCurrency(budget.budget)}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="relative w-full">
                            <Progress value={0} className="h-2 bg-gray-100" />
                            <motion.div
                              className={`absolute top-0 left-0 h-2 rounded-full ${
                                budget.percent > 90
                                  ? "bg-destructive-500"
                                  : budget.percent > 75
                                    ? "bg-warning-500"
                                    : "bg-primary-500"
                              }`}
                              initial={{ width: 0 }}
                              animate={{ width: `${budget.percent}%` }}
                              transition={{ duration: 1, delay: i * 0.1 }}
                            />
                          </div>
                          <span
                            className={`text-sm font-medium ${
                              budget.percent > 90
                                ? "text-destructive-600"
                                : budget.percent > 75
                                  ? "text-warning-600"
                                  : "text-primary-600"
                            }`}
                          >
                            {budget.percent}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="goals" className="space-y-8">
          {/* Goals content here */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Emergency Fund",
                target: 100000,
                current: 45000,
                deadline: "December 2023",
                percent: 45,
                icon: "🛡️",
                color: "bg-primary-500",
              },
              {
                name: "New Car",
                target: 800000,
                current: 320000,
                deadline: "June 2024",
                percent: 40,
                icon: "🚗",
                color: "bg-success-500",
              },
              {
                name: "Home Down Payment",
                target: 2500000,
                current: 750000,
                deadline: "January 2025",
                percent: 30,
                icon: "🏠",
                color: "bg-warning-500",
              },
              {
                name: "Vacation Fund",
                target: 150000,
                current: 90000,
                deadline: "August 2023",
                percent: 60,
                icon: "✈️",
                color: "bg-primary-600",
              },
              {
                name: "Education Fund",
                target: 500000,
                current: 125000,
                deadline: "March 2025",
                percent: 25,
                icon: "🎓",
                color: "bg-success-600",
              },
            ].map((goal, i) => (
              <InteractiveCard key={i} className="border border-gray-100 shadow-sm">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center">
                        <div
                          className={`w-10 h-10 rounded-full ${goal.color} flex items-center justify-center text-white mr-3`}
                        >
                          <span>{goal.icon}</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{goal.name}</h3>
                          <p className="text-sm text-gray-500">Target: {formatCurrency(goal.target)}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span>{goal.percent}%</span>
                        </div>
                        <div className="relative w-full h-2 bg-gray-100 rounded-full">
                          <div
                            className={`absolute top-0 left-0 h-2 rounded-full ${goal.color}`}
                            style={{ width: `${goal.percent}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="flex justify-between">
                        <div>
                          <p className="text-sm text-gray-500">Saved</p>
                          <p className="font-bold">{formatCurrency(goal.current)}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Remaining</p>
                          <p className="font-bold">{formatCurrency(goal.target - goal.current)}</p>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm text-gray-500">Target Date</p>
                        <p className="text-sm">{goal.deadline}</p>
                      </div>

                      <div className="flex gap-2 pt-2">
                        <Button variant="outline" size="sm" className="rounded-full">
                          Add Funds
                        </Button>
                        <Button variant="ghost" size="sm" className="rounded-full">
                          Edit Goal
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </InteractiveCard>
            ))}

            <InteractiveCard className="border border-dashed border-gray-200 shadow-sm bg-gray-50">
              <Card className="bg-transparent">
                <CardContent className="flex flex-col items-center justify-center h-full py-12">
                  <Plus className="h-10 w-10 text-gray-400 mb-4" />
                  <h3 className="font-medium text-gray-600 mb-2">Create New Goal</h3>
                  <p className="text-sm text-gray-500 text-center mb-4">
                    Set up a new financial goal to track your progress
                  </p>
                  <Button className="rounded-full bg-primary-600 hover:bg-primary-700">Create Goal</Button>
                </CardContent>
              </Card>
            </InteractiveCard>
          </div>
        </TabsContent>
      </Tabs>

      {/* Quick Actions */}
      <motion.div
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        {[
          { title: "Add Transaction", icon: <Plus className="h-5 w-5" />, color: "bg-primary-600" },
          { title: "Transfer Money", icon: <ArrowRight className="h-5 w-5" />, color: "bg-success-600" },
          { title: "Get Support", icon: <HelpCircle className="h-5 w-5" />, color: "bg-primary-700" },
          { title: "Account Settings", icon: <Settings className="h-5 w-5" />, color: "bg-gray-700" },
        ].map((action, i) => (
          <InteractiveCard key={i} className={`h-auto py-6 ${action.color} hover:opacity-90 rounded-xl text-white`}>
            <Button
              className={`h-auto py-6 w-full ${action.color} hover:opacity-90 rounded-xl border-none shadow-none`}
            >
              <div className="flex flex-col items-center gap-2">
                {action.icon}
                <span>{action.title}</span>
              </div>
            </Button>
          </InteractiveCard>
        ))}
      </motion.div>
    </div>
  )
}
