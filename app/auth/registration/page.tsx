export default function page() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-center text-[#333]">
        Регистрация
      </h2>
      <input
        type="email"
        placeholder="Email"
        className="border border-gray-300 rounded px-4 py-2"
      />
      <input
        type="password"
        placeholder="Пароль"
        className="border border-gray-300 rounded px-4 py-2"
      />
      <input
        type="password"
        placeholder="Подтверждение пароля"
        className="border border-gray-300 rounded px-4 py-2"
      />
      <button className="bg-[#7C3AED] text-white py-2 rounded mt-2">
        Зарегистрироваться
      </button>
      <p className="text-sm text-gray-600 text-center mt-2">
        Уже есть аккаунт?{" "}
        <a href="/auth/login" className="text-[#7C3AED]">
          Войти
        </a>
      </p>
    </div>
  );
}
