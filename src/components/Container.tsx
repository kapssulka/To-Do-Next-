import React from "react";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDF6EC] text-[#333]">
      <Header />

      <main className="flex-1 max-w-4xl mx-auto px-4 py-6">{children}</main>

      <Footer />
    </div>
  );
}
