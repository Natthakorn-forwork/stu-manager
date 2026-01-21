export default function Schedule() {
  const schedules = [
    { day: "จันทร์", subject: "Database", room: "841", time: "08:30 - 10:00" },
    { day: "พุธ", subject: "Network", room: "841", time: "10:00 - 11:30" },
    { day: "ศุกร์", subject: "AI", room: "841", time: "13:00 - 14:30" }
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">ตารางสอน</h2>

      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">วัน</th>
            <th className="p-2 border">วิชา</th>
            <th className="p-2 border">ห้อง</th>
            <th className="p-2 border">เวลา</th>
          </tr>
        </thead>
        <tbody>
          {schedules.map((s, i) => (
            <tr key={i} className="text-center">
              <td className="p-2 border">{s.day}</td>
              <td className="p-2 border">{s.subject}</td>
              <td className="p-2 border">{s.room}</td>
              <td className="p-2 border">{s.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
