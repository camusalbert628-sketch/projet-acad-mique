import { Inter, Poppins } from "next/font/google";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Providers } from "@/components/Providers";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "DataAcademia - Analyse tes données académiques",
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
      className={`${inter.variable} ${poppins.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-100 selection:text-blue-900 relative font-inter">
        <Providers>

        <Navbar />

        <main className="flex-1 flex flex-col w-full pt-16">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div className="col-span-1 md:col-span-2">
                <Link href="/" className="font-extrabold text-2xl text-white tracking-tight mb-4 inline-block font-poppins">
                  DataAcademia
                </Link>
                <p className="text-sm max-w-xs mt-2">
                  La plateforme de référence pour analyser et interpréter vos données de recherche académique.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4 font-poppins">Plateforme</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
                  <li><Link href="/questionnaire" className="hover:text-white transition-colors">Questionnaire</Link></li>
                  <li><Link href="/analyse" className="hover:text-white transition-colors">Analyse</Link></li>
                  <li><Link href="/resultats" className="hover:text-white transition-colors">Résultats</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4 font-poppins">Légal</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="#" className="hover:text-white transition-colors">Mentions légales</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors">Confidentialité</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors">RGPD</Link></li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center text-center md:text-left">
              <p>© {new Date().getFullYear()} DataAcademia. Tous droits réservés.</p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">in</a>
                <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">x</a>
              </div>
            </div>
          </div>
        </footer>
      </Providers>
      </body>
    </html>
  );
}
