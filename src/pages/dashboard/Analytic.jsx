/* eslint-disable tailwindcss/no-custom-classname */
import Card from "../../components/card/Card";
import ChartTotalProfit from "../../components/charts/ChartTotalProfit";
import ChartTotalSales from "../../components/charts/ChartTotalSales";
import CardVisitors from "../../components/charts/ChartVisitors";
import TableProduct from "../../components/tables/TableProduct";
import TableTopChannel from "../../components/tables/TableTopChannel";
import DefaultLayout from "../../layout/DefaultLayout";

export default function Analytic() {
  const statistic = [
    {
      icon: "ri-eye-line",
      amount: `${35.382}K`,
      description: "Total views",
      percentage: 0.34,
    },
    {
      icon: "ri-shopping-cart-line",
      amount: `$${45.2}`,
      description: "Total Profit",
      percentage: 20,
    },
    {
      icon: "ri-shopping-bag-2-line",
      amount: `${25}K`,
      description: "Total Product",
      percentage: 20,
    },
    {
      icon: "ri-user-follow-line",
      amount: `${3.4}K`,
      description: "Total Followers",
      percentage: 20,
    },
  ];

  return (
    <DefaultLayout>
      <div className="2xl:gap-7.5 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4">
        {statistic.map((statistic, key) => (
          <Card
            key={key}
            icon={statistic.icon}
            amount={statistic.amount}
            description={statistic.description}
            percentage={statistic.percentage}
          />
        ))}
      </div>
      <div className="2xl:mt-7.5 2xl:gap-7.5 mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6">
        <ChartTotalSales />
        <ChartTotalProfit />
        <div className="col-span-12 xl:col-span-7">
          <TableProduct />
        </div>
        <CardVisitors />
      </div>
      <div className="mt-4">
        <TableTopChannel />
      </div>
    </DefaultLayout>
  );
}
