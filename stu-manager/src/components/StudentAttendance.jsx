export default function StudentAttendance() {
  const records = [
    { date: "2026-01-10", status: "มา" },
    { date: "2026-01-11", status: "มา" },
    { date: "2026-01-12", status: "ขาด" }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">ประวัติการเข้าเรียน</h2>

      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">วันที่</th>
            <th className="p-2 border">สถานะ</th>
          </tr>
        </thead>
        <tbody>
          {records.map((r, i) => (
            <tr key={i} className="text-center">
              <td className="p-2 border">{r.date}</td>
              <td className="p-2 border">
                <span
                  className={`px-3 py-1 rounded text-white ${
                    r.status === "มา"
                      ? "bg-green-600"
                      : "bg-red-600"
                  }`}
                >
                  {r.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
