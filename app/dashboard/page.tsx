import MetricCard from '@/components/MetricCard';

const mockMetrics = [
  { title: 'Cash on Hand', value: '$120,000' },
  { title: 'Burn Rate', value: '$15,000/mo' },
  { title: 'Runway', value: '8 months' },
  { title: 'MRR', value: '$30,000' },
];

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {mockMetrics.map((metric) => (
        <MetricCard key={metric.title} {...metric} />
      ))}
    </div>
  );
}