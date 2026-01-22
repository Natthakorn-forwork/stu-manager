import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmLogoutModal from "../components/ConfirmLogoutModal";
import LogoutStatusPopup from "../components/LogoutStatusPopup";

export default function Sidebar({
  current,
  setCurrent,
  collapsed,
  setCollapsed
}) {
  const navigate = useNavigate();
   const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
   const [showLogoutStatus, setShowLogoutStatus] = useState(false);
  const menus = [
    { key: "home", label: "หน้าหลัก" },
    { key: "schedule", label: "ตารางสอน" },
    { key: "students", label: "จัดการนักเรียน" },
    { key: "attendance", label: "เช็คชื่อ" }
  ];

   const handleLogout = () => {
      setShowLogoutConfirm(true);
    };

    const confirmLogout = () => {
      setShowLogoutConfirm(false);
      setShowLogoutStatus(true);
    };

    const finishLogout = () => {
      localStorage.removeItem("currentUser");
      navigate("/");
    };

  return (
    <aside
      className={`
        relative
        bg-blue-900 text-white
        min-h-screen
        overflow-hidden
        transition-all duration-[1s] ease-in-out
        ${collapsed ? "w-16" : "w-64"}
      `}
    >
      {/* Header */}
      <div className="flex items-center px-4 py-3 border-b border-blue-700">
        {/* Title */}
        <span
          className={`
            font-bold whitespace-nowrap
            transition-all duration-200
            ${collapsed
              ? "opacity-0 w-0 -translate-x-4"
              : "opacity-100 w-auto translate-x-0"}
          `}
        >
          Teacher Dashboard
        </span>

        {/* Toggle Button (สำคัญที่สุด) */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="
            ml-auto
            z-20
            flex items-center justify-center
            w-11 h-11
            rounded-lg
            hover:bg-blue-800
            active:scale-95
            transition-all
          "
          title="พับ / ขยาย"
        >
          <span className="material-symbols-outlined text-2xl">
            menu
          </span>
        </button>
      </div>

      {/* Menu */}
      <ul className="mt-4 space-y-1">
        {menus.map(menu => (
          <li
            key={menu.key}
            onClick={() => setCurrent(menu.key)}
            className={`
              flex items-center gap-3
              px-4 py-3 cursor-pointer
              hover:bg-blue-800
              transition-all duration-200
              ${current === menu.key ? "bg-blue-800" : ""}
            `}
          >
            <span className="material-symbols-outlined text-xl">
              radio_button_checked
            </span>

            <span
              className={`
                whitespace-nowrap
                transition-all duration-200
                ${collapsed
                  ? "opacity-0 w-0 -translate-x-4"
                  : "opacity-100 w-auto translate-x-0"}
              `}
            >
              {menu.label}
            </span>
          </li>
        ))}
      </ul>

      {/* Logout */}
      <div className="absolute bottom-0 left-0 w-full p-4">
        <button
          onClick={handleLogout}
          className="
            flex items-center justify-center gap-2
            w-full bg-red-600 hover:bg-red-700
            py-2 rounded text-sm
            transition-all
          "
        >
          <span className="material-symbols-outlined">
            logout
          </span>

          <span
            className={`
              transition-all duration-200
              ${collapsed ? "opacity-0 w-0" : "opacity-100 w-auto"}
            `}
          >
            ออกจากระบบ
          </span>
        </button>
      </div>
      <ConfirmLogoutModal
      open={showLogoutConfirm}
      onCancel={() => setShowLogoutConfirm(false)}
      onConfirm={confirmLogout}
     />

      <LogoutStatusPopup
        open={showLogoutStatus}
        onFinish={finishLogout}
      />
    </aside>
  );
}
