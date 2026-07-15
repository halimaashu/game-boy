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
  { name: 'L1', uv: 4000, pv: 2400 },
  { name: 'L2', uv: 3000, pv: 1398 },
  { name: 'L3', uv: 2000, pv: 9800 },
  { name: 'L4', uv: 2780, pv: 3908 },
  { name: 'L5', uv: 1890, pv: 4800 },
  { name: 'L6', uv: 2390, pv: 3800 },
  { name: 'L7', uv: 3490, pv: 4300 },
];

const BarChar = () => {
  return (
    <div className="w-full bg-neutral-900 border border-neutral-800 p-3 sm:p-4 rounded-2xl shadow-[0_0_15px_rgba(239,68,68,0.05)]">
      {/* Chart Header - Smaller text on mobile */}
      <div className="mb-3 flex justify-between items-center px-1">
        <h3 className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-neutral-400">
          PERFORMANCE METRICS
        </h3>
        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
      </div>

      {/* Responsive height wrapper: 220px on mobile, scales to 350px on larger screens */}
      <div className="w-full h-[220px] sm:h-[300px] md:h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 5,
              left: -30, // Pulls the chart further left to eliminate massive empty space
              bottom: -5, // Reduces spacing below the chart
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
            
            <XAxis 
              dataKey="name" 
              stroke="#525252" 
              fontSize={10} // Smaller font on mobile
              fontFamily="monospace"
              tickLine={false}
              dy={5}
            />
            <YAxis 
              stroke="#525252" 
              fontSize={10} // Smaller font on mobile
              fontFamily="monospace"
              tickLine={false}
              dx={-2}
            />
            
            <Tooltip 
              contentStyle={{
                backgroundColor: '#0a0a0a',
                borderColor: '#ef4444',
                borderRadius: '8px',
                fontFamily: 'monospace',
                fontSize: '11px',
                padding: '6px 10px',
              }}
              itemStyle={{ color: '#f3f4f6', padding: 0 }}
              labelStyle={{ color: '#ef4444', fontWeight: 'bold' }}
            />
            
            <Legend 
              iconSize={8} // Compact icons for mobile
              wrapperStyle={{
                paddingTop: '10px',
                fontFamily: 'monospace',
                fontSize: '10px', // Ultra-compact legend
              }}
            />
            
            <Bar
              name="XP"
              dataKey="pv"
              fill="#ef4444"
              radius={[4, 4, 0, 0]}
              maxBarSize={16} // Thinner bars on mobile so they don't overlap
              activeBar={{ fill: "#f87171", stroke: "#ef4444", strokeWidth: 1 }}
            />
            
            <Bar
              name="High Score"
              dataKey="uv"
              fill="#06b6d4"
              radius={[4, 4, 0, 0]}
              maxBarSize={16} // Thinner bars on mobile so they don't overlap
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