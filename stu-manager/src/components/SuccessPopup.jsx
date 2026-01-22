import { useEffect, useState } from "react";

export default function SuccessPopup({ show, message }) {
  const [success, setSuccess] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  useEffect(() => {
    if (show) {
      setSuccess(false); // reset ทุกครั้ง
      const timer = setTimeout(() => {
        setSuccess(true);
      }, 1000); // เวลาโหลด

      return () => clearTimeout(timer);
    }
  }, [show]);

  return (
    <div
      className={`
        fixed inset-0 z-50 flex items-center justify-center
        transition-all duration-300
        ${show ? "bg-black/40 backdrop-blur-sm opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      <div
        className={`
          w-72 rounded-2xl p-6 text-center shadow-xl
          transform transition-all duration-300 ease-out
          ${show ? "scale-100 opacity-100" : "scale-90 opacity-0"}
          ${success ? "bg-green-50" : "bg-white"}
        `}
      >
        {/* ICON */}
        {!success ? (
          <span
            className="
              material-symbols-outlined
              text-blue-500 text-6xl
              animate-spin
            "
          >
            progress_activity
          </span>
        ) : (
          <span
            className="
              material-symbols-outlined
              text-green-500 text-6xl
              animate-bounce
            "
          >
            check_circle
          </span>
        )}

        {/* TEXT */}
        <p className="mt-4 text-lg font-semibold">
          {!success ? "กำลังตรวจสอบข้อมูล..." : message}
        </p>

        <p className="text-sm text-gray-500 mt-1">
          {!success ? "กรุณารอสักครู่" : "ดำเนินการเสร็จสิ้น"}
        </p>
      </div>
    </div>
  );
}
