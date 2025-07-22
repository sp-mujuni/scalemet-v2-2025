type Props = {
  title: string;
  value: string;
};

export default function MetricCard({ title, value }: Props) {
  return (
    <div className="bg-white rounded-xl shadow p-4 w-full">
      <p className="text-sm text-gray-500">{title}</p>
      <h3 className="text-xl font-bold">{value}</h3>
    </div>
  );
}