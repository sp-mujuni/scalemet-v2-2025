"use client";

import React, { useState } from "react";
import ExpenseForm from "@/components/ExpenseForm";
import ForecastChart from "@/components/ForecastChart";
import ExportForecast from "@/components/ExportForecast";
import { fetchForecast, HistoricalExpense, ForecastResult } from "@/lib/api/forecast";

export default function ForecastPage() {

  const [forecast, setForecast] = useState<ForecastResult[]>([]);

  const handleSubmit = async (history: HistoricalExpense[]) => {
    try {
      const result = await fetchForecast(history);
      setForecast(result);
    } catch (err) {
      console.error("Forecast fetch error:", err);
    }
  };

  return (
    <>
    <header className="bg-white shadow p-4 mb-4">
      <h2 className="text-lg font-semibold">Forecast</h2>
    </header>
    <div className="max-w-4xl mx-auto mt-6">
      <ExpenseForm onSubmit={handleSubmit} />
      {forecast.length > 0 && (
        <>
          <ForecastChart data={forecast} />
          <ExportForecast data={forecast} />
        </>
      )}
    </div>
    </> 
  );
}
