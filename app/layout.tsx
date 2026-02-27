import "./globals.css";
import type { Metadata } from "next";
import Container from "@/src/components/layout/Container";

export const metadata: Metadata = {
  title: "[TO DO APP]",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Container> {children}</Container>
      </body>
    </html>
  );
}
