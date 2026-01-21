import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Home from "../components/Home";
import Schedule from "../components/Schedule";
import StudentManagement from "../components/StudentManagement";
import Attendance from "../components/Attendance";

export default function TeacherDashboard() {
  const [current, setCurrent] = useState("home");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("currentUser");
    if (saved) {
      setUser(JSON.parse(saved));
    }
  }, []);

const renderContent = () => {
  if (current === "home") {
    return <Home user={user} go={setCurrent} />;
  }

  if (current === "schedule") {
    return <Schedule />;
  }

  if (current === "students") {
    return <StudentManagement />;
  }

  if (current === "attendance") {
    return <Attendance />;
  }

  return null;
};

  return (
    <div className="flex h-screen">
      <Sidebar current={current} setCurrent={setCurrent} />

      <main className="flex-1 p-6 bg-gray-100">
        {renderContent()}
      </main>
    </div>
  );
}
