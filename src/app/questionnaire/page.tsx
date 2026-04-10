"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FileSpreadsheet, PenTool } from "lucide-react";

export default function QuestionnairePage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8 w-full z-10 relative">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Gestion du Questionnaire</h2>
        <p className="mt-4 text-lg text-slate-500">
          Avez-vous déjà un questionnaire ou souhaitez-vous en créer un ?
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200 p-10 text-center flex flex-col items-center hover:shadow-xl transition-shadow duration-300 group"
        >
          <div className="h-20 w-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
            <FileSpreadsheet className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Option 1 : J&apos;ai déjà un questionnaire</h3>
          <p className="text-slate-500 mb-8 flex-1 leading-relaxed">Importez votre questionnaire existant. Vous pouvez télécharger notre template Excel pour vous assurer que le format est correct.</p>

          <div className="w-full space-y-4">
            <button className="w-full inline-flex justify-center items-center px-6 py-3 border border-slate-300 shadow-sm text-base font-medium rounded-xl text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all">
              Télécharger le template Excel
            </button>
            <button className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all">
              Importer mon fichier (Excel)
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200 p-10 text-center flex flex-col items-center hover:shadow-xl transition-shadow duration-300 group"
        >
          <div className="h-20 w-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
            <PenTool className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Option 2 : Je veux créer mon questionnaire</h3>
          <p className="text-slate-500 mb-8 flex-1 leading-relaxed">Utilisez notre builder intégré pour générer votre questionnaire étape par étape, avec l&apos;aide de nos suggestions adaptées à votre domaine.</p>

          <div className="w-full mt-auto">
            <button className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-xl text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all">
              Ouvrir le Builder de Questionnaire
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
          href="/infos-projet"
          className="bg-white py-3 px-6 border border-slate-300 rounded-xl shadow-sm text-sm font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all"
        >
          Retour
        </Link>
        <Link
          href="/parametres"
          className="ml-3 inline-flex justify-center py-3 px-6 border border-transparent shadow-md text-sm font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all hover:-translate-y-0.5"
        >
          Continuer vers Paramètres
        </Link>
      </motion.div>
    </div>
  );
}
