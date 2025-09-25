"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import mockData from "../../data/mock-data.json";

interface BarChartDataItem {
  name: string;
  value: number;
}

const BAR_COLORS = ["#90A5F9", "#94C8A6", "#1C1C1E", "#A4C2E0", "#B0B0C0", "#63AC8A"];

const TrafficByDeviceChart: React.FC = () => {
  const barChartData: BarChartDataItem[] = mockData.trafficByDeviceData;

  return (
    <div className="bg-[#F7F9FB] rounded-xl p-6 shadow-sm border border-gray-200">
      <h3 className="text-xl font-bold mb-4 text-black">Traffic by Device</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={barChartData}>
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip />
          <Bar dataKey="value" radius={[10, 10, 0, 0]}>
            {barChartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={BAR_COLORS[index % BAR_COLORS.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrafficByDeviceChart;