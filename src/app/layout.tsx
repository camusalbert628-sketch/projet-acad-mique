import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Genenzis Academy",
  description: "Plateforme moderne de formation en ligne",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 selection:bg-indigo-100 selection:text-indigo-900 relative">

        <Navbar />

        <main className="flex-1 flex flex-col w-full">
          {children}
        </main>

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/655487698"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-emerald-500 text-white p-4 rounded-full shadow-xl hover:bg-emerald-600 hover:scale-110 transition-all duration-300 z-50"
        >
          <MessageCircle className="w-7 h-7" />
        </a>

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div className="col-span-1 md:col-span-2">
                <Link href="/" className="font-extrabold text-2xl text-white tracking-tight mb-4 inline-block">
                  Genenzis Academy
                </Link>
                <p className="text-sm max-w-xs mt-2">
                  La plateforme de référence pour propulser votre carrière grâce à nos formations d&apos;excellence.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Liens Rapides</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/#formations" className="hover:text-white transition-colors">Formations</Link></li>
                  <li><Link href="/auth" className="hover:text-white transition-colors">Inscription</Link></li>
                  <li><Link href="/#contact" className="hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Légal</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="#" className="hover:text-white transition-colors">Mentions légales</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors">Confidentialité</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors">CGV / CGU</Link></li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center text-center md:text-left">
              <p>© {new Date().getFullYear()} Genenzis Academy. Tous droits réservés.</p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                {/* Social icons placeholders */}
                <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors">X</a>
                <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors">In</a>
                <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors">Fb</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
