import PageLayout from "@/src/components/PageLayout";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageLayout className="justify-center">{children}</PageLayout>;
}
