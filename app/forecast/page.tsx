import Chart from '@/components/Chart';

const mockData = [
  { month: 'Jul', cash: 120000 },
  { month: 'Aug', cash: 105000 },
  { month: 'Sep', cash: 90000 },
  { month: 'Oct', cash: 75000 },
];

export default function ForecastPage() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Cash Flow Forecast</h2>
      <Chart data={mockData} />
    </div>
  );
}