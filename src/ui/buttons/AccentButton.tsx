type AccentButtonProps = React.ComponentProps<"button"> & {
  children: string; // только текст
};

export default function AccentButton({
  className,
  ...props
}: AccentButtonProps) {
  return (
    <button
      {...props}
      className={`
        cursor-pointer
        bg-[#7C3AED] text-white px-4 py-2 rounded
        hover:bg-[#6D28D9]
        active:scale-95
        disabled:opacity-50 disabled:cursor-not-allowed
        transition-all duration-300
        ${className ?? ""}
      `}
    />
  );
}
