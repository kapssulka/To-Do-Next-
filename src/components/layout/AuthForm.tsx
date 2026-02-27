import React from "react";

interface AuthFormProps {
  children: React.ReactNode;
  formTitle: string;
}

export default function AuthForm({ children, formTitle }: AuthFormProps) {
  return (
    <div className="flex flex-col gap-4 max-w-[300px] w-full h-full justify-center ">
      <h2 className="text-2xl font-bold text-center text-[#333]">
        {formTitle}
      </h2>

      {children}
    </div>
  );
}
