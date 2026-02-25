export default function Footer() {
  return (
    <footer className="bg-white px-6 py-4 flex justify-center items-center text-[#333333] text-sm">
      <p>© {new Date().getFullYear()} MyNotes. Все права защищены.</p>
    </footer>
  );
}
