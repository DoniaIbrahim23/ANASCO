"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import mockData from "../../data/mock-data.json";

const DONUT_COLORS = ["#94C8A6", "#1C1C1E", "#B0B0C0", "#F4F4F6"];
const BAR_COLORS = [
  "#90A5F9",
  "#94C8A6",
  "#1C1C1E",
  "#A4C2E0",
  "#B0B0C0",
  "#63AC8A",
];

const DeviceLocationCharts: React.FC = () => {
  const barChartData = mockData.trafficByDeviceData;
  const donutChartData = mockData.trafficByLocationData;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
      {/*  Traffic by Device */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
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

      {/*Traffic by Location */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-xl font-bold mb-4 text-black">
          Traffic by Location
        </h3>
        <div className="flex justify-center items-center">
          {/* Donut Chart */}
          <ResponsiveContainer width="50%" height={250}>
            <PieChart>
              <Pie
                data={donutChartData}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
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
          {/* Right Side*/}
          <div className="w-1/2 text-sm text-gray-600">
            <ul className="space-y-4">
              {donutChartData.map((item, index) => (
                <li key={item.name} className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{
                      backgroundColor:
                        DONUT_COLORS[index % DONUT_COLORS.length],
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
    </div>
  );
};

export default DeviceLocationCharts;