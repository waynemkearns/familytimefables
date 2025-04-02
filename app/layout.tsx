import "./globals.css";
import NavBar from "../components/NavBar";
import React from "react";

export const metadata = {
  title: "Family Time Fables",
  description: "Timeless Celtic stories for modern families",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-amber-50 text-amber-900">
        <NavBar />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
