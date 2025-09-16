import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/Sidebar";
import StatsCards from "../Components/StatsCards/StatsCards";
import CustomBarChart from "../Components/Charts/BarChart";
import CustomLineChart from "../Components/Charts/LineChart";

// mock data
import mockData from "../data/mock-data.json";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col bg-gray-100 min-h-screen">
        {/* Header */}
        <Header />

        {/* Page content */}
        <main className="p-6 space-y-6 flex-1">
          {/* Stats Cards */}
          <StatsCards data={mockData.stats} />

          {/* Charts */}
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-4 text-black">Today</h2>
              <CustomBarChart data={mockData.barChartData} />
            </section>

            <section>
              <CustomLineChart data={mockData.lineChartData} />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
