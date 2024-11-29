

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"



"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
{ month: "September", revenue: 16, costs: 90 },
{ month: "October", revenue: 16, costs: 30 },
{ month: "November", revenue: 86, costs: 80 },
{ month: "December", revenue: 0, costs: 0 },
  { month: "January", revenue: 0, costs: 0 },
  { month: "February", revenue: 0, costs: 0 },
  { month: "March", revenue: 0, costs: 0 },
  { month: "April", revenue: 0, costs: 0 },
  { month: "May", revenue: 0, costs: 0 },
  { month: "June", revenue: 0, costs: 0 },
]

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "#292524",
  },
  costs: {
    label: "Costs",
    color: "#d4d4d4",
  },
} satisfies ChartConfig

export function Component() {
  return (
    <ChartContainer config={chartConfig} className="h-[350px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={5}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="revenue" fill="var(--color-revenue)" radius={4} />
        <Bar dataKey="costs" fill="var(--color-costs)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}




const getBalanceDifference = (transactions: { date: string; balance: string; description: string }[]) => {
    // Sort transactions by date
    const sortedTransactions = transactions.slice().sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  
    // Get the earliest and latest transactions
    const earliest = sortedTransactions[0];
    const latest = sortedTransactions[sortedTransactions.length - 1];
  
    // Extract balances and remove the € symbol and commas, then convert to numbers
    const earliestBalance = parseFloat(earliest.balance.replace("€", "").replace(",", ""));
    const latestBalance = parseFloat(latest.balance.replace("€", "").replace(",", ""));
  
    // Calculate the difference
    const balanceDifference = latestBalance - earliestBalance;
  
    return {
      earliest,
      latest,
      balanceDifference
    };
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const formatter = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formatter.format(date);
  };


const Finances = () => {
    

    const transactions = [
        {
            date: "2024-09-24",
            balance: "1,470.89€",
            change:0,
            description: "Start of year"
        },
        {
            date: "2024-10-30",
            balance: "1,510.34€",
            change:51.73,
            description: "Halloween"
        },
        {
            date: "2024-11-15",
            balance: "1,460.14€",
            change:-61.73,
            description: "Costume competition winner's pizza party"
        }
        ];
      
        const result = getBalanceDifference(transactions);

  return (
    <div className="mb-12">
    <h2 className="text-6xl font-normal my-8 w-full text-center">Finances</h2>
   <div className="flex flex-row align-top">
    <div className="w-1/2 m-4 ml-48 text-xl flex flex-col">
        <div className="mb-4">The Student Council's mission involves full transparency of it's finances. This is essential for ensuring fair expediture of resources. </div>
        <div className="mb-4">Student Council led activities are the primary source of income, while fees - for things such as dress days and lunch passes also add to income. </div>
        <div>Our Motto for the 2024-2025 Student Council is based on our Head Student's campaigns. Gabriel promised to "Bring in the Big Bucks", that includes 
            making our finances public, increasing Student Council revenue and spending. Cal's campaign also promised spending on 
            student projects and solutions to student problems as they arise.</div>
    </div>
   <div className="w-1/4 flex flex-col m-4 mr-48 items-end justify-start">
        <div className="flex flex-row items-end text-3xl justify-end w-full">Current Balance</div>
        <div className="flex flex-row items-end text-6xl justify-end w-full mt-2 mb-8">{transactions.slice().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0].balance}</div>
        <div className="flex flex-row items-end text-3xl justify-end w-full">Yearly Change</div>
        <div
  className={`flex flex-row items-end justify-end text-6xl mt-2 mb-8 align-middle rounded-3xl p-2 w-min  ${
    result.balanceDifference >= 0 ? "bg-green-600 text-white" : "bg-red-600 text-white"
  }`}
>
  
  {result.balanceDifference.toFixed(2) + "€"}
</div>

    </div>
   </div>
   <div className="items-center mx-48">
   <div className="text-4xl font-normal mb-4 w-full text-center ">Costs and Revenues</div>
   <div className="border rounded-3xl p-4 pt-6"><Component/></div>
   <div className="text-4xl font-normal mb-4 text-center w-full mt-12">Balance History</div>
   <div className="border rounded-3xl "><Table>
    <TableHeader>
        <TableRow>
        <TableHead className="w-[100px] text-2xl font-normal text-black py-2 pl-6">Balance</TableHead>
        <TableHead className="w-[100px] text-2xl font-normal text-black py-2 pl-6">Change</TableHead>
        <TableHead className="text-2xl font-normal text-black py-2  ">Description</TableHead>
        <TableHead className="text-right text-2xl font-normal text-black py-2   pr-6">Date</TableHead>
        </TableRow>
    </TableHeader>
    <TableBody>
        {transactions.map((transation) => {
            return <TableRow>
            <TableCell className="font-medium text-xl">{transation.balance}</TableCell>
            <TableCell className={`font-medium text-xl ${transation.change>= 0 ? "text-green-600 " : "text-red-600 "}`}>{transation.change ? transation.change:""}</TableCell>
            <TableCell className="text-xl">{transation.description}</TableCell>
            <TableCell className="text-right text-xl">{formatDate(transation.date)}</TableCell>
            </TableRow>
        }
        )}
    </TableBody>
    </Table></div>
   
   </div>
    
    </div>
  )
}

export default Finances