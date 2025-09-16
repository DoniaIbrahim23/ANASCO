"use client";

import { TrendingUp, TrendingDown } from "lucide-react";
import React from "react";

type Stat = {
  title: string;
  value: string;
  change: string;
};

type StatsCardsProps = {
  data: Stat[];
};

const StatsCards: React.FC<StatsCardsProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {data.map((stat, index) => {
        const isPositiveChange = stat.change.startsWith("+");
        const changeColor = isPositiveChange ? "text-green-600" : "text-red-600";
        const ChangeIcon = isPositiveChange ? TrendingUp : TrendingDown;
        const bgColor = index % 2 === 0 ? "bg-blue-50" : "bg-gray-50";

        return (
          <div
            key={stat.title}
            className={`rounded-xl p-6 shadow-sm border border-gray-100 ${bgColor} 
              flex flex-col justify-between 
              transition-all duration-300 ease-in-out
              hover:scale-105 hover:shadow-lg
              cursor-pointer`}
          >
            <p className="text-gray-600 text-base mb-2">{stat.title}</p>
            <div className="flex items-end justify-between">
              <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
              <div className={`flex items-center text-xs font-medium ${changeColor}`}>
                <ChangeIcon className="w-4 h-4 mr-1" />
                {stat.change}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;