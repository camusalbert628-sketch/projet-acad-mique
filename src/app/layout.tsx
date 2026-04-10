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
      <body className="min-h-full flex flex-col bg-gray-50 text-gray-900">
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center flex-1">
                <Link href="/" className="flex-shrink-0 flex items-center font-bold text-xl text-blue-600 mr-8">
                  DataAcademia
                </Link>
                <nav className="hidden md:flex space-x-4 overflow-x-auto">
                  <Link href="/auth" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap">Connexion</Link>
                  <Link href="/type-travail" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap">Type de Travail</Link>
                  <Link href="/infos-projet" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap">Infos Projet</Link>
                  <Link href="/questionnaire" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap">Questionnaire</Link>
                  <Link href="/parametres" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap">Paramètres</Link>
                  <Link href="/collecte" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap">Collecte</Link>
                  <Link href="/analyse" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap">Analyse</Link>
                  <Link href="/dashboard" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap">Dashboard</Link>
                  <Link href="/export" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap">Export</Link>
                </nav>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 flex flex-col w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        
        <footer className="bg-white border-t border-gray-200 mt-auto py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
             © {new Date().getFullYear()} DataAcademia. Tous droits réservés.
          </div>
        </footer>
      </body>
    </html>
  );
}
