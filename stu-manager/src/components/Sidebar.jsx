import { useNavigate } from "react-router-dom";

export default function Sidebar({
  current,
  setCurrent,
  collapsed,
  setCollapsed
}) {
  const navigate = useNavigate();

  const menus = [
    { key: "home", label: "หน้าหลัก" },
    { key: "schedule", label: "ตารางสอน" },
    { key: "students", label: "จัดการนักเรียน" },
    { key: "attendance", label: "เช็คชื่อ" }
  ];

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  return (
    <aside
      className={`
        relative
        bg-blue-900 text-white
        min-h-screen
        transition-all duration-300
        ${collapsed ? "w-16" : "w-64"}
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-blue-700">
        {!collapsed && <span className="font-bold">Dashboard</span>}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-white text-xl focus:outline-none"
          title="พับ / ขยาย"
        >
          ☰
        </button>
      </div>

      {/* Menu */}
      <ul className="mt-4">
        {menus.map(menu => (
          <li
            key={menu.key}
            onClick={() => setCurrent(menu.key)}
            className={`
              px-4 py-3 cursor-pointer
              hover:bg-blue-800
              transition-colors
              ${current === menu.key ? "bg-blue-800" : ""}
            `}
          >
            {collapsed ? "•" : menu.label}
          </li>
        ))}
      </ul>

      {/* Logout */}
      <div className="absolute bottom-0 left-0 w-full p-4">
        <button
          onClick={handleLogout}
          className="
            w-full
            bg-red-600 hover:bg-red-700
            py-2 rounded
            text-sm
          "
        >
          {collapsed ? "⎋" : "ออกจากระบบ"}
        </button>
      </div>
    </aside>
  );
}
