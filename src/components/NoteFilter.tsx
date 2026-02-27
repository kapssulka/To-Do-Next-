import Input from "../ui/Input";

export default function NoteFilter() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
      {/* Поиск */}

      <Input placeholder="Поиск заметок..." type="text" />

      {/* Фильтр */}
      <select className="border border-gray-300 rounded px-4 py-2">
        <option>Все</option>
        <option>Выполненные</option>
        <option>Невыполненные</option>
      </select>
    </div>
  );
}
