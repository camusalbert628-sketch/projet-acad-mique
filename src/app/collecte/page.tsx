"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { UploadCloud, Wand2 } from "lucide-react";

export default function CollectePage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8 w-full z-10 relative">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Collecte des Réponses</h2>
        <p className="mt-4 text-lg text-slate-500">
          Importez vos données collectées ou laissez-nous simuler des réponses pour votre démonstration.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Option 1: Import */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200 p-10 text-center flex flex-col items-center hover:shadow-xl transition-shadow duration-300 group"
        >
          <div className="h-20 w-20 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
            <UploadCloud className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">J&apos;ai mes données</h3>
          <p className="text-slate-500 mb-8 flex-1 leading-relaxed">Importez votre fichier Excel ou CSV contenant les réponses à votre questionnaire.</p>

          <div className="w-full mt-auto">
            <label className="w-full flex justify-center items-center px-6 py-3 border border-slate-300 shadow-sm text-base font-medium rounded-xl text-slate-700 bg-white hover:bg-slate-50 cursor-pointer transition-all">
              <span>Choisir un fichier (Excel/CSV)</span>
              <input type="file" className="sr-only" accept=".xlsx,.xls,.csv" />
            </label>
            <p className="mt-3 text-xs text-slate-400">Taille maximum : 10MB.</p>
          </div>
        </motion.div>

        {/* Option 2: Simulation */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200 p-10 text-center flex flex-col items-center hover:shadow-xl transition-shadow duration-300 group"
        >
          <div className="h-20 w-20 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
            <Wand2 className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Générer des données</h3>
          <p className="text-slate-500 mb-8 flex-1 leading-relaxed">Nous simulons un jeu de données réaliste basé sur vos hypothèses et paramètres statistiques pour vous permettre de tester les analyses.</p>

          <div className="w-full mt-auto">
            <button className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-xl text-white bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all">
              Lancer la simulation
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-16 flex justify-between"
      >
        <Link
          href="/parametres"
          className="bg-white py-3 px-6 border border-slate-300 rounded-xl shadow-sm text-sm font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all"
        >
          Retour
        </Link>
        <Link
          href="/analyse"
          className="ml-3 inline-flex justify-center py-3 px-6 border border-transparent shadow-md text-sm font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all hover:-translate-y-0.5"
        >
          Passer à l&apos;analyse
        </Link>
      </motion.div>
    </div>
  );
}
