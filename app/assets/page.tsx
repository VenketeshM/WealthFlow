"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  ArrowRight,
  BarChart3,
  ChevronDown,
  DollarSign,
  Filter,
  PieChart,
  Plus,
  Search,
  TrendingUp,
  TrendingDown,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { InteractiveCard } from "@/components/interactive-card"
import { StaggeredChildren } from "@/components/staggered-children"
import { useCurrency } from "@/contexts/currency-context"

export default function AssetsPage() {
  const [activeTab, setActiveTab] = useState("all")
  const { formatCurrency } = useCurrency()

  return (
    <div className="flex-1 space-y-8 p-4 md:p-8 pt-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl font-bold tracking-tight">Asset Management</h2>
          <p className="text-gray-500">Track and manage all your investments and assets in one place.</p>
        </motion.div>
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button className="rounded-full bg-primary-600 hover:bg-primary-700">
            <Plus className="mr-2 h-4 w-4" /> Add Asset
          </Button>
        </motion.div>
      </div>

      {/* Asset Summary */}
      <StaggeredChildren className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
        {[
          {
            title: "Total Assets",
            value: 2450000,
            change: "+12.5% from last month",
            icon: <DollarSign className="h-5 w-5 text-primary-600" />,
            trend: "up",
          },
          {
            title: "Investments",
            value: 1250000,
            change: "+8.3% from last month",
            icon: <BarChart3 className="h-5 w-5 text-primary-600" />,
            trend: "up",
          },
          {
            title: "Real Estate",
            value: 950000,
            change: "+2.1% from last month",
            icon: <PieChart className="h-5 w-5 text-primary-600" />,
            trend: "up",
          },
          {
            title: "Other Assets",
            value: 250000,
            change: "-1.5% from last month",
            icon: <DollarSign className="h-5 w-5 text-primary-600" />,
            trend: "down",
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
                  {formatCurrency(item.value)}
                  {item.trend === "up" && <TrendingUp className="ml-2 h-4 w-4 text-success-500" />}
                  {item.trend === "down" && <TrendingDown className="ml-2 h-4 w-4 text-destructive-500" />}
                </div>
                <p className="text-xs text-gray-500 mt-1">{item.change}</p>
              </CardContent>
            </Card>
          </InteractiveCard>
        ))}
      </StaggeredChildren>

      {/* Asset Allocation Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <CardTitle>Asset Allocation</CardTitle>
                <CardDescription>Distribution of your assets across different categories</CardDescription>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    This Year <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>This Month</DropdownMenuItem>
                  <DropdownMenuItem>This Quarter</DropdownMenuItem>
                  <DropdownMenuItem>This Year</DropdownMenuItem>
                  <DropdownMenuItem>All Time</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="h-[300px] relative flex items-center justify-center">
                <div className="w-[250px] h-[250px] rounded-full border-[30px] border-primary-500 relative">
                  <div className="absolute inset-0 border-[30px] border-t-success-500 border-r-success-500 border-b-transparent border-l-transparent rounded-full transform rotate-45"></div>
                  <div className="absolute inset-0 border-[30px] border-t-transparent border-r-transparent border-b-warning-500 border-l-warning-500 rounded-full transform rotate-45"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Total Value</p>
                    <p className="text-2xl font-bold">{formatCurrency(2450000)}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  {[
                    { name: "Stocks & Mutual Funds", value: 950000, percent: 39, color: "bg-primary-500" },
                    { name: "Real Estate", value: 950000, percent: 39, color: "bg-success-500" },
                    { name: "Fixed Income", value: 300000, percent: 12, color: "bg-warning-500" },
                    { name: "Cash & Equivalents", value: 150000, percent: 6, color: "bg-gray-500" },
                    { name: "Others", value: 100000, percent: 4, color: "bg-primary-300" },
                  ].map((asset, i) => (
                    <div key={i} className="flex items-center">
                      <div className={`w-4 h-4 ${asset.color} rounded-full mr-3`}></div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="font-medium">{asset.name}</span>
                          <span>{asset.percent}%</span>
                        </div>
                        <div className="text-sm text-gray-500">{formatCurrency(asset.value)}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Asset List */}
      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <TabsList className="grid grid-cols-4 w-full md:w-[400px]">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="investments">Investments</TabsTrigger>
            <TabsTrigger value="property">Property</TabsTrigger>
            <TabsTrigger value="other">Other</TabsTrigger>
          </TabsList>
          <div className="flex gap-3">
            <div className="relative flex-1 md:w-[300px]">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search assets..."
                className="pl-8 rounded-full bg-white border-gray-200"
              />
            </div>
            <Button variant="outline" size="icon" className="rounded-full">
              <Filter className="h-4 w-4" />
              <span className="sr-only">Filter</span>
            </Button>
          </div>
        </div>

        <TabsContent value="all" className="space-y-4 mt-4">
          <StaggeredChildren className="grid gap-4" staggerDelay={0.05}>
            {[
              {
                name: "HDFC Bank Shares",
                type: "Stocks",
                value: 250000,
                units: "500 shares",
                purchasePrice: 450,
                currentPrice: 500,
                change: "+11.1%",
                trend: "up",
              },
              {
                name: "Axis Bluechip Fund",
                type: "Mutual Fund",
                value: 180000,
                units: "5000 units",
                purchasePrice: 32,
                currentPrice: 36,
                change: "+12.5%",
                trend: "up",
              },
              {
                name: "Residential Apartment",
                type: "Real Estate",
                value: 950000,
                location: "Mumbai, Maharashtra",
                purchaseYear: 2018,
                purchasePrice: 850000,
                change: "+11.8%",
                trend: "up",
              },
              {
                name: "Government Bonds",
                type: "Fixed Income",
                value: 200000,
                interestRate: "7.5%",
                maturityDate: "Dec 2025",
                purchasePrice: 200000,
                currentPrice: 200000,
                change: "0%",
                trend: "neutral",
              },
              {
                name: "Gold ETF",
                type: "Commodity",
                value: 100000,
                units: "250 units",
                purchasePrice: 380,
                currentPrice: 400,
                change: "+5.3%",
                trend: "up",
              },
              {
                name: "Vintage Watch Collection",
                type: "Collectible",
                value: 150000,
                items: "5 watches",
                purchasePrice: 120000,
                change: "+25.0%",
                trend: "up",
              },
              {
                name: "Corporate Bonds",
                type: "Fixed Income",
                value: 100000,
                interestRate: "8.2%",
                maturityDate: "Jun 2024",
                purchasePrice: 100000,
                currentPrice: 100000,
                change: "0%",
                trend: "neutral",
              },
            ].map((asset, i) => (
              <InteractiveCard key={i} className="border border-gray-100 shadow-sm">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center">
                          <h3 className="font-semibold text-lg">{asset.name}</h3>
                          <span className="ml-3 px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">
                            {asset.type}
                          </span>
                        </div>
                        <div className="text-sm text-gray-500">
                          {asset.units && <span>{asset.units} • </span>}
                          {asset.location && <span>{asset.location} • </span>}
                          {asset.purchaseYear && <span>Purchased in {asset.purchaseYear} • </span>}
                          {asset.interestRate && <span>Interest: {asset.interestRate} • </span>}
                          {asset.maturityDate && <span>Matures: {asset.maturityDate}</span>}
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <div className="text-xl font-bold">{formatCurrency(asset.value)}</div>
                        <div className="flex items-center">
                          {asset.trend === "up" && <TrendingUp className="h-4 w-4 text-success-500 mr-1" />}
                          {asset.trend === "down" && <TrendingDown className="h-4 w-4 text-destructive-500 mr-1" />}
                          <span
                            className={
                              asset.trend === "up"
                                ? "text-success-600"
                                : asset.trend === "down"
                                  ? "text-destructive-600"
                                  : "text-gray-600"
                            }
                          >
                            {asset.change}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end mt-4">
                      <Button variant="ghost" size="sm" className="text-primary-600">
                        View Details <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </InteractiveCard>
            ))}
          </StaggeredChildren>
        </TabsContent>

        <TabsContent value="investments" className="space-y-4 mt-4">
          {/* Investment assets would go here */}
          <p className="text-center text-gray-500 py-8">Investment assets content</p>
        </TabsContent>

        <TabsContent value="property" className="space-y-4 mt-4">
          {/* Property assets would go here */}
          <p className="text-center text-gray-500 py-8">Property assets content</p>
        </TabsContent>

        <TabsContent value="other" className="space-y-4 mt-4">
          {/* Other assets would go here */}
          <p className="text-center text-gray-500 py-8">Other assets content</p>
        </TabsContent>
      </Tabs>
    </div>
  )
}
