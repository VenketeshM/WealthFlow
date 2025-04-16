"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  ArrowRight,
  ArrowUpRight,
  ArrowDownRight,
  CreditCard,
  Download,
  Filter,
  Plus,
  RefreshCw,
  Search,
  Send,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { InteractiveCard } from "@/components/interactive-card"
import { StaggeredChildren } from "@/components/staggered-children"
import { useCurrency } from "@/contexts/currency-context"

export default function BankingPage() {
  const [activeTab, setActiveTab] = useState("accounts")
  const { formatCurrency } = useCurrency()

  return (
    <div className="flex-1 space-y-8 p-4 md:p-8 pt-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl font-bold tracking-tight">Banking</h2>
          <p className="text-gray-500">Manage your bank accounts, cards, and transactions.</p>
        </motion.div>
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button variant="outline" className="gap-2 rounded-full">
            <RefreshCw className="h-4 w-4" /> Refresh
          </Button>
          <Button className="rounded-full bg-primary-600 hover:bg-primary-700">
            <Plus className="mr-2 h-4 w-4" /> Add Account
          </Button>
        </motion.div>
      </div>

      <Tabs defaultValue="accounts" value={activeTab} onValueChange={setActiveTab} className="space-y-8">
        <TabsList className="grid grid-cols-3 md:w-[400px]">
          <TabsTrigger value="accounts">Accounts</TabsTrigger>
          <TabsTrigger value="cards">Cards</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
        </TabsList>

        <TabsContent value="accounts" className="space-y-8">
          {/* Bank Accounts */}
          <StaggeredChildren className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
            {[
              {
                name: "Primary Checking",
                institution: "HDFC Bank",
                accountNumber: "XXXX-XXXX-4321",
                balance: 12450.75,
                type: "Checking",
                color: "bg-primary-500",
              },
              {
                name: "Savings Account",
                institution: "ICICI Bank",
                accountNumber: "XXXX-XXXX-8765",
                balance: 28750.5,
                type: "Savings",
                color: "bg-success-500",
              },
              {
                name: "Joint Account",
                institution: "SBI Bank",
                accountNumber: "XXXX-XXXX-1234",
                balance: 8500.25,
                type: "Checking",
                color: "bg-primary-600",
              },
              {
                name: "Fixed Deposit",
                institution: "Axis Bank",
                accountNumber: "XXXX-XXXX-5432",
                balance: 50000.0,
                type: "Savings",
                color: "bg-warning-500",
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
                          account.type === "Checking"
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
                        <p className="text-xl font-bold text-gray-900">{formatCurrency(account.balance)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Account Number</p>
                        <p className="text-sm">{account.accountNumber}</p>
                      </div>
                      <div className="flex gap-2 pt-2">
                        <Button variant="outline" size="sm" className="rounded-full">
                          <Send className="h-4 w-4 mr-2" /> Transfer
                        </Button>
                        <Button variant="ghost" size="sm" className="rounded-full">
                          <Download className="h-4 w-4 mr-2" /> Statement
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
                  <h3 className="font-medium text-gray-600 mb-2">Link New Account</h3>
                  <p className="text-sm text-gray-500 text-center mb-4">Connect your bank account securely</p>
                  <Button className="rounded-full bg-primary-600 hover:bg-primary-700">Connect Bank</Button>
                </CardContent>
              </Card>
            </InteractiveCard>
          </StaggeredChildren>

          {/* Recent Transactions */}
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle>Recent Transactions</CardTitle>
                  <CardDescription>Your latest banking activity across all accounts</CardDescription>
                </div>
                <div className="flex gap-3">
                  <div className="relative flex-1 md:w-[300px]">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input
                      type="search"
                      placeholder="Search transactions..."
                      className="pl-8 rounded-full bg-white border-gray-200"
                    />
                  </div>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Filter className="h-4 w-4" />
                    <span className="sr-only">Filter</span>
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <StaggeredChildren className="space-y-4" staggerDelay={0.05}>
                {[
                  {
                    name: "Grocery Store",
                    account: "Primary Checking",
                    amount: -156.32,
                    date: "Today",
                    time: "2:30 PM",
                    category: "Food",
                  },
                  {
                    name: "Salary Deposit",
                    account: "Savings Account",
                    amount: 45000.0,
                    date: "Yesterday",
                    time: "9:15 AM",
                    category: "Income",
                  },
                  {
                    name: "Electric Bill",
                    account: "Primary Checking",
                    amount: -2194.21,
                    date: "Yesterday",
                    time: "8:30 AM",
                    category: "Utilities",
                  },
                  {
                    name: "Online Purchase",
                    account: "Primary Checking",
                    amount: -1520.0,
                    date: "3 days ago",
                    time: "4:45 PM",
                    category: "Shopping",
                  },
                  {
                    name: "Restaurant",
                    account: "Joint Account",
                    amount: -865.5,
                    date: "4 days ago",
                    time: "7:20 PM",
                    category: "Dining",
                  },
                ].map((transaction, i) => (
                  <motion.div
                    key={i}
                    className="flex flex-col md:flex-row md:items-center md:justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
                    whileHover={{ x: 5 }}
                  >
                    <div className="space-y-1">
                      <p className="font-medium">{transaction.name}</p>
                      <div className="flex items-center text-xs text-gray-500">
                        <span>{transaction.account}</span>
                        <span className="mx-1">•</span>
                        <span>{transaction.category}</span>
                        <span className="mx-1">•</span>
                        <span>
                          {transaction.date} at {transaction.time}
                        </span>
                      </div>
                    </div>
                    <div className="font-medium mt-2 md:mt-0">
                      {transaction.amount > 0 ? (
                        <span className="text-success-600 flex items-center">
                          <ArrowUpRight className="h-4 w-4 mr-1" />
                          {formatCurrency(transaction.amount)}
                        </span>
                      ) : (
                        <span className="text-gray-900 flex items-center">
                          <ArrowDownRight className="h-4 w-4 mr-1" />
                          {formatCurrency(Math.abs(transaction.amount))}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </StaggeredChildren>
              <div className="flex justify-center mt-6">
                <Button variant="outline" className="rounded-full">
                  View All Transactions <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cards" className="space-y-8">
          {/* Credit and Debit Cards */}
          <StaggeredChildren className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
            {[
              {
                name: "Platinum Credit Card",
                institution: "HDFC Bank",
                number: "•••• •••• •••• 4321",
                expiryDate: "05/26",
                type: "Credit",
                limit: 200000,
                balance: 45000,
                color: "bg-gradient-to-r from-gray-800 to-gray-900",
              },
              {
                name: "Gold Debit Card",
                institution: "ICICI Bank",
                number: "•••• •••• •••• 8765",
                expiryDate: "12/25",
                type: "Debit",
                linkedAccount: "Savings Account",
                color: "bg-gradient-to-r from-yellow-600 to-yellow-700",
              },
              {
                name: "Rewards Credit Card",
                institution: "SBI Card",
                number: "•••• •••• •••• 9876",
                expiryDate: "08/24",
                type: "Credit",
                limit: 100000,
                balance: 25000,
                color: "bg-gradient-to-r from-primary-600 to-primary-800",
              },
            ].map((card, i) => (
              <InteractiveCard key={i} className="border border-gray-100 shadow-sm">
                <Card>
                  <CardContent className="p-0">
                    <div className={`${card.color} text-white rounded-t-lg p-6 relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-10 -mb-10"></div>

                      <div className="space-y-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-sm opacity-80">{card.institution}</p>
                            <h3 className="font-semibold text-lg">{card.name}</h3>
                          </div>
                          <div className="text-xs font-medium px-2 py-1 bg-white/20 rounded-full">{card.type}</div>
                        </div>

                        <div>
                          <p className="text-sm opacity-80">Card Number</p>
                          <p className="font-mono">{card.number}</p>
                        </div>

                        <div className="flex justify-between items-end">
                          <div>
                            <p className="text-xs opacity-80">Expires</p>
                            <p>{card.expiryDate}</p>
                          </div>
                          <CreditCard className="h-8 w-8 opacity-80" />
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      {card.type === "Credit" ? (
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm text-gray-500">Current Balance</p>
                            <p className="text-xl font-bold text-gray-900">{formatCurrency(card.balance)}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Credit Limit</p>
                            <p className="text-sm">{formatCurrency(card.limit)}</p>
                          </div>
                          <div className="flex gap-2 pt-2">
                            <Button variant="outline" size="sm" className="rounded-full">
                              Pay Bill
                            </Button>
                            <Button variant="ghost" size="sm" className="rounded-full">
                              View Statement
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm text-gray-500">Linked Account</p>
                            <p className="text-lg font-medium">{card.linkedAccount}</p>
                          </div>
                          <div className="flex gap-2 pt-2">
                            <Button variant="outline" size="sm" className="rounded-full">
                              Manage Card
                            </Button>
                            <Button variant="ghost" size="sm" className="rounded-full">
                              View Transactions
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </InteractiveCard>
            ))}
            <InteractiveCard className="border border-dashed border-gray-200 shadow-sm bg-gray-50">
              <Card className="bg-transparent">
                <CardContent className="flex flex-col items-center justify-center h-full py-12">
                  <Plus className="h-10 w-10 text-gray-400 mb-4" />
                  <h3 className="font-medium text-gray-600 mb-2">Add New Card</h3>
                  <p className="text-sm text-gray-500 text-center mb-4">Link a credit or debit card to your account</p>
                  <Button className="rounded-full bg-primary-600 hover:bg-primary-700">Add Card</Button>
                </CardContent>
              </Card>
            </InteractiveCard>
          </StaggeredChildren>
        </TabsContent>

        <TabsContent value="transactions" className="space-y-8">
          {/* Transactions content here */}
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle>All Transactions</CardTitle>
                  <CardDescription>Comprehensive view of all your banking transactions</CardDescription>
                </div>
                <div className="flex gap-3">
                  <div className="relative flex-1 md:w-[300px]">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input
                      type="search"
                      placeholder="Search transactions..."
                      className="pl-8 rounded-full bg-white border-gray-200"
                    />
                  </div>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Filter className="h-4 w-4" />
                    <span className="sr-only">Filter</span>
                  </Button>
                  <Button variant="outline" className="rounded-full">
                    <Download className="h-4 w-4 mr-2" /> Export
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-500 py-8">Detailed transaction history would be displayed here</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
