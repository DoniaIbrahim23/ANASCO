"use client";

import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

interface DonutChartDataItem {
  name: string;
  value: number;
}

const DONUT_COLORS = ["#1C1C1E", "#94C8A6", "#A4C2E0", "#E3F5FF"];

const TrafficByLocationChart: React.FC = () => {
  const donutChartData: DonutChartDataItem[] = [
    { name: "United States", value: 38.6 },
    { name: "Canada", value: 22.5 },
    { name: "Mexico", value: 30.8 },
    { name: "Other", value: 8.1 },
  ];

  return (
    <div className="bg-[#F7F9FB] rounded-xl p-6 shadow-sm border border-gray-200">
      <h3 className="text-xl font-bold mb-4 text-black">Traffic by Location</h3>
      <div className="flex justify-center items-center">
        <ResponsiveContainer width="50%" height={250}>
          <PieChart>
            <Pie
              data={donutChartData as any}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
              cornerRadius={20}
            >
              {donutChartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={DONUT_COLORS[index % DONUT_COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div className="w-1/2 text-sm text-gray-600">
          <ul className="space-y-4">
            {donutChartData.map((item, index) => (
              <li key={item.name} className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: DONUT_COLORS[index % DONUT_COLORS.length],
                  }}
                ></span>
                <span className="font-medium text-gray-900">{item.name}</span>
                <span className="ml-auto text-gray-500">{item.value}%</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TrafficByLocationChart;
