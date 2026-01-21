import { useState } from "react";

export default function Attendance() {
  const initial = [
    { name: "นายณัฐกรณ์ อุเทนหลอย", present: false },
    { name: "นายธีรยุทธ สุดเต้", present: false }
  ];

  const [list, setList] = useState(initial);

  const toggle = index => {
    const updated = [...list];
    updated[index].present = !updated[index].present;
    setList(updated);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">เช็คชื่อเข้าเรียน</h2>

      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">ชื่อ</th>
            <th className="p-2 border">สถานะ</th>
          </tr>
        </thead>
        <tbody>
          {list.map((s, i) => (
            <tr key={i} className="text-center">
              <td className="p-2 border">{s.name}</td>
              <td className="p-2 border">
                <button
                  onClick={() => toggle(i)}
                  className={`px-3 py-1 rounded ${
                    s.present ? "bg-green-500 text-white" : "bg-gray-300"
                  }`}
                >
                  {s.present ? "มา" : "ขาด"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
