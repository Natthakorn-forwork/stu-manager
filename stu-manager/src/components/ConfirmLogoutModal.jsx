export default function ConfirmLogoutModal({
  open,
  onConfirm,
  onCancel
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-xl w-80 p-6 shadow-xl text-center
                      transform transition-all duration-300 scale-100">
        
        <span className="material-symbols-outlined text-red-500 text-5xl">
          warning
        </span>

        <h2 className="mt-3 text-lg font-semibold text-gray-800">
          ยืนยันการออกจากระบบ
        </h2>

        <p className="mt-2 text-sm text-gray-600">
          คุณแน่ใจหรือไม่ว่าต้องการออกจากระบบ
        </p>

        <div className="mt-6 flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 py-2 rounded-lg bg-green-600 hover:bg-green-700
                       transition"
          >
            ยกเลิก
          </button>

          <button
            onClick={onConfirm}
            className="flex-1 py-2 rounded-lg bg-red-600 text-white
                       hover:bg-red-700 transition"
          >
            ออกจากระบบ
          </button>
        </div>
      </div>
    </div>
  );
}
