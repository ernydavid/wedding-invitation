import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Boda Erny & Yessica",
  description: "Invitación de boda de Erny y Yessica"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="m-0 bg-black p-0 font-body text-white antialiased">
        {children}
      </body>
    </html>
  );
}
