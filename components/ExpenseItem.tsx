type Props = {
  category: string;
  amount: number;
  date: string;
};

export default function ExpenseItem({ category, amount, date }: Props) {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <p className="font-medium">{category}</p>
      <p className="text-sm text-gray-500">{date}</p>
      <p className="text-lg font-bold text-red-600">-${amount.toLocaleString()}</p>
    </div>
  );
}