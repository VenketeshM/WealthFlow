"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type CurrencyContextType = {
  currency: string
  symbol: string
  setCurrency: (currency: string) => void
  formatCurrency: (amount: number) => string
}

const currencyOptions = {
  INR: { symbol: "₹", locale: "en-IN" },
  USD: { symbol: "$", locale: "en-US" },
  EUR: { symbol: "€", locale: "de-DE" },
  GBP: { symbol: "£", locale: "en-GB" },
  JPY: { symbol: "¥", locale: "ja-JP" },
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined)

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrency] = useState("INR")
  const [symbol, setSymbol] = useState(currencyOptions.INR.symbol)

  useEffect(() => {
    // Load saved currency from localStorage if available
    const savedCurrency = localStorage.getItem("preferredCurrency")
    if (savedCurrency && currencyOptions[savedCurrency as keyof typeof currencyOptions]) {
      setCurrency(savedCurrency)
      setSymbol(currencyOptions[savedCurrency as keyof typeof currencyOptions].symbol)
    }
  }, [])

  const handleSetCurrency = (newCurrency: string) => {
    if (currencyOptions[newCurrency as keyof typeof currencyOptions]) {
      setCurrency(newCurrency)
      setSymbol(currencyOptions[newCurrency as keyof typeof currencyOptions].symbol)
      localStorage.setItem("preferredCurrency", newCurrency)
    }
  }

  const formatCurrency = (amount: number) => {
    const currencyInfo = currencyOptions[currency as keyof typeof currencyOptions]

    return new Intl.NumberFormat(currencyInfo.locale, {
      style: "currency",
      currency: currency,
      maximumFractionDigits: 2,
    }).format(amount)
  }

  return (
    <CurrencyContext.Provider value={{ currency, symbol, setCurrency: handleSetCurrency, formatCurrency }}>
      {children}
    </CurrencyContext.Provider>
  )
}

export function useCurrency() {
  const context = useContext(CurrencyContext)
  if (context === undefined) {
    throw new Error("useCurrency must be used within a CurrencyProvider")
  }
  return context
}
