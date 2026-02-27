import HeaderNav from "../HeaderNav";

export default function Header() {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Лого / название */}
      <div className="text-xl font-bold text-[#7C3AED]">MyNotes</div>

      {/* Навигация */}
      <HeaderNav />
    </header>
  );
}
