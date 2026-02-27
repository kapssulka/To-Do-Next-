import AuthForm from "@/src/components/layout/AuthForm";
import AccentButton from "@/src/ui/buttons/AccentButton";
import Input from "@/src/ui/Input";
import Link from "next/link";

export default function page() {
  return (
    <AuthForm formTitle="Авторизация">
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Пароль" />

      <AccentButton children="Войти" />

      <p className="text-sm text-gray-600 text-center mt-2">
        Нет аккаунта?{" "}
        <Link href="/auth/registration" className="text-[#7C3AED]">
          Регистрация
        </Link>
      </p>
    </AuthForm>
  );
}
