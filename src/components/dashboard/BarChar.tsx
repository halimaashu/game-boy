"use client"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { RechartsDevtools } from "@recharts/devtools";

const data = [
  { name: 'LVL 1', uv: 4000, pv: 2400 },
  { name: 'LVL 2', uv: 3000, pv: 1398 },
  { name: 'LVL 3', uv: 2000, pv: 9800 },
  { name: 'LVL 4', uv: 2780, pv: 3908 },
  { name: 'LVL 5', uv: 1890, pv: 4800 },
  { name: 'LVL 6', uv: 2390, pv: 3800 },
  { name: 'LVL 7', uv: 3490, pv: 4300 },
];

const BarChar = () => {
  return (
    <div className="w-full bg-neutral-900 border border-neutral-800 p-4 rounded-2xl shadow-[0_0_15px_rgba(239,68,68,0.05)]">
      {/* Chart Title */}
      <div className="mb-4 flex justify-between items-center px-2">
        <h3 className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest text-neutral-400">
          // PERFORMANCE METRICS
        </h3>
        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
      </div>

      {/* Chart Frame */}
      <div className="w-full h-[300px] md:h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -20, // Negative margin offsets YAxis padding nicely
              bottom: 0,
            }}
          >
            {/* Dark Retro Grid lines */}
            <CartesianGrid strokeDasharray="3 3" stroke="#262626" vertical={false} />
            
            {/* Styled X & Y Axes */}
            <XAxis 
              dataKey="name" 
              stroke="#525252" 
              fontSize={11} 
              fontFamily="monospace"
              tickLine={false}
              dy={10}
            />
            <YAxis 
              stroke="#525252" 
              fontSize={11} 
              fontFamily="monospace"
              tickLine={false}
              dx={-5}
            />
            
            {/* Sleek Dark Mode Tooltip */}
            <Tooltip 
              contentStyle={{
                backgroundColor: '#0a0a0a',
                borderColor: '#ef4444',
                borderRadius: '12px',
                fontFamily: 'monospace',
                color: '#fff',
              }}
              itemStyle={{ color: '#f3f4f6' }}
              labelStyle={{ color: '#ef4444', fontWeight: 'bold' }}
            />
            
            <Legend 
              wrapperStyle={{
                paddingTop: '20px',
                fontFamily: 'monospace',
                fontSize: '12px',
              }}
            />
            
            {/* Red Neon Bar (PVP / Player Score) */}
            <Bar
              name="XP Gained"
              dataKey="pv"
              fill="#ef4444" // Tailwind red-500
              radius={[6, 6, 0, 0]}
              maxBarSize={32}
              activeBar={{ fill: "#f87171", stroke: "#ef4444", strokeWidth: 1 }}
            />
            
            {/* Cyan Accent Bar (UV / High Scores) */}
            <Bar
              name="High Score"
              dataKey="uv"
              fill="#06b6d4" // Tailwind cyan-500
              radius={[6, 6, 0, 0]}
              maxBarSize={32}
              activeBar={{ fill: "#22d3ee", stroke: "#06b6d4", strokeWidth: 1 }}
            />
            
            <RechartsDevtools />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChar;