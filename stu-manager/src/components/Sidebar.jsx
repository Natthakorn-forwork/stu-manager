import { useNavigate } from "react-router-dom";

export default function Sidebar({ current, setCurrent }) {
  const navigate = useNavigate();

  const menus = [
    { key: "home", label: "หน้าหลัก" },
    { key: "schedule", label: "ตารางสอน" },
    { key: "students", label: "จัดการนักเรียน" },
    { key: "attendance", label: "เช็คชื่อ" }
  ];

  const handleLogout = () => {
    // ลบข้อมูล user ที่ล็อกอิน
    localStorage.removeItem("currentUser");

    // กลับไปหน้า Login
    navigate("/");
  };

  return (
    <aside className="w-64 bg-blue-900 text-white min-h-screen flex flex-col">
      {/* Header */}
      <div className="p-4 text-xl font-bold border-b border-blue-700">
        Teacher Dashboard
      </div>

      {/* Menu */}
      <ul className="mt-4 flex-1">
        {menus.map(menu => (
          <li
            key={menu.key}
            onClick={() => setCurrent(menu.key)}
            className={`px-6 py-3 cursor-pointer hover:bg-blue-800 ${
              current === menu.key ? "bg-blue-800" : ""
            }`}
          >
            {menu.label}
          </li>
        ))}
      </ul>

      {/* Logout */}
      <div className="p-4 border-t border-blue-700">
        <button
          onClick={handleLogout}
          className="w-full bg-red-600 hover:bg-red-700 py-2 rounded text-white"
        >
          ออกจากระบบ
        </button>
      </div>
    </aside>
  );
}
