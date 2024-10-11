import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const floorSheetData = [
  { id: 1, symbol: "AAPL", buyer: "Broker A", seller: "Broker B", quantity: 100, price: 150.25 },
  { id: 2, symbol: "GOOGL", buyer: "Broker C", seller: "Broker D", quantity: 50, price: 2750.10 },
  { id: 3, symbol: "MSFT", buyer: "Broker E", seller: "Broker F", quantity: 75, price: 305.50 },
  { id: 4, symbol: "AMZN", buyer: "Broker G", seller: "Broker H", quantity: 25, price: 3305.00 },
  { id: 5, symbol: "TSLA", buyer: "Broker I", seller: "Broker J", quantity: 30, price: 750.75 },
]

export default function FloorSheet() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Floor Sheet</CardTitle>
          <CardDescription>
            Detailed view of stock transactions on the trading floor
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Symbol</TableHead>
                <TableHead>Buyer</TableHead>
                <TableHead>Seller</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {floorSheetData.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="font-medium">{transaction.symbol}</TableCell>
                  <TableCell>{transaction.buyer}</TableCell>
                  <TableCell>{transaction.seller}</TableCell>
                  <TableCell>{transaction.quantity}</TableCell>
                  <TableCell>${transaction.price.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}