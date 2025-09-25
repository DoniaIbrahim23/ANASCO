"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import mockData from "../../data/mock-data.json";
import {
  Search,
  Youtube,
  Instagram,
  Facebook,
  Twitter,
  ChevronDown,
} from "lucide-react";

interface LineChartDataItem {
  month: string;
  current: number;
  previous: number;
}

interface TrafficByWebsiteDataItem {
  name: string;
  value: number;
}

const platformIcons = {
  Google: <Search className="w-4 h-4 text-gray-600" />,
  YouTube: <Youtube className="w-4 h-4 text-red-500" />,
  Instagram: <Instagram className="w-4 h-4 text-pink-500" />,
  Facebook: <Facebook className="w-4 h-4 text-blue-600" />,
  Twitter: <Twitter className="w-4 h-4 text-blue-400" />,
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-800 text-white p-2 rounded-md text-xs shadow-lg">
        <p className="font-bold">{label}</p>
        <div className="mt-2 text-sm">
          {payload.map((entry: any, index: number) => (
            <p key={`item-${index}`} style={{ color: entry.color }}>
              {`${entry.name}: ${entry.value}`}
            </p>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

const LineChartCard: React.FC = () => {
  const lineChartData: LineChartDataItem[] = mockData.trafficLineChart;
  const trafficByWebsiteData: TrafficByWebsiteDataItem[] =
    mockData.trafficByWebsiteData;

  return (
    <div className="flex gap-6">
      <div className="flex-1 bg-[#F7F9FB] rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-center gap-4 text-sm font-semibold text-gray-500 mb-6">
          <span className="text-gray-900 cursor-pointer">Total Users</span>
          <span className="text-gray-500 cursor-pointer">Total Projects</span>
          <span className="text-gray-500 cursor-pointer">Operating Status</span>
        </div>

        <div className="flex justify-end items-center mb-6">
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-gray-900"></span>
              Current Week
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full border border-gray-400 border-dashed"></span>
              Previous Week
            </span>
          </div>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={lineChartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid vertical={false} stroke="#e0e0e0" />
            <XAxis dataKey="month" tickLine={false} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="current"
              stroke="#A4C2E0"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{
                r: 6,
                stroke: "#A4C2E0",
                strokeWidth: 2,
                fill: "#fff",
              }}
              name="Current Week"
            />
            <Line
              type="monotone"
              dataKey="previous"
              stroke="#1C1C1E"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ r: 4 }}
              activeDot={{
                r: 6,
                stroke: "#1C1C1E",
                strokeWidth: 2,
                fill: "#fff",
              }}
              name="Previous Week"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="w-[30%] bg-[#F7F9FB] rounded-xl p-6 shadow-sm border border-gray-200">
        <h4 className="text-sm font-semibold text-gray-900 mb-4">
          Traffic by Website
        </h4>
        <ul className="text-sm text-gray-600 space-y-4">
          {trafficByWebsiteData.map((item) => (
            <li key={item.name} className="flex flex-col">
              <span className="flex items-center gap-2 mb-1">
                {platformIcons[item.name as keyof typeof platformIcons]}
                {item.name}
              </span>
              <div className="bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gray-800 rounded-full h-full"
                  style={{ width: `${item.value}%` }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LineChartCard;
