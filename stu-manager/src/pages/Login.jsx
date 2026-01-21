import { useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("teacher"); // ค่าเริ่มต้น

  const handleLogin = async () => {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .eq("password", password)
      .maybeSingle(); // ✅ แก้ 406

    if (error || !data) {
      alert("Email หรือ Password ไม่ถูกต้อง");
      return;
    }

    // เก็บ user ที่ล็อกอิน
    localStorage.setItem("currentUser", JSON.stringify(data));

    // redirect ตาม role จาก DB
   if (data.role === "teacher") {
  navigate("/teacher");
} else {
  navigate("/student");
}

  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-b from-blue-500 to-sky-600">
      <div className="bg-white p-6 rounded-xl w-80 shadow-lg">
        <h1 className="text-xl font-bold text-center mb-4">
          ระบบจัดการนักศึกษา
        </h1>

        {/* เลือกบทบาท (UI เฉย ๆ) */}
        <div className="flex gap-2 mb-5">
          <button
            onClick={() => setRole("teacher")}
            className={`flex-1 py-2 rounded ${
              role === "teacher"
                ? "bg-blue-900 text-white"
                : "bg-gray-200"
            }`}
          >
            ครู
          </button>

          <button
            onClick={() => setRole("student")}
            className={`flex-1 py-2 rounded ${
              role === "student"
                ? "bg-blue-900 text-white"
                : "bg-gray-200"
            }`}
          >
            นักศึกษา
          </button>
        </div>

        <input
          className="border p-3 w-full mb-2 rounded"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />

        <input
          className="border p-3 w-full mb-4 rounded"
          type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-900 text-white py-2 rounded"
        >
          เข้าสู่ระบบ
        </button>
      </div>
    </div>
  );
}
