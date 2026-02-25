import PageLayout from "@/src/components/PageLayout";

export default function Home() {
  return (
    <PageLayout className="gap-6">
      {/* 1. Блок добавления заметки */}
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Новая заметка..."
          className="flex-1 border border-gray-300 rounded px-4 py-2"
        />
        <button className="bg-[#7C3AED] text-white px-4 py-2 rounded">
          Добавить
        </button>
      </div>

      {/* 2. Панель поиска и фильтрации */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Поиск */}
        <input
          type="text"
          placeholder="Поиск заметок..."
          className="flex-1 border border-gray-300 rounded px-4 py-2"
        />

        {/* Фильтр */}
        <select className="border border-gray-300 rounded px-4 py-2">
          <option>Все</option>
          <option>Выполненные</option>
          <option>Невыполненные</option>
        </select>
      </div>

      {/* 3. Список заметок */}
      <div className="flex flex-col gap-3">
        {/* Пример заметок */}
        <div className="border border-gray-200 rounded p-4 flex justify-between items-center">
          <span>Пример заметки 1</span>
          <div className="flex gap-2">
            <button className="text-[#7C3AED]">Редактировать</button>
            <button className="text-red-500">Удалить</button>
          </div>
        </div>

        <div className="border border-gray-200 rounded p-4 flex justify-between items-center">
          <span>Пример заметки 2</span>
          <div className="flex gap-2">
            <button className="text-[#7C3AED]">Редактировать</button>
            <button className="text-red-500">Удалить</button>
          </div>
        </div>

        <div className="border border-gray-200 rounded p-4 flex justify-between items-center">
          <span>Пример заметки 3</span>
          <div className="flex gap-2">
            <button className="text-[#7C3AED]">Редактировать</button>
            <button className="text-red-500">Удалить</button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
