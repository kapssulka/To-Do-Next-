import AuthForm from "@/src/components/layout/AuthForm";
import AccentButton from "@/src/ui/buttons/AccentButton";
import Input from "@/src/ui/Input";

export default function page() {
  return (
    <AuthForm formTitle="Регистрация">
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Пароль" />
      <Input type="password" placeholder="Подтверждение пароля" />

      <AccentButton children="Зарегистрироваться" />

      <p className="text-sm text-gray-600 text-center mt-2">
        Уже есть аккаунт?{" "}
        <a href="/auth/login" className="text-[#7C3AED]">
          Войти
        </a>
      </p>
    </AuthForm>
  );
}
