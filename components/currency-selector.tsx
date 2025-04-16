"use client"

import { useState } from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { useCurrency } from "@/contexts/currency-context"

const currencies = [
  { value: "INR", label: "Indian Rupee (₹)", flag: "🇮🇳" },
  { value: "USD", label: "US Dollar ($)", flag: "🇺🇸" },
  { value: "EUR", label: "Euro (€)", flag: "🇪🇺" },
  { value: "GBP", label: "British Pound (£)", flag: "🇬🇧" },
  { value: "JPY", label: "Japanese Yen (¥)", flag: "🇯🇵" },
]

export function CurrencySelector() {
  const { currency, setCurrency } = useCurrency()
  const [open, setOpen] = useState(false)

  const selectedCurrency = currencies.find((c) => c.value === currency)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[180px] justify-between bg-white/50 backdrop-blur-sm border-gray-200 hover:bg-white/80"
        >
          {selectedCurrency ? (
            <span className="flex items-center">
              <span className="mr-2">{selectedCurrency.flag}</span>
              {selectedCurrency.value}
            </span>
          ) : (
            "Select currency..."
          )}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search currency..." />
          <CommandList>
            <CommandEmpty>No currency found.</CommandEmpty>
            <CommandGroup>
              {currencies.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={(currentValue) => {
                    setCurrency(currentValue)
                    setOpen(false)
                  }}
                >
                  <Check className={cn("mr-2 h-4 w-4", currency === item.value ? "opacity-100" : "opacity-0")} />
                  <span className="mr-2">{item.flag}</span>
                  {item.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
