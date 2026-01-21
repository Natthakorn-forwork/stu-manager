export default function StudentHome({ user }) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">
        สวัสดี {user?.full_name || "นักศึกษา"}
      </h1>

      <p className="text-gray-600 mb-6">
        ยินดีต้อนรับเข้าสู่ระบบนักศึกษา
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="text-gray-500 text-sm">สถานะวันนี้</h2>
          <p className="text-xl font-bold text-green-700 mt-2">ปกติ</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="text-gray-500 text-sm">วิชาที่เรียน</h2>
          <p className="text-xl font-bold text-green-700 mt-2">5 วิชา</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="text-gray-500 text-sm">การเข้าเรียน</h2>
          <p className="text-xl font-bold text-green-700 mt-2">95%</p>
        </div>
      </div>
    </div>
  );
}
