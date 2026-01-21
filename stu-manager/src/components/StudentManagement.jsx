import { useState } from "react";

export default function StudentManagement() {
  const [students, setStudents] = useState([
    { code: "65001", name: "นายณัฐกรณ์ อุเทนหลอย", major: "เทคโนโลยีสารสนเทศ" },
    { code: "65002", name: "นายธีรยุทธ สุดเต้", major: "เทคโนโลยีสารสนเทศ" }
  ]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">จัดการนักเรียนในห้อง</h2>

      <table className="w-full border mb-4">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">รหัส</th>
            <th className="p-2 border">ชื่อ</th>
            <th className="p-2 border">สาขา</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, i) => (
            <tr key={i} className="text-center">
              <td className="p-2 border">{s.code}</td>
              <td className="p-2 border">{s.name}</td>
              <td className="p-2 border">{s.major}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="text-gray-500 text-sm">
        * หน้านี้เป็นตัวอย่าง UI (ยังไม่เชื่อม DB จริง)
      </p>
    </div>
  );
}
