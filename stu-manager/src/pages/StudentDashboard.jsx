import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StudentSidebar from "../components/StudentSidebar";
import StudentHome from "../components/StudentHome";
import StudentSchedule from "../components/StudentSchedule";
import StudentAttendance from "../components/StudentAttendance";

export default function StudentDashboard() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState("home");
  const [user, setUser] = useState(null);
  const [collapsed, setCollapsed] = useState(true);
  useEffect(() => {
    const saved = localStorage.getItem("currentUser");
    if (!saved) {
      navigate("/");
      return;
    }

    const parsed = JSON.parse(saved);
    if (parsed.role !== "student") {
      navigate("/");
      return;
    }

    setUser(parsed);
  }, [navigate]);

  const renderContent = () => {
    switch (current) {
      case "home":
        return <StudentHome user={user} />;
      case "schedule":
        return <StudentSchedule />;
      case "attendance":
        return <StudentAttendance />;
      default:
        return null;
    }
  };

  return (
      <div className="flex h-screen">
        <Sidebar
          current={current}
          setCurrent={setCurrent}
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />
  
        <main className="flex-1 p-6 bg-gray-100">
          {renderContent()}
      </main>
    </div>
  );
}
