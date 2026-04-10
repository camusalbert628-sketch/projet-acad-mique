import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Analyse de Données Académiques",
  description: "Plateforme d'analyse pour travaux de recherche étudiants.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
        <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center flex-1">
                <Link href="/" className="flex-shrink-0 flex items-center font-extrabold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mr-8 tracking-tight">
                  DataAcademia
                </Link>
                <nav className="hidden lg:flex space-x-1 overflow-x-auto items-center">
                  <Link href="/auth" className="text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap">Connexion</Link>
                  <Link href="/type-travail" className="text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap">Type de Travail</Link>
                  <Link href="/infos-projet" className="text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap">Infos Projet</Link>
                  <Link href="/questionnaire" className="text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap">Questionnaire</Link>
                  <Link href="/parametres" className="text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap">Paramètres</Link>
                  <Link href="/collecte" className="text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap">Collecte</Link>
                  <Link href="/analyse" className="text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap">Analyse</Link>
                  <Link href="/dashboard" className="text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap">Dashboard</Link>
                  <Link href="/export" className="text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap">Export</Link>
                </nav>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 flex flex-col w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 relative overflow-hidden">
          {/* Subtle background gradient blob */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-100/50 rounded-full blur-3xl -z-10 opacity-60 pointer-events-none" />
          {children}
        </main>

        <footer className="bg-white border-t border-slate-200 mt-auto py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
             <div className="text-sm text-slate-500 mb-4 md:mb-0">
               © {new Date().getFullYear()} DataAcademia. Tous droits réservés.
             </div>
             <div className="flex space-x-6 text-sm text-slate-400">
               <Link href="#" className="hover:text-indigo-600 transition-colors">Confidentialité</Link>
               <Link href="#" className="hover:text-indigo-600 transition-colors">CGU</Link>
               <Link href="#" className="hover:text-indigo-600 transition-colors">Support</Link>
             </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
