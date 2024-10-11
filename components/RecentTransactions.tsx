import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const recentTransactions = [
  { id: 1, symbol: "AAPL", type: "Buy", amount: 100, price: 150.25 },
  { id: 2, symbol: "GOOGL", type: "Sell", amount: 50, price: 2750.10 },
  { id: 3, symbol: "MSFT", type: "Buy", amount: 75, price: 305.50 },
  { id: 4, symbol: "AMZN", type: "Buy", amount: 25, price: 3305.00 },
  { id: 5, symbol: "TSLA", type: "Sell", amount: 30, price: 750.75 },
]

export function RecentTransactions() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Symbol</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recentTransactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell className="font-medium">{transaction.symbol}</TableCell>
            <TableCell>{transaction.type}</TableCell>
            <TableCell>{transaction.amount}</TableCell>
            <TableCell>${transaction.price.toFixed(2)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}