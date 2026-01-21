export default function Header({ user }) {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">
      <h1 className="text-lg font-semibold">
        ระบบจัดการนักศึกษา
      </h1>

      <div className="text-sm text-gray-600">
        {user?.full_name}
      </div>
    </header>
  );
}
