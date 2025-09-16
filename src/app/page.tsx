// "use client";

// import Header from "../Components/Header/Header";
// import Sidebar from "../Components/Sidebar/Sidebar";
// import StatsCards from "../Components/StatsCards/StatsCards";
// import mockData from "../data/mock-data.json";

// import {
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   PieChart,
//   Pie,
//   Cell,
//   XAxis,
//   YAxis,
//   Tooltip,
//   LineChart,
//   Line,
//   CartesianGrid,
// } from "recharts";
// import { Search, Youtube, Instagram, Facebook, Twitter } from "lucide-react";

// interface StatsData {
//   title: string;
//   value: string;
//   change: string;
//   type: string;
// }

// interface LineChartDataItem {
//   month: string;
//   current: number;
//   previous: number;
// }

// interface TrafficByWebsiteDataItem {
//   name: string;
//   value: number;
// }

// interface BarChartDataItem {
//   name: string;
//   value: number;
// }

// interface DonutChartDataItem {
//   name: string;
//   value: number;
// }

// const DONUT_COLORS = ["#94C8A6", "#1C1C1E", "#B0B0C0", "#F4F4F6"];
// const BAR_COLORS = ["#90A5F9", "#94C8A6", "#1C1C1E", "#A4C2E0", "#B0B0C0", "#63AC8A"];
// const platformIcons = {
//   Google: <Search className="w-4 h-4 text-gray-600" />,
//   YouTube: <Youtube className="w-4 h-4 text-red-500" />,
//   Instagram: <Instagram className="w-4 h-4 text-pink-500" />,
//   Facebook: <Facebook className="w-4 h-4 text-blue-600" />,
//   Twitter: <Twitter className="w-4 h-4 text-blue-400" />,
// };

// const CustomLineChartTooltip = ({ active, payload, label }: any) => {
//   if (active && payload && payload.length) {
//     return (
//       <div className="bg-gray-800 text-white p-2 rounded-md text-xs shadow-lg">
//         <p className="font-bold">{label}</p>
//         {payload.map((entry: any, index: number) => (
//           <p key={`item-${index}`} style={{ color: entry.color }}>
//             {`${entry.name}: ${entry.value}`}
//           </p>
//         ))}
//       </div>
//     );
//   }
//   return null;
// };

// // Start of the main component
// export default function Dashboard() {
//   const statsData: StatsData[] = mockData.stats;
//   const lineChartData: LineChartDataItem[] = mockData.trafficLineChart;
//   const trafficByWebsiteData: TrafficByWebsiteDataItem[] = mockData.trafficByWebsiteData;
//   const barChartData: BarChartDataItem[] = mockData.trafficByDeviceData;
//  const donutChartData = mockData.trafficByLocationData as DonutChartDataItem[];

//   return (
//     <div className="flex min-h-screen bg-white">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main content */}
//       <div className="flex-1 flex flex-col bg-gray-100 min-h-screen">
//         {/* Header */}
//         <Header />

//         {/* Page content */}
//         <main className="p-6 space-y-6 flex-1">
//           {/* Stats Cards */}
//           <StatsCards data={statsData} />

//           {/* Charts */}
//           <div className="space-y-6">
//             {/* Total Users & Projects Section */}
//             <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
//               <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-xl font-bold text-gray-900">Total Users</h2>
//                 <h2 className="text-xl text-gray-500">Total Projects</h2>
//                 <div className="flex items-center gap-4 text-sm text-gray-500">
//                   <span className="flex items-center gap-1">
//                     <span className="w-2 h-2 rounded-full bg-gray-900"></span>
//                     Current Week
//                   </span>
//                   <span className="flex items-center gap-1">
//                     <span className="w-2 h-2 rounded-full border border-gray-400 border-dashed"></span>
//                     Previous Week
//                   </span>
//                 </div>
//               </div>
//               <div className="flex">
//                 <ResponsiveContainer width="70%" height={300}>
//                   <LineChart data={lineChartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
//                     <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#e0e0e0" />
//                     <XAxis dataKey="month" tickLine={false} axisLine={false} />
//                     <YAxis tickLine={false} axisLine={false} />
//                     <Tooltip content={<CustomLineChartTooltip />} />
//                     <Line
//                       type="monotone"
//                       dataKey="current"
//                       stroke="#1C1C1E"
//                       strokeWidth={2}
//                       dot={{ r: 4 }}
//                       activeDot={{ r: 6, stroke: '#1C1C1E', strokeWidth: 2, fill: '#fff' }}
//                       name="Current Week"
//                     />
//                     <Line
//                       type="monotone"
//                       dataKey="previous"
//                       stroke="#A4C2E0"
//                       strokeWidth={2}
//                       strokeDasharray="5 5"
//                       dot={{ r: 4 }}
//                       activeDot={{ r: 6, stroke: '#A4C2E0', strokeWidth: 2, fill: '#fff' }}
//                       name="Previous Week"
//                     />
//                   </LineChart>
//                 </ResponsiveContainer>
//                 <div className="w-[30%] pl-6 border-l border-gray-200">
//                   <h4 className="text-sm font-semibold text-gray-900 mb-4">Traffic by Website</h4>
//                   <ul className="text-sm text-gray-600 space-y-4">
//                     {trafficByWebsiteData.map((item) => (
//                       <li key={item.name} className="flex flex-col">
//                         <span className="flex items-center gap-2 mb-1">
//                           {platformIcons[item.name as keyof typeof platformIcons]}
//                           {item.name}
//                         </span>
//                         <div className="bg-gray-200 rounded-full h-2">
//                           <div
//                             className="bg-gray-800 rounded-full h-full"
//                             style={{ width: `${item.value}%` }}
//                           ></div>
//                         </div>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             {/* Device & Location Charts Section */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               {/* Traffic by Device */}
//               <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
//                 <h3 className="text-xl font-bold mb-4 text-black">Traffic by Device</h3>
//                 <ResponsiveContainer width="100%" height={250}>
//                   <BarChart data={barChartData}>
//                     <XAxis dataKey="name" axisLine={false} tickLine={false} />
//                     <YAxis axisLine={false} tickLine={false} />
//                     <Tooltip />
//                     <Bar dataKey="value" radius={[10, 10, 0, 0]}>
//                       {barChartData.map((entry, index) => (
//                         <Cell
//                           key={`cell-${index}`}
//                           fill={BAR_COLORS[index % BAR_COLORS.length]}
//                         />
//                       ))}
//                     </Bar>
//                   </BarChart>
//                 </ResponsiveContainer>
//               </div>

//               {/* Traffic by Location */}
//               <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
//                 <h3 className="text-xl font-bold mb-4 text-black">Traffic by Location</h3>
//                 <div className="flex justify-center items-center">
//                   <ResponsiveContainer width="50%" height={250}>
//                     <PieChart>
//                       <Pie
//                         data={donutChartData as DonutChartDataItem[]}
//                         cx="50%"
//                         cy="50%"
//                         innerRadius={80}
//                         outerRadius={100}
//                         paddingAngle={5}
//                         dataKey="value"
//                       >
//                         {donutChartData.map((entry, index) => (
//                           <Cell
//                             key={`cell-${index}`}
//                             fill={DONUT_COLORS[index % DONUT_COLORS.length]}
//                           />
//                         ))}
//                       </Pie>
//                       <Tooltip />
//                     </PieChart>
//                   </ResponsiveContainer>
//                   <div className="w-1/2 text-sm text-gray-600">
//                     <ul className="space-y-4">
//                       {donutChartData.map((item, index) => (
//                         <li key={item.name} className="flex items-center gap-2">
//                           <span
//                             className="w-2 h-2 rounded-full"
//                             style={{
//                               backgroundColor:
//                                 DONUT_COLORS[index % DONUT_COLORS.length],
//                             }}
//                           ></span>
//                           <span className="font-medium text-gray-900">{item.name}</span>
//                           <span className="ml-auto text-gray-500">{item.value}%</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }



"use client";

import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/Sidebar";
import StatsCards from "../Components/StatsCards/StatsCards";
import mockData from "../data/mock-data.json";

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
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";
import { Search, Youtube, Instagram, Facebook, Twitter } from "lucide-react";

interface StatsData {
  title: string;
  value: string;
  change: string;
  types:tringس;  
}

interface LineChartDataItem {
  month: string;
  current: number;
  previous: number;
}

interface TrafficByWebsiteDataItem {
  name: string;
  value: number;
}

interface BarChartDataItem {
  name: string;
  value: number;
}

interface DonutChartDataItem {
  name: string;
  value: number;
}

const DONUT_COLORS = ["#94C8A6", "#1C1C1E", "#B0B0C0", "#F4F4F6"];
const BAR_COLORS = ["#90A5F9", "#94C8A6", "#1C1C1E", "#A4C2E0", "#B0B0C0", "#63AC8A"];
const platformIcons = {
  Google: <Search className="w-4 h-4 text-gray-600" />,
  YouTube: <Youtube className="w-4 h-4 text-red-500" />,
  Instagram: <Instagram className="w-4 h-4 text-pink-500" />,
  Facebook: <Facebook className="w-4 h-4 text-blue-600" />,
  Twitter: <Twitter className="w-4 h-4 text-blue-400" />,
};

const CustomLineChartTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-800 text-white p-2 rounded-md text-xs shadow-lg">
        <p className="font-bold">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={`item-${index}`} style={{ color: entry.color }}>
            {`${entry.name}: ${entry.value}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

// Start of the main component
export default function Dashboard() {
  const statsData: StatsData[] = mockData.stats;
  const lineChartData: LineChartDataItem[] = mockData.trafficLineChart;
  const trafficByWebsiteData: TrafficByWebsiteDataItem[] = mockData.trafficByWebsiteData;
  const barChartData: BarChartDataItem[] = mockData.trafficByDeviceData;
  const donutChartData = mockData.trafficByLocationData as DonutChartDataItem[];

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
          <StatsCards data={statsData} />

          {/* Charts */}
          <div className="space-y-6">
            {/* Total Users & Projects Section */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Total Users</h2>
                <h2 className="text-xl text-gray-500">Total Projects</h2>
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
              <div className="flex">
                <ResponsiveContainer width="70%" height={300}>
                  <LineChart data={lineChartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#e0e0e0" />
                    <XAxis dataKey="month" tickLine={false} axisLine={false} />
                    <YAxis tickLine={false} axisLine={false} />
                    <Tooltip content={<CustomLineChartTooltip />} />
                    <Line
                      type="monotone"
                      dataKey="current"
                      stroke="#1C1C1E"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      activeDot={{ r: 6, stroke: '#1C1C1E', strokeWidth: 2, fill: '#fff' }}
                      name="Current Week"
                    />
                    <Line
                      type="monotone"
                      dataKey="previous"
                      stroke="#A4C2E0"
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      dot={{ r: 4 }}
                      activeDot={{ r: 6, stroke: '#A4C2E0', strokeWidth: 2, fill: '#fff' }}
                      name="Previous Week"
                    />
                  </LineChart>
                </ResponsiveContainer>
                <div className="w-[30%] pl-6 border-l border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-900 mb-4">Traffic by Website</h4>
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
            </div>

            {/* Device & Location Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Traffic by Device */}
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

              {/* Traffic by Location */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-black">Traffic by Location</h3>
                <div className="flex justify-center items-center">
                  <ResponsiveContainer width="50%" height={250}>
                    <PieChart>
                      <Pie<DonutChartDataItem>
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
          </div>
        </main>
      </div>
    </div>
  );
}