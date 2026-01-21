export default function StudentSchedule() {
  const schedule = [
    { day: "จันทร์", subject: "คณิตศาสตร์", time: "08:30 - 10:00" },
    { day: "อังคาร", subject: "ภาษาอังกฤษ", time: "10:00 - 11:30" },
    { day: "พฤหัส", subject: "วิทยาศาสตร์", time: "13:00 - 14:30" }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">ตารางเรียน</h2>

      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">วัน</th>
            <th className="p-2 border">วิชา</th>
            <th className="p-2 border">เวลา</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((s, i) => (
            <tr key={i} className="text-center">
              <td className="p-2 border">{s.day}</td>
              <td className="p-2 border">{s.subject}</td>
              <td className="p-2 border">{s.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
