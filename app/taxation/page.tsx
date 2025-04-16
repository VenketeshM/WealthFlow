"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Calendar,
  Calculator,
  FileText,
  Download,
  Upload,
  TrendingDown,
  Plus,
  Search,
  Filter,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { InteractiveCard } from "@/components/interactive-card"
import { StaggeredChildren } from "@/components/staggered-children"
import { useCurrency } from "@/contexts/currency-context"

export default function TaxationPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [taxYear, setTaxYear] = useState("2023-24")
  const { formatCurrency } = useCurrency()

  return (
    <div className="flex-1 space-y-8 p-4 md:p-8 pt-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl font-bold tracking-tight">Taxation</h2>
          <p className="text-gray-500">Plan, track, and optimize your tax strategy</p>
        </motion.div>
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Select value={taxYear} onValueChange={setTaxYear}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Tax Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2023-24">FY 2023-24</SelectItem>
              <SelectItem value="2022-23">FY 2022-23</SelectItem>
              <SelectItem value="2021-22">FY 2021-22</SelectItem>
            </SelectContent>
          </Select>
          <Button className="rounded-full bg-primary-600 hover:bg-primary-700">
            <FileText className="mr-2 h-4 w-4" /> Tax Report
          </Button>
        </motion.div>
      </div>

      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-8">
        <TabsList className="grid grid-cols-4 md:w-[600px]">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="calculator">Tax Calculator</TabsTrigger>
          <TabsTrigger value="planning">Tax Planning</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-8">
          {/* Tax Summary Cards */}
          <StaggeredChildren className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
            {[
              {
                title: "Estimated Tax",
                value: 245000,
                description: "Based on current income",
                icon: <Calculator className="h-5 w-5 text-primary-600" />,
              },
              {
                title: "Tax Paid",
                value: 180000,
                description: "TDS and advance tax",
                icon: <FileText className="h-5 w-5 text-primary-600" />,
              },
              {
                title: "Remaining Tax",
                value: 65000,
                description: "Due by July 31, 2024",
                icon: <Calendar className="h-5 w-5 text-primary-600" />,
              },
              {
                title: "Tax Savings",
                value: 50000,
                description: "Through deductions",
                icon: <TrendingDown className="h-5 w-5 text-primary-600" />,
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

          {/* Tax Breakdown */}
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Tax Breakdown</CardTitle>
                <CardDescription>Breakdown of your tax liability</CardDescription>
              </CardHeader>
              <CardContent>
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
                        strokeDashoffset="62.8"
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
                        strokeDashoffset="188.4"
                        transform="rotate(-90 50 50)"
                        className="opacity-75"
                      />
                    </svg>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-sm text-gray-500">Total Tax</p>
                      <p className="text-2xl font-bold">{formatCurrency(245000)}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mt-4">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-primary-500 rounded-full mr-3"></div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <span className="font-medium">Income Tax</span>
                        <span>{formatCurrency(180000)}</span>
                      </div>
                      <div className="text-sm text-gray-500">75% of total tax</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-success-500 rounded-full mr-3"></div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <span className="font-medium">Surcharge & Cess</span>
                        <span>{formatCurrency(65000)}</span>
                      </div>
                      <div className="text-sm text-gray-500">25% of total tax</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tax Savings</CardTitle>
                <CardDescription>Deductions and exemptions utilized</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  { name: "Section 80C", amount: 150000, max: 150000, percent: 100 },
                  { name: "Section 80D", amount: 25000, max: 50000, percent: 50 },
                  { name: "Section 80G", amount: 10000, max: 0, percent: 100 },
                  { name: "HRA Exemption", amount: 120000, max: 0, percent: 100 },
                ].map((deduction, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">{deduction.name}</div>
                        <div className="text-sm text-gray-500">
                          {deduction.max > 0
                            ? `${formatCurrency(deduction.amount)} of ${formatCurrency(deduction.max)}`
                            : formatCurrency(deduction.amount)}
                        </div>
                      </div>
                      {deduction.max > 0 && (
                        <div className="text-sm font-medium text-primary-600">{deduction.percent}%</div>
                      )}
                    </div>
                    {deduction.max > 0 && (
                      <div className="relative w-full h-2 bg-gray-100 rounded-full">
                        <div
                          className="absolute top-0 left-0 h-2 rounded-full bg-primary-500"
                          style={{ width: `${deduction.percent}%` }}
                        ></div>
                      </div>
                    )}
                  </div>
                ))}

                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center">
                    <div className="font-semibold">Total Tax Savings</div>
                    <div className="font-semibold text-success-600">{formatCurrency(50000)}</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full rounded-full">
                  <Plus className="mr-2 h-4 w-4" /> Add More Deductions
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Tax Timeline */}
          <Card>
            <CardHeader>
              <CardTitle>Tax Calendar</CardTitle>
              <CardDescription>Important tax dates and deadlines</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  {
                    date: "July 31, 2024",
                    title: "Income Tax Return Filing Deadline",
                    description: "Last date to file your income tax return for FY 2023-24",
                    status: "upcoming",
                  },
                  {
                    date: "June 15, 2024",
                    title: "Advance Tax (First Installment)",
                    description: "Due date for first installment of advance tax (15% of total tax)",
                    status: "upcoming",
                  },
                  {
                    date: "March 15, 2024",
                    title: "Advance Tax (Fourth Installment)",
                    description: "Due date for fourth installment of advance tax (25% of total tax)",
                    status: "completed",
                  },
                  {
                    date: "December 15, 2023",
                    title: "Advance Tax (Third Installment)",
                    description: "Due date for third installment of advance tax (30% of total tax)",
                    status: "completed",
                  },
                ].map((event, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="relative flex flex-col items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          event.status === "upcoming"
                            ? "bg-primary-100 text-primary-600"
                            : "bg-success-100 text-success-600"
                        }`}
                      >
                        <Calendar className="h-4 w-4" />
                      </div>
                      {i < 3 && <div className="w-0.5 h-full bg-gray-200 absolute top-8"></div>}
                    </div>
                    <div className="pb-6">
                      <div className="text-sm text-gray-500">{event.date}</div>
                      <div className="font-medium">{event.title}</div>
                      <div className="text-sm text-gray-600 mt-1">{event.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="calculator" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Income Tax Calculator</CardTitle>
              <CardDescription>Estimate your tax liability for FY {taxYear}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="income">Annual Income</Label>
                    <Input id="income" type="number" placeholder="Enter your annual income" defaultValue="1200000" />
                  </div>

                  <div className="space-y-2">
                    <Label>Tax Regime</Label>
                    <div className="flex gap-4">
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="old-regime"
                          name="tax-regime"
                          className="h-4 w-4 text-primary-600"
                          defaultChecked
                        />
                        <Label htmlFor="old-regime" className="font-normal">
                          Old Regime
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="radio" id="new-regime" name="tax-regime" className="h-4 w-4 text-primary-600" />
                        <Label htmlFor="new-regime" className="font-normal">
                          New Regime
                        </Label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="section-80c">Section 80C Deductions</Label>
                    <Input
                      id="section-80c"
                      type="number"
                      placeholder="Enter amount"
                      defaultValue="150000"
                      max="150000"
                    />
                    <div className="text-xs text-gray-500">Max limit: {formatCurrency(150000)}</div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="section-80d">Section 80D (Health Insurance)</Label>
                    <Input id="section-80d" type="number" placeholder="Enter amount" defaultValue="25000" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="hra">HRA Exemption</Label>
                    <Input id="hra" type="number" placeholder="Enter amount" defaultValue="120000" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="other-deductions">Other Deductions</Label>
                    <Input id="other-deductions" type="number" placeholder="Enter amount" defaultValue="50000" />
                  </div>

                  <Button className="w-full bg-primary-600 hover:bg-primary-700">
                    <Calculator className="mr-2 h-4 w-4" /> Calculate Tax
                  </Button>
                </div>

                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-lg mb-4">Tax Calculation Summary</h3>

                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Gross Total Income</span>
                        <span className="font-medium">{formatCurrency(1200000)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total Deductions</span>
                        <span className="font-medium">- {formatCurrency(345000)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Taxable Income</span>
                        <span className="font-medium">{formatCurrency(855000)}</span>
                      </div>

                      <div className="border-t border-gray-200 my-2 pt-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Income Tax</span>
                          <span className="font-medium">{formatCurrency(183000)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Surcharge</span>
                          <span className="font-medium">{formatCurrency(0)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Health & Education Cess (4%)</span>
                          <span className="font-medium">{formatCurrency(7320)}</span>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 my-2 pt-2">
                        <div className="flex justify-between font-semibold">
                          <span>Total Tax Liability</span>
                          <span>{formatCurrency(190320)}</span>
                        </div>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-gray-600">TDS/Advance Tax Paid</span>
                        <span className="font-medium">- {formatCurrency(180000)}</span>
                      </div>

                      <div className="border-t border-gray-200 my-2 pt-2">
                        <div className="flex justify-between font-semibold text-destructive-600">
                          <span>Remaining Tax to Pay</span>
                          <span>{formatCurrency(10320)}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <Button variant="outline" className="w-full">
                        <Download className="mr-2 h-4 w-4" /> Download Tax Report
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="planning" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Tax Planning Recommendations</CardTitle>
              <CardDescription>Personalized suggestions to optimize your tax strategy</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  {
                    title: "Maximize Section 80C Deductions",
                    description:
                      "You've utilized 100% of your 80C limit. Consider investing in ELSS funds for tax-saving with potential returns.",
                    savings: 0,
                    status: "completed",
                  },
                  {
                    title: "Health Insurance Premium (Section 80D)",
                    description:
                      "You can save more tax by utilizing the remaining limit under Section 80D. Consider getting health insurance for parents.",
                    savings: 10000,
                    status: "pending",
                  },
                  {
                    title: "National Pension Scheme (Section 80CCD)",
                    description:
                      "Invest in NPS to get additional tax benefit of up to ₹50,000 under Section 80CCD(1B).",
                    savings: 15000,
                    status: "pending",
                  },
                  {
                    title: "Home Loan Interest (Section 24)",
                    description:
                      "If you have a home loan, ensure you're claiming the interest deduction of up to ₹2,00,000.",
                    savings: 60000,
                    status: "pending",
                  },
                ].map((recommendation, i) => (
                  <div key={i} className="flex gap-4 p-4 border rounded-lg">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                        recommendation.status === "completed"
                          ? "bg-success-100 text-success-600"
                          : "bg-primary-100 text-primary-600"
                      }`}
                    >
                      {recommendation.status === "completed" ? (
                        <FileText className="h-5 w-5" />
                      ) : (
                        <TrendingDown className="h-5 w-5" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold">{recommendation.title}</h3>
                        {recommendation.savings > 0 && (
                          <div className="text-success-600 font-medium">
                            Save {formatCurrency(recommendation.savings)}
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{recommendation.description}</p>
                      {recommendation.status === "pending" && (
                        <Button variant="link" className="p-0 h-auto text-primary-600 text-sm mt-2">
                          Learn More <ArrowRight className="h-3 w-3 ml-1" />
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tax Saving Investments</CardTitle>
              <CardDescription>Investment options to reduce your tax liability</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: "ELSS Mutual Funds",
                    description: "Equity Linked Saving Scheme with 3-year lock-in period",
                    section: "80C",
                    maxDeduction: 150000,
                    expectedReturns: "10-12% p.a.",
                    riskLevel: "Moderate to High",
                  },
                  {
                    name: "Public Provident Fund (PPF)",
                    description: "Government backed long-term investment scheme",
                    section: "80C",
                    maxDeduction: 150000,
                    expectedReturns: "7.1% p.a.",
                    riskLevel: "Low",
                  },
                  {
                    name: "National Pension Scheme (NPS)",
                    description: "Retirement savings scheme with tax benefits",
                    section: "80CCD(1B)",
                    maxDeduction: 50000,
                    expectedReturns: "8-10% p.a.",
                    riskLevel: "Moderate",
                  },
                  {
                    name: "Health Insurance",
                    description: "Premium paid for self, spouse, children and parents",
                    section: "80D",
                    maxDeduction: 75000,
                    expectedReturns: "N/A",
                    riskLevel: "N/A",
                  },
                  {
                    name: "Tax-Saving Fixed Deposit",
                    description: "Bank FDs with 5-year lock-in period",
                    section: "80C",
                    maxDeduction: 150000,
                    expectedReturns: "5.5-6.5% p.a.",
                    riskLevel: "Low",
                  },
                  {
                    name: "National Savings Certificate (NSC)",
                    description: "Government backed savings certificate",
                    section: "80C",
                    maxDeduction: 150000,
                    expectedReturns: "6.8% p.a.",
                    riskLevel: "Low",
                  },
                ].map((investment, i) => (
                  <InteractiveCard key={i} className="border border-gray-100">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-lg mb-2">{investment.name}</h3>
                        <p className="text-sm text-gray-600 mb-4">{investment.description}</p>

                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-500">Section</span>
                            <span className="font-medium">{investment.section}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Max Deduction</span>
                            <span className="font-medium">{formatCurrency(investment.maxDeduction)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Expected Returns</span>
                            <span className="font-medium">{investment.expectedReturns}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Risk Level</span>
                            <span className="font-medium">{investment.riskLevel}</span>
                          </div>
                        </div>

                        <Button variant="outline" className="w-full mt-4 rounded-full">
                          Learn More
                        </Button>
                      </CardContent>
                    </Card>
                  </InteractiveCard>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents" className="space-y-8">
          <div className="flex justify-between items-center">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search documents..."
                className="pl-8 rounded-full bg-white border-gray-200"
              />
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="icon" className="rounded-full">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filter</span>
              </Button>
              <Button className="rounded-full bg-primary-600 hover:bg-primary-700">
                <Upload className="mr-2 h-4 w-4" /> Upload Document
              </Button>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Tax Documents</CardTitle>
              <CardDescription>Your tax-related documents and forms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    name: "Form 16",
                    description: "TDS Certificate from Employer",
                    date: "May 15, 2023",
                    size: "245 KB",
                    type: "PDF",
                  },
                  {
                    name: "Form 26AS",
                    description: "Tax Credit Statement",
                    date: "June 10, 2023",
                    size: "320 KB",
                    type: "PDF",
                  },
                  {
                    name: "Income Tax Return",
                    description: "FY 2022-23 ITR Filing Acknowledgement",
                    date: "July 25, 2023",
                    size: "180 KB",
                    type: "PDF",
                  },
                  {
                    name: "Investment Proofs",
                    description: "Section 80C Investment Documents",
                    date: "March 30, 2023",
                    size: "1.2 MB",
                    type: "ZIP",
                  },
                  {
                    name: "Health Insurance Premium Receipt",
                    description: "Section 80D Proof",
                    date: "January 15, 2023",
                    size: "150 KB",
                    type: "PDF",
                  },
                ].map((document, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center">
                        <FileText className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">{document.name}</h3>
                        <p className="text-sm text-gray-500">{document.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-sm text-gray-500 hidden md:block">
                        <div>{document.date}</div>
                        <div>
                          {document.size} • {document.type}
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="rounded-full">
                        <Download className="h-4 w-4" />
                        <span className="sr-only">Download</span>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
