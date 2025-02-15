import { Card } from "@/app/ui/dashboard/cards";
import RevenueChart from "../ui/dashboard/revenue-chart";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import { lusitana } from "../ui/fonts";
import {
  fetchRevenue,
  fetchLatestInvoices,
  fetchCardData,
} from "@/app/lib/data";

export default async function Page() {
  const revenue = await fetchRevenue();
  const latestInvoices = await fetchLatestInvoices();
  const c = await fetchCardData();

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-x1 md:text-2x1`}>
        DashBoard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={c.totalPaidInvoices} type="collected" />
        <Card title="Pending" value={c.totalPendingInvoices} type="pending" />
        <Card
          title="Total Invoices"
          value={c.numberOfInvoices}
          type="invoices"
        />
        <Card
          title="Total Customers"
          value={c.numberOfCustomers}
          type="customers"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart revenue={revenue} />
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </main>
  );
}
