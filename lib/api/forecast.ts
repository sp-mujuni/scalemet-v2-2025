export interface HistoricalExpense {
  date: string;  // "YYYY-MM-DD"
  amount: number;
}

export interface ForecastResult {
  month: string;
  predicted_expense: number;
}

export async function fetchForecast(
  history: HistoricalExpense[],
  monthsAhead: number = 6
): Promise<ForecastResult[]> {
  const response = await fetch(`http://127.0.0.1:8000/forecasts/?months_ahead=${monthsAhead}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(history)
  });

  if (!response.ok) {
    throw new Error(`Error fetching forecast: ${response.statusText}`);
  }

  return response.json();
}
