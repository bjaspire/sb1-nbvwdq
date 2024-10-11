"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'
import { BarChart, LineChart, Table, TrendingUp, Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Navbar = () => {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  const navItems = [
    { href: "/", icon: BarChart, label: "Overview" },
    { href: "/daily-transactions", icon: LineChart, label: "Daily Transactions" },
    { href: "/floor-sheet", icon: Table, label: "Floor Sheet" },
  ]

  return (
    <nav className="flex items-center justify-between py-4 px-6 bg-secondary">
      <Link href="/" className="flex items-center space-x-2">
        <TrendingUp className="h-6 w-6" />
        <span className="font-bold text-lg">StockAnalyzer</span>
      </Link>
      <div className="flex items-center space-x-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center space-x-1 px-3 py-2 rounded-md transition-colors",
              pathname === item.href
                ? "bg-primary text-primary-foreground"
                : "hover:bg-accent hover:text-accent-foreground"
            )}
          >
            <item.icon className="h-4 w-4" />
            <span>{item.label}</span>
          </Link>
        ))}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="ml-4"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </nav>
  )
}

export default Navbar