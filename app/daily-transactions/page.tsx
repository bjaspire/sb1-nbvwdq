import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RecentTransactions } from "@/components/RecentTransactions"

export default function DailyTransactions() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Daily Transactions</CardTitle>
          <CardDescription>
            Overview of your daily stock transactions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RecentTransactions />
        </CardContent>
      </Card>
    </div>
  )
}