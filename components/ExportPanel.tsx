export default function ExportPanel() {
  return (
    <div className="space-x-4">
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Export PDF</button>
      <button className="bg-green-500 text-white px-4 py-2 rounded">Export CSV</button>
      <button className="bg-yellow-500 text-white px-4 py-2 rounded">Export Excel</button>
    </div>
  );
}