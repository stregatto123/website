import './globals.css';
export const metadata = {
  title: "NoSorprese Broker",
  description: "Comparatore fibra, luce e gas – gratuito, trasparente",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className="min-h-screen bg-gray-50 text-zinc-900">{children}</body>
    </html>
  );
}
