import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Overview } from "@/components/Overview"
import { RecentTransactions } from "@/components/RecentTransactions"

export default function Home() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card className="col-span-full">
        <CardHeader>
          <CardTitle>Stock Analysis Dashboard</CardTitle>
          <CardDescription>
            Overview of your stock portfolio and market trends
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Overview />
        </CardContent>
      </Card>
      <Card className="col-span-full md:col-span-2">
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>
            Your most recent stock transactions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RecentTransactions />
        </CardContent>
      </Card>
    </div>
  )
}