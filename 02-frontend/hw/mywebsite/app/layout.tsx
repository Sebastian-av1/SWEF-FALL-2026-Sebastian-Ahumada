import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="flex gap-4 bg-slate-950 p-4">
          <Link href="/" className="text-white hover:text-emerald-400">Home</Link>
          <Link href="/travel" className="text-white hover:text-emerald-400">Travel</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}