"use client";

import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/Sidebar";
import StatsCards from "../Components/StatsCards/StatsCards";
import mockData from "../data/mock-data.json";
import { TrendingUp, TrendingDown } from "lucide-react";
import LineChartCard from "../Components/Charts/LineChartCard";
import TrafficByDeviceChart from "../Components/Charts/BarChart";
import TrafficByLocationChart from "../Components/Charts/PieChart"; // New Import

interface StatsData {
  title: string;
  value: string;
  change: string;
  type: "positive" | "negative";
}

interface DonutChartDataItem {
  name: string;
  value: number;
}

// Start of the main component
export default function Dashboard() {
  type Stat = {
    title: string;
    value: string;
    change: string;
  };

  const statsData: Stat[] = mockData.stats.map((item) => ({
    title: item.title,
    value: item.value,
    change: item.change,
  }));

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col bg-gray-100 min-h-screen">
        {/* Header */}
        <Header />

        {/* Page content */}
        <main className="bg-white p-6 space-y-6 flex-1">
          {/* Stats Cards */}
          <StatsCards data={statsData} />

          {/* Charts */}
          <div className="space-y-6">
            {/* Total Users & Projects Section */}
            <LineChartCard />

            {/* Device & Location Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Traffic by Device */}
              <TrafficByDeviceChart />

              {/* Traffic by Location */}
              <TrafficByLocationChart />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
