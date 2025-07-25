"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

interface ForecastResult {
  month: string;
  predicted_expense: number;
}

export default function ForecastChart({ data }: { data: ForecastResult[] }) {
  return (
    <div className="w-full h-96 mt-6">
      <h2 className="text-xl font-semibold mb-2">Forecasted Expenses</h2>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="predicted_expense" stroke="#1E3A8A" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
