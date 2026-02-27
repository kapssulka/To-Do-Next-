import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function Input({ className, ...props }: InputProps) {
  return (
    <input
      {...props}
      className={`w-full border border-gray-300 rounded px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 transition ${className ?? ""}`}
    />
  );
}
