"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Formations", href: "/#formations" },
    { name: "Témoignages", href: "/#temoignages" },
    { name: "Contact", href: "/#contact" },
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
            <Link href="/" className="flex-shrink-0 flex items-center font-extrabold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 tracking-tight z-50">
              Genenzis Academy
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 hover:text-indigo-600 font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/auth"
                className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
              >
                Connexion
              </Link>
              <Link
                href="/auth"
                className="bg-indigo-600 text-white px-5 py-2.5 rounded-full font-medium hover:bg-indigo-700 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
              >
                S&apos;inscrire
              </Link>
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
            <div className="flex flex-col space-y-4 text-center">
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
                <Link
                  href="/auth"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-indigo-600 text-lg font-medium py-3"
                >
                  Connexion
                </Link>
                <Link
                  href="/auth"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-indigo-600 text-white text-lg px-5 py-3 rounded-xl font-medium shadow-md"
                >
                  S&apos;inscrire
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
