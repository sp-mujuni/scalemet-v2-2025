"use client";

import React from "react";
import { ForecastResult } from "@/lib/api/forecast";

export default function ExportForecast({ data }: { data: ForecastResult[] }) {
  const downloadCSV = () => {
    const csv = ["Month,Predicted Expense"];
    data.forEach(d => csv.push(`${d.month},${d.predicted_expense}`));
    const blob = new Blob([csv.join("\n")], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "forecast.csv";
    a.click();
  };

  return (
    <div className="mt-12 flex justify-center">
      <button
        onClick={downloadCSV}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Download CSV
      </button>
    </div>
  );
}
