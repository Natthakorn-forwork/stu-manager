import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmLogoutModal from "../components/ConfirmLogoutModal";
import LogoutStatusPopup from "../components/LogoutStatusPopup";

export default function StudentSidebar({
  current,
  setCurrent,
  collapsed,
  setCollapsed
}) {
  const navigate = useNavigate();
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [showLogoutStatus, setShowLogoutStatus] = useState(false);
  const menus = [
    { key: "home", label: "หน้าหลัก", icon: "home" },
    { key: "schedule", label: "ตารางเรียน", icon: "calendar_month" },
    { key: "attendance", label: "เช็คชื่อ", icon: "checklist" }
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
        bg-green-700 text-white
        min-h-screen
        overflow-hidden
        transition-all duration-300 ease-in-out
        ${collapsed ? "w-16" : "w-64"}
      `}
    >
      {/* Header */}
      <div className="flex items-center px-4 py-3 border-b border-green-600">
        {/* Title */}
        <span
          className={`
            text-lg font-bold whitespace-nowrap
            transition-all duration-200
            ${collapsed
              ? "opacity-0 w-0 -translate-x-4"
              : "opacity-100 w-auto translate-x-0"}
          `}
        >
          Student Dashboard
        </span>

        {/* Toggle button (อยู่ขวาสุดเสมอ) */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="
          z-10
            ml-auto
            text-2xl
            flex items-center justify-center
            w-10 h-10
            rounded
            hover:bg-green-600
            transition-colors
          "
          title="พับ / ขยาย"
        >
          <span className="material-symbols-outlined">
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
              hover:bg-green-600
              transition-all duration-200
              ${current === menu.key ? "bg-green-600" : ""}
            `}
          >
            {/* icon */}
            <span className="material-symbols-outlined text-xl">
              {menu.icon}
            </span>

            {/* label */}
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
            transition-all duration-200
          "
        >
          <span className="material-symbols-outlined text-lg">
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
