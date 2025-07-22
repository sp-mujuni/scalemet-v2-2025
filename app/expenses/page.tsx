import ExpenseItem from '@/components/ExpenseItem';

const mockExpenses = [
  { id: 1, category: 'Marketing', amount: 2000, date: '2025-07-01' },
  { id: 2, category: 'Software', amount: 1500, date: '2025-07-10' },
];

export default function ExpensesPage() {
  return (
    <div className="space-y-4">
      {mockExpenses.map((expense) => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </div>
  );
}