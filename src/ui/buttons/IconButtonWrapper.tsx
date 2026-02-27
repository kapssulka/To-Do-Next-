import React from "react";
import clsx from "clsx";

type IconButtonWrapperProps = React.ComponentProps<"button"> & {
  children: React.ReactNode;
  color: "red" | "green" | "blue";
};

export default function IconButtonWrapper({
  children,
  color,
  ...props
}: IconButtonWrapperProps) {
  return (
    <button
      {...props}
      className={clsx(
        `cursor-pointer rounded-md p-2
        transition-all duration-300
        bg-gray-100 
        `,
        color === "green" && "hover:bg-green-100 hover:text-green-600",
        color === "red" && "hover:bg-red-100 hover:text-red-600",
        color === "blue" && "hover:bg-blue-100 hover:text-blue-600",
      )}
    >
      {children}
    </button>
  );
}
