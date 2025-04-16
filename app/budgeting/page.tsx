"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  BarChart3,
  Calendar,
  ChevronDown,
  Filter,
  Plus,
  Search,
  TrendingDown,
  TrendingUp,
  Wallet,
  AlertCircle,
  CheckCircle,
  Edit,
  Trash2,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { InteractiveCard } from "@/components/interactive-card"
import { StaggeredChildren } from "@/components/staggered-children"
import { useCurrency } from "@/contexts/currency-context"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function BudgetingPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [currentMonth, setCurrentMonth] = useState("May 2024")
  const { formatCurrency } = useCurrency()

  return (
    <div className="flex-1 space-y-8 p-4 md:p-8 pt-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl font-bold tracking-tight">Budgeting</h2>
          <p className="text-gray-500">Create, track, and optimize your monthly budgets</p>
        </motion.div>
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                {currentMonth} <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setCurrentMonth("April 2024")}>April 2024</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setCurrentMonth("May 2024")}>May 2024</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setCurrentMonth("June 2024")}>June 2024</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button className="rounded-full bg-primary-600 hover:bg-primary-700">
            <Plus className="mr-2 h-4 w-4" /> Create Budget
          </Button>
        </motion.div>
      </div>

      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-8">
        <TabsList className="grid grid-cols-4 md:w-[600px]">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-8">
          {/* Budget Summary Cards */}
          <StaggeredChildren className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
            {[
              {
                title: "Total Budget",
                value: 50000,
                description: "For May 2024",
                icon: <Wallet className="h-5 w-5 text-primary-600" />,
              },
              {
                title: "Spent So Far",
                value: 32500,
                description: "65% of total budget",
                icon: <TrendingDown className="h-5 w-5 text-primary-600" />,
              },
              {
                title: "Remaining",
                value: 17500,
                description: "For next 16 days",
                icon: <Calendar className="h-5 w-5 text-primary-600" />,
              },
              {
                title: "Daily Budget",
                value: 1094,
                description: "Average per day",
                icon: <BarChart3 className="h-5 w-5 text-primary-600" />,
              },
            ].map((item, i) => (
              <InteractiveCard key={i} className="border border-gray-100 shadow-sm">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">{item.title}</CardTitle>
                    {item.icon}
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-gray-900">{formatCurrency(item.value)}</div>
                    <p className="text-xs text-gray-500 mt-1">{item.description}</p>
                  </CardContent>
                </Card>
              </InteractiveCard>
            ))}
          </StaggeredChildren>

          {/* Budget Progress */}
          <Card>
            <CardHeader>
              <CardTitle>Budget Progress</CardTitle>
              <CardDescription>Your spending progress for {currentMonth}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Overall Progress</span>
                  <span className="font-medium">65%</span>
                </div>
                <div className="relative h-4 w-full overflow-hidden rounded-full bg-gray-100">
                  <div className="h-full bg-primary-500 transition-all duration-500" style={{ width: "65%" }}></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Spent: {formatCurrency(32500)}</span>
                  <span>Remaining: {formatCurrency(17500)}</span>
                </div>
              </div>

              <div className="mt-8 space-y-6">
                <h3 className="font-semibold">Category Breakdown</h3>
                {[
                  { category: "Housing", spent: 15000, budget: 15000, percent: 100, icon: "🏠" },
                  { category: "Food & Dining", spent: 8500, budget: 10000, percent: 85, icon: "🍔" },
                  { category: "Transportation", spent: 3000, budget: 5000, percent: 60, icon: "🚗" },
                  { category: "Entertainment", spent: 3500, budget: 4000, percent: 88, icon: "🎬" },
                  { category: "Shopping", spent: 2500, budget: 6000, percent: 42, icon: "🛍️" },
                  { category: "Utilities", spent: 0, budget: 5000, percent: 0, icon: "💡" },
                  { category: "Health", spent: 0, budget: 3000, percent: 0, icon: "⚕️" },
                  { category: "Personal Care", spent: 0, budget: 2000, percent: 0, icon: "🧴" },
                ].map((category, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="font-medium flex items-center">
                        <span className="mr-2">{category.icon}</span>
                        {category.category}
                      </div>
                      <div className="text-sm text-gray-500">
                        {formatCurrency(category.spent)} of {formatCurrency(category.budget)}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="relative w-full">
                        <Progress value={0} className="h-2 bg-gray-100" />
                        <motion.div
                          className={`absolute top-0 left-0 h-2 rounded-full ${
                            category.percent > 90
                              ? "bg-destructive-500"
                              : category.percent > 75
                                ? "bg-warning-500"
                                : "bg-primary-500"
                          }`}
                          initial={{ width: 0 }}
                          animate={{ width: `${category.percent}%` }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                        />
                      </div>
                      <span
                        className={`text-sm font-medium ${
                          category.percent > 90
                            ? "text-destructive-600"
                            : category.percent > 75
                              ? "text-warning-600"
                              : "text-primary-600"
                        }`}
                      >
                        {category.percent}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Expenses */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Recent Expenses</CardTitle>
                <CardDescription>Your latest spending activities</CardDescription>
              </div>
              <Button variant="ghost" size="sm" className="text-primary-600">
                View All
              </Button>
            </CardHeader>
            <CardContent>
              <StaggeredChildren className="space-y-4" staggerDelay={0.05}>
                {[
                  {
                    name: "Grocery Store",
                    amount: 2500,
                    date: "Today",
                    time: "2:30 PM",
                    category: "Food & Dining",
                  },
                  {
                    name: "Movie Tickets",
                    amount: 800,
                    date: "Yesterday",
                    time: "7:15 PM",
                    category: "Entertainment",
                  },
                  {
                    name: "Fuel",
                    amount: 1200,
                    date: "Yesterday",
                    time: "10:30 AM",
                    category: "Transportation",
                  },
                  {
                    name: "Online Shopping",
                    amount: 1500,
                    date: "3 days ago",
                    time: "4:45 PM",
                    category: "Shopping",
                  },
                  {
                    name: "Restaurant",
                    amount: 1800,
                    date: "4 days ago",
                    time: "8:20 PM",
                    category: "Food & Dining",
                  },
                ].map((expense, i) => (
                  <motion.div
                    key={i}
                    className="flex flex-col md:flex-row md:items-center md:justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
                    whileHover={{ x: 5 }}
                  >
                    <div className="space-y-1">
                      <p className="font-medium">{expense.name}</p>
                      <div className="flex items-center text-xs text-gray-500">
                        <span>{expense.category}</span>
                        <span className="mx-1">•</span>
                        <span>
                          {expense.date} at {expense.time}
                        </span>
                      </div>
                    </div>
                    <div className="font-medium mt-2 md:mt-0 text-destructive-600">
                      - {formatCurrency(expense.amount)}
                    </div>
                  </motion.div>
                ))}
              </StaggeredChildren>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="categories" className="space-y-8">
          <div className="flex justify-between items-center">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search categories..."
                className="pl-8 rounded-full bg-white border-gray-200"
              />
            </div>
            <Button className="rounded-full bg-primary-600 hover:bg-primary-700">
              <Plus className="mr-2 h-4 w-4" /> Add Category
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Budget Categories</CardTitle>
              <CardDescription>Manage your budget categories and allocations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  { name: "Housing", budget: 15000, icon: "🏠", color: "bg-primary-100 text-primary-600" },
                  { name: "Food & Dining", budget: 10000, icon: "🍔", color: "bg-success-100 text-success-600" },
                  { name: "Transportation", budget: 5000, icon: "🚗", color: "bg-warning-100 text-warning-600" },
                  { name: "Entertainment", budget: 4000, icon: "🎬", color: "bg-destructive-100 text-destructive-600" },
                  { name: "Shopping", budget: 6000, icon: "🛍️", color: "bg-primary-100 text-primary-600" },
                  { name: "Utilities", budget: 5000, icon: "💡", color: "bg-success-100 text-success-600" },
                  { name: "Health", budget: 3000, icon: "⚕️", color: "bg-warning-100 text-warning-600" },
                  { name: "Personal Care", budget: 2000, icon: "🧴", color: "bg-destructive-100 text-destructive-600" },
                ].map((category, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full ${category.color} flex items-center justify-center`}>
                        <span className="text-lg">{category.icon}</span>
                      </div>
                      <div>
                        <h3 className="font-medium">{category.name}</h3>
                        <p className="text-sm text-gray-500">Monthly Budget: {formatCurrency(category.budget)}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon" className="rounded-full">
                        <Edit className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button variant="ghost" size="icon" className="rounded-full text-destructive-600">
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="expenses" className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search expenses..."
                className="pl-8 rounded-full bg-white border-gray-200"
              />
            </div>
            <div className="flex gap-3">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="housing">Housing</SelectItem>
                  <SelectItem value="food">Food & Dining</SelectItem>
                  <SelectItem value="transportation">Transportation</SelectItem>
                  <SelectItem value="entertainment">Entertainment</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon" className="rounded-full">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filter</span>
              </Button>
              <Button className="rounded-full bg-primary-600 hover:bg-primary-700">
                <Plus className="mr-2 h-4 w-4" /> Add Expense
              </Button>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Expense Transactions</CardTitle>
              <CardDescription>All your expenses for {currentMonth}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  {
                    date: "May 15, 2024",
                    expenses: [
                      {
                        name: "Grocery Store",
                        amount: 2500,
                        time: "2:30 PM",
                        category: "Food & Dining",
                        paymentMethod: "Credit Card",
                      },
                      {
                        name: "Electricity Bill",
                        amount: 1800,
                        time: "10:15 AM",
                        category: "Utilities",
                        paymentMethod: "Bank Transfer",
                      },
                    ],
                  },
                  {
                    date: "May 14, 2024",
                    expenses: [
                      {
                        name: "Movie Tickets",
                        amount: 800,
                        time: "7:15 PM",
                        category: "Entertainment",
                        paymentMethod: "Credit Card",
                      },
                      {
                        name: "Fuel",
                        amount: 1200,
                        time: "10:30 AM",
                        category: "Transportation",
                        paymentMethod: "Debit Card",
                      },
                    ],
                  },
                  {
                    date: "May 12, 2024",
                    expenses: [
                      {
                        name: "Online Shopping",
                        amount: 1500,
                        time: "4:45 PM",
                        category: "Shopping",
                        paymentMethod: "Credit Card",
                      },
                    ],
                  },
                  {
                    date: "May 11, 2024",
                    expenses: [
                      {
                        name: "Restaurant",
                        amount: 1800,
                        time: "8:20 PM",
                        category: "Food & Dining",
                        paymentMethod: "Credit Card",
                      },
                      {
                        name: "Pharmacy",
                        amount: 600,
                        time: "11:45 AM",
                        category: "Health",
                        paymentMethod: "Cash",
                      },
                    ],
                  },
                ].map((day, i) => (
                  <div key={i} className="space-y-3">
                    <h3 className="font-medium text-sm text-gray-500">{day.date}</h3>
                    <div className="space-y-2">
                      {day.expenses.map((expense, j) => (
                        <div key={j} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                              {expense.category === "Food & Dining" && "🍔"}
                              {expense.category === "Entertainment" && "🎬"}
                              {expense.category === "Transportation" && "🚗"}
                              {expense.category === "Shopping" && "🛍️"}
                              {expense.category === "Utilities" && "💡"}
                              {expense.category === "Health" && "⚕️"}
                            </div>
                            <div>
                              <h4 className="font-medium">{expense.name}</h4>
                              <div className="flex items-center text-xs text-gray-500">
                                <span>{expense.time}</span>
                                <span className="mx-1">•</span>
                                <span>{expense.paymentMethod}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <Badge variant="outline">{expense.category}</Badge>
                            <div className="font-medium text-destructive-600">- {formatCurrency(expense.amount)}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button variant="outline" className="rounded-full">
                Load More Transactions
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="insights" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Spending Insights</CardTitle>
              <CardDescription>Analysis of your spending patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="font-semibold mb-4">Spending by Category</h3>
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
                          strokeDashoffset="188.4"
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
                          strokeDashoffset="213.52"
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
                          strokeDashoffset="241.15"
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
                          <span className="font-medium">Food & Dining</span>
                          <span>32%</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-success-500 rounded-full mr-3"></div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="font-medium">Housing</span>
                          <span>25%</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-warning-500 rounded-full mr-3"></div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="font-medium">Entertainment</span>
                          <span>15%</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-destructive-500 rounded-full mr-3"></div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="font-medium">Transportation</span>
                          <span>12%</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-gray-500 rounded-full mr-3"></div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="font-medium">Others</span>
                          <span>16%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Monthly Spending Trend</h3>
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
                    <div className="z-10 flex flex-col items-center">
                      <BarChart3 className="h-8 w-8 text-primary-300 mb-2" />
                      <span className="text-gray-500">Monthly Trend Chart (Placeholder)</span>
                    </div>
                  </div>

                  <div className="space-y-4 mt-4">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Average Daily Spending</span>
                      <span>{formatCurrency(1094)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Highest Spending Day</span>
                      <span>May 10 ({formatCurrency(5200)})</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Lowest Spending Day</span>
                      <span>May 5 ({formatCurrency(200)})</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-6">
                <h3 className="font-semibold">Budget Recommendations</h3>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg flex gap-4">
                    <div className="w-10 h-10 bg-warning-100 text-warning-600 rounded-full flex items-center justify-center shrink-0">
                      <AlertCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Entertainment Budget Alert</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        You've spent 88% of your entertainment budget with 16 days remaining. Consider reducing spending
                        in this category.
                      </p>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg flex gap-4">
                    <div className="w-10 h-10 bg-success-100 text-success-600 rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Transportation Savings</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        You're on track with your transportation budget. At this rate, you'll save approximately{" "}
                        {formatCurrency(1000)} this month.
                      </p>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg flex gap-4">
                    <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center shrink-0">
                      <TrendingUp className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Budget Optimization</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Based on your spending patterns, we recommend increasing your food budget by{" "}
                        {formatCurrency(2000)} and decreasing your shopping budget by {formatCurrency(2000)}.
                      </p>
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
