import ExportPanel from '@/components/ExportPanel';

export default function ReportsPage() {
  return (
    <>
      <header className="bg-white shadow p-4 mb-4">
      <h2 className="text-lg font-semibold">Reports</h2>
    </header>
    <div>
      <ExportPanel />
    </div>
    </>
  );
}