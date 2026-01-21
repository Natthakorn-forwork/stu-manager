import { useNavigate } from "react-router-dom";

export default function StudentSidebar({ current, setCurrent }) {
  const navigate = useNavigate();

  const menus = [
    { key: "home", label: "หน้าหลัก" },
    { key: "schedule", label: "ตารางเรียน" },
    { key: "attendance", label: "เช็คชื่อ" }
  ];

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  return (
    <aside className="w-64 bg-green-700 text-white min-h-screen flex flex-col">
      <div className="p-4 text-xl font-bold border-b border-green-600">
        Student Dashboard
      </div>

      <ul className="mt-4 flex-1">
        {menus.map(menu => (
          <li
            key={menu.key}
            onClick={() => setCurrent(menu.key)}
            className={`px-6 py-3 cursor-pointer hover:bg-green-600 ${
              current === menu.key ? "bg-green-600" : ""
            }`}
          >
            {menu.label}
          </li>
        ))}
      </ul>

      <div className="p-4 border-t border-green-600">
        <button
          onClick={handleLogout}
          className="w-full bg-red-600 hover:bg-red-700 py-2 rounded"
        >
          ออกจากระบบ
        </button>
      </div>
    </aside>
  );
}
