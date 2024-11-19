import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Reservas de peluqueria",
  description: "Pagina para realizar reservas de cortes de pelo online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
