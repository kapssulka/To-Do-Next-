import PageLayout from "@/src/components/PageLayout";

export default function page() {
  return (
    <PageLayout className="gap-8 max-w-4xl mx-auto">
      {/* 1. Блок с базовой информацией */}
      <section className="flex flex-col sm:flex-row items-center gap-6 border border-gray-200 rounded p-6">
        {/* Аватар */}
        <div className="w-24 h-24 rounded-full bg-gray-300 flex-shrink-0"></div>

        {/* Информация пользователя */}
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold text-[#333333]">
            Имя пользователя
          </h2>
          <p className="text-gray-600">user@example.com</p>
          <p className="text-gray-600">
            Описание: здесь можно добавить информацию о себе.
          </p>
        </div>
      </section>

      {/* 2. Блок с графиками продуктивности */}
      <section className="flex flex-col gap-4 border border-gray-200 rounded p-6">
        <h3 className="text-xl font-semibold text-[#333333]">
          Графики продуктивности
        </h3>

        <div className="flex flex-wrap gap-4 mt-4">
          {/* Примеры кругов для графиков */}
          <div className="w-32 h-32 bg-purple-400 rounded-full flex items-center justify-center text-white">
            75%
          </div>
          <div className="w-32 h-32 bg-green-400 rounded-full flex items-center justify-center text-white">
            50%
          </div>
          <div className="w-32 h-32 bg-blue-400 rounded-full flex items-center justify-center text-white">
            90%
          </div>
          <div className="w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center text-white">
            30%
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
