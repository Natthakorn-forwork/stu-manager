import { useEffect, useState } from "react";

export default function LogoutStatusPopup({ open, onFinish }) {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (open) {
      setSuccess(false);

      // ช่วงโหลด
      const timer1 = setTimeout(() => {
        setSuccess(true);
      }, 1500);

      // เสร็จแล้วค่อยเปลี่ยนหน้า
      const timer2 = setTimeout(() => {
        onFinish();
      }, 2500);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [open, onFinish]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-xl w-80 p-6 text-center shadow-xl
                      transition-all duration-300 scale-100">

        {!success ? (
          <span className="material-symbols-outlined text-blue-500 text-6xl animate-spin">
            progress_activity
          </span>
        ) : (
          <span className="material-symbols-outlined text-green-500 text-6xl">
            check_circle
          </span>
        )}

        <p className="mt-4 text-lg font-semibold text-gray-800">
          {!success ? "กำลังออกจากระบบ..." : "ออกจากระบบสำเร็จ"}
        </p>
      </div>
    </div>
  );
}
