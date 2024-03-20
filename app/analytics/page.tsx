import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
} from "layout/dashboard/components/card/card";
import {
  DotChart,
  GroupedbarChart,
  LabeledpieChart,
  LineChart,
  StackedbarChart,
} from "layout/dashboard/components/charts";

const AnalyticsPage = async () => {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardDescription>Total Sales</CardDescription>
            <CardTitle>$234.00</CardTitle>
          </CardHeader>
          <CardContent>
            <StackedbarChart className="aspect-[4/3]" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardDescription>Sessions</CardDescription>
            <CardTitle>345</CardTitle>
          </CardHeader>
          <CardContent>
            <DotChart className="aspect-[4/3]" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardDescription>Returning Customers</CardDescription>
            <CardTitle>33.5%</CardTitle>
          </CardHeader>
          <CardContent>
            <GroupedbarChart className="aspect-[4/3]" />
          </CardContent>
        </Card>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardDescription>Visitors</CardDescription>
            <CardTitle>3,456</CardTitle>
          </CardHeader>
          <CardContent>
            <LineChart className="aspect-[4/3]" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardDescription>Page Views</CardDescription>
            <CardTitle>12,345</CardTitle>
          </CardHeader>
          <CardContent>
            <LabeledpieChart className="aspect-[4/3]" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardDescription>Visitors</CardDescription>
            <CardTitle>Top Referrers</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center">
              <div>google.com</div>
              <div className="font-semibold ml-auto">3K</div>
            </div>
            <div className="flex items-center">
              <div>twitter.com</div>
              <div className="font-semibold ml-auto">1.2K</div>
            </div>
            <div className="flex items-center">
              <div>youtube.com</div>
              <div className="font-semibold ml-auto">1.1K</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default AnalyticsPage;
