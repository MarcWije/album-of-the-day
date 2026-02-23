import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Album of the Day",
  description: "A Project by Marc Wijesuriya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={ `antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
