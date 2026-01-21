export default function Home({ user, go }) {
  return (
    <div>
      {/* Welcome */}
      <h1 className="text-3xl font-bold mb-2">
        สวัสดี {user?.full_name || "คุณครู"}
      </h1>

      <p className="text-gray-600 mb-6">
        ยินดีต้อนรับเข้าสู่ระบบจัดการการเรียนการสอน
      </p>

      {/* Summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="text-gray-500 text-sm">รายวิชาที่สอน</h2>
          <p className="text-3xl font-bold text-blue-900 mt-2">3</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="text-gray-500 text-sm">นักเรียนทั้งหมด</h2>
          <p className="text-3xl font-bold text-blue-900 mt-2">20</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="text-gray-500 text-sm">ห้องเรียน</h2>
          <p className="text-3xl font-bold text-blue-900 mt-2">1</p>
        </div>
      </div>

      {/* Quick actions */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4">เมนูด่วน</h2>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => go("schedule")}
            className="px-4 py-2 bg-blue-900 text-white rounded"
          >
            ตารางสอน
          </button>

          <button
            onClick={() => go("students")}
            className="px-4 py-2 bg-blue-900 text-white rounded"
          >
            จัดการนักเรียน
          </button>

          <button
            onClick={() => go("attendance")}
            className="px-4 py-2 bg-blue-900 text-white rounded"
          >
            เช็คชื่อ
          </button>
        </div>
      </div>
    </div>
  );
}
