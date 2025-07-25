"use client";

import React, { useState } from "react";
import Papa from "papaparse";


interface ExpenseInput {
  date: string;
  amount: number;
}

export default function ExpenseForm({ onSubmit }: { onSubmit: (data: ExpenseInput[]) => void }) {
  const [inputs, setInputs] = useState<ExpenseInput[]>([{ date: "", amount: 0 }]);

  const handleChange = (index: number, field: keyof ExpenseInput, value: string | number) => {
    const updated = [...inputs];
    if (field === "amount") {
      updated[index].amount = parseFloat(value as string);
    } else if (field === "date") {
      updated[index].date = value as string;
    }
    setInputs(updated);
  };

  const addRow = () => setInputs([...inputs, { date: "", amount: 0 }]);

  const removeRow = (index: number) => {
    const updated = inputs.filter((_, i) => i !== index);
    setInputs(updated.length > 0 ? updated : [{ date: "", amount: 0 }]);
  };

  const handleCSVUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
  const file = event.target.files?.[0];
  if (!file) return;

  // Check file type
  if (!file.name.endsWith(".csv")) {
    alert("Only CSV files are allowed.");
    return;
  }

  Papa.parse(file, {
    header: true,
    skipEmptyLines: true,
    complete: (result) => {
      const parsed: ExpenseInput[] = [];

      for (const row of result.data as any[]) {
        const date = row.date?.trim();
        const amountStr = row.amount?.toString().trim();

        if (!date || !amountStr) {
          alert("Missing 'date' or 'amount' in one of the rows.");
          return;
        }

        const amount = parseFloat(amountStr);
        const isValidDate = !isNaN(Date.parse(date));
        const isValidAmount = !isNaN(amount);

        if (!isValidDate || !isValidAmount) {
          alert(`Invalid row detected. Check date: "${date}" and amount: "${amountStr}".`);
          return;
        }

        parsed.push({ date, amount });
      }

      setInputs(parsed);
    },
    error: (err) => {
      console.error("CSV parse error", err);
      alert("Failed to parse CSV file.");
    },
  });
};


  return (
    <div className="p-4 border rounded shadow bg-white">
      <h2 className="text-xl font-semibold mb-2">Enter Historical Expenses</h2>

      <div className="mb-4">
        <label className="block font-medium mb-1">Upload CSV (with "date" and "amount" columns):</label>
        <input
          type="file"
          accept=".csv"
          onChange={handleCSVUpload}
          className="border p-2 rounded w-full"
          placeholder="Upload CSV"
          title="Upload CSV"
        />
      </div>

      {inputs.map((input, i) => (
        <div key={i} className="flex items-center space-x-2 mb-2">
          <input
            type="date"
            className="border p-2 rounded w-40"
            value={input.date}
            onChange={(e) => handleChange(i, "date", e.target.value)}
            placeholder="Select date"
            title="Expense date"
          />
          <input
            type="number"
            className="border p-2 rounded w-32"
            value={input.amount}
            onChange={(e) => handleChange(i, "amount", e.target.value)}
            placeholder="Amount"
          />
          <button
            type="button"
            onClick={() => removeRow(i)}
            className="text-red-600 font-bold"
          >
            ×
          </button>
        </div>
      ))}

    <div className="flex items-center gap-4 mb-4">
      <button
        onClick={addRow}
        className="text-blue-600 border border-blue-600 px-3 py-1 rounded hover:bg-blue-50 transition"
      >
        + Add Row
      </button>
      <button
        onClick={() => onSubmit(inputs)}
        className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
      >
        Forecast
      </button>
    </div>
    </div>
  );
}
