"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Microscope } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl text-center space-y-8"
      >
        <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl sm:tracking-tight lg:text-7xl">
          Bienvenue sur <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">DataAcademia</span>
        </h1>
        <p className="max-w-2xl mt-5 mx-auto text-xl text-slate-500 leading-relaxed">
          La plateforme d&apos;analyse de données académiques conçue pour accompagner les étudiants de la Licence 1 au Master 2 dans leurs travaux de recherche.
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link
            href="/auth"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 shadow-md hover:shadow-lg transition-all duration-200"
          >
            Commencer maintenant
          </Link>
          <Link
            href="/type-travail"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-200 text-lg font-medium rounded-full text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all duration-200"
          >
            En savoir plus
          </Link>
        </motion.div>

        <section className="py-16 mt-8">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl font-bold text-slate-900 mb-10 tracking-tight"
          >
            Travaux Supportés
          </motion.h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              { title: "Rapport de stage", desc: "Analysez les données collectées lors de vos immersions professionnelles.", icon: <BookOpen className="w-8 h-8 text-blue-500 mb-4" /> },
              { title: "Mémoire", desc: "Structurez et analysez les résultats de votre recherche de fin d&apos;étude.", icon: <GraduationCap className="w-8 h-8 text-indigo-500 mb-4" /> },
              { title: "Article scientifique", desc: "Produisez des analyses statistiques robustes pour vos publications.", icon: <Microscope className="w-8 h-8 text-purple-500 mb-4" /> }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
              >
                {item.icon}
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-base text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  );
}
