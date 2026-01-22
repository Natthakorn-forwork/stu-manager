import { useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";

import SuccessPopup from "../components/SuccessPopup";

export default function Login() {
  const navigate = useNavigate();
  const [popup, setPopup] = useState(false);
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
       
      if (!email || !password) {
        alert("กรุณากรอกชื่อผู้ใช้และรหัสผ่าน");
      return;
    }
      setPopup(true);
    if (error || !data) {
      alert("Email หรือ Password ไม่ถูกต้อง");
      return;
    }

    // เก็บ user ที่ล็อกอิน
    localStorage.setItem("currentUser", JSON.stringify(data));

    // redirect ตาม role จาก DB
    setTimeout(() => {

       if (data.role === "teacher") {
      navigate("/teacher");
    } else {
      navigate("/student");
    }
    }, 1500);
     

  };

  return (
    
    <div className={`
    h-screen flex items-center justify-center
    md-gradient
    transition-colors
    duration-[500ms]
    [transition-timing-function:var(--md-ease-standard)]
    ${role === "teacher"
      ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500"
      : "bg-gradient-to-r from-green-800 via-emerald-500 to-lime-900"}
  `}>
      
      
        

      <div className=" bg-white/90 backdrop-blur-md
    p-6 rounded-2xl w-80 shadow-xl
    transform transition-all
    duration-[300ms]
    hover:scale-[1.02]
    [transition-timing-function:var(--md-ease-emphasized)]
  ">
        <h1 className="text-xl font-bold text-center mb-4">
          ระบบจัดการนักศึกษา
        </h1>
        
        {/* เลือกบทบาท (UI เฉย ๆ) */}
        <div className="flex gap-2 mb-5">
          <button
            onClick={() => setRole("teacher")}
            className={`flex-1 py-2 rounded hover:scale-110 transition-all duration-200 hover:bg-blue-500 hover:text-white ${
              role === "teacher"
                ? "bg-blue-900 text-white"
                : "bg-gray-200"
            }`}
          >
            ครู
          </button>

          <button
            onClick={() => setRole("student")}
            className={`flex-1 py-2 rounded hover:scale-110 transition-all duration-200 hover:bg-green-500 hover:text-white ${
              role === "student"
                ? "bg-green-500 text-white"
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
        <SuccessPopup
        show={popup}
        message="เข้าสู่ระบบสำเร็จ"
        onClose={() => setPopup(false)}
        />
      </div>
    </div>
    
  );
}
  