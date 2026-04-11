"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Questionnaire", href: "/questionnaire" },
    { name: "Analyse", href: "/analyse" },
    { name: "Résultats", href: "/resultats" },
    { name: "Export", href: "/export" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center font-extrabold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-800 tracking-tight z-50 font-poppins">
              DataAcademia
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-6 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 hover:text-blue-700 font-medium transition-colors font-inter text-sm lg:text-base"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              {session ? (
                <>
                  <Link
                    href={session.user?.role === "ADMIN" ? "/admin" : "/etudiant"}
                    className="text-sm font-bold text-indigo-700 bg-indigo-50 px-4 py-2 rounded-lg hover:bg-indigo-100 transition-colors"
                  >
                    {session.user?.role === "ADMIN" ? "Espace Admin" : "Mon Espace"}
                  </Link>
                  <button
                    onClick={() => signOut({ callbackUrl: '/' })}
                    className="text-rose-600 font-medium hover:text-rose-700 transition-colors text-sm"
                  >
                    Déconnexion
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/auth"
                    className="text-blue-700 font-medium hover:text-blue-800 transition-colors"
                  >
                    Connexion
                  </Link>
                  <Link
                    href="/auth"
                    className="bg-blue-700 text-white px-5 py-2.5 rounded-full font-medium hover:bg-blue-800 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
                  >
                    S&apos;inscrire
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-slate-600 z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-4 pb-6 flex flex-col shadow-xl md:hidden"
          >
            <div className="flex flex-col space-y-4 text-center overflow-y-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-slate-800 text-xl font-medium py-3 border-b border-slate-100"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 flex flex-col space-y-4">
                {session ? (
                  <>
                    <Link
                      href={session.user?.role === "ADMIN" ? "/admin" : "/etudiant"}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="bg-indigo-50 text-indigo-700 text-lg font-bold py-3 rounded-xl shadow-sm"
                    >
                      {session.user?.role === "ADMIN" ? "Espace Admin" : "Mon Espace"}
                    </Link>
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        signOut({ callbackUrl: '/' });
                      }}
                      className="text-rose-600 text-lg font-medium py-3"
                    >
                      Déconnexion
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/auth"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-blue-700 text-lg font-medium py-3"
                    >
                      Connexion
                    </Link>
                    <Link
                      href="/auth"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="bg-blue-700 text-white text-lg px-5 py-3 rounded-xl font-medium shadow-md"
                    >
                      S&apos;inscrire
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
