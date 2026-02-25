export default function Header() {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Лого / название */}
      <div className="text-xl font-bold text-[#7C3AED]">MyNotes</div>

      {/* Навигация */}
      <nav className="flex gap-4 items-center">
        <a href="/" className="text-[#333333] hover:text-[#7C3AED]">
          Главная
        </a>
        <a href="/profile" className="text-[#333333] hover:text-[#7C3AED]">
          Профиль
        </a>
        <button className="bg-[#7C3AED] text-white px-4 py-1 rounded hover:bg-[#6B21A8]">
          Войти
        </button>
      </nav>
    </header>
  );
}
