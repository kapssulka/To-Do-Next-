import PageLayout from "@/src/components/layout/PageLayout";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageLayout className="items-center">{children}</PageLayout>;
}
