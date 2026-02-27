import Link from "next/link";

export default function HeaderNav() {
  return (
    <nav className="flex gap-4 items-center">
      <Link href="/" className="text-[#333333] hover:text-[#7C3AED]">
        Главная
      </Link>
      <Link href="/profile" className="text-[#333333] hover:text-[#7C3AED]">
        Профиль
      </Link>
      <Link
        href="/auth"
        className="bg-[#7C3AED] text-white px-4 py-1 rounded hover:bg-[#6B21A8]"
      >
        Войти
      </Link>
    </nav>
  );
}
