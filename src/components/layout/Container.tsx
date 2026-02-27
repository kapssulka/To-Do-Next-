import React from "react";
import Header from "@/src/components/layout/Header";
import Footer from "@/src/components/layout/Footer";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-[#333]">
      <Header />

      <main className="flex justify-center flex-1 max-w-4xl mx-auto px-4 py-6 w-full">
        {children}
      </main>

      <Footer />
    </div>
  );
}
