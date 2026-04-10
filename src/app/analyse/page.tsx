"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AnalysePage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8 w-full z-10 relative">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="md:flex md:items-center md:justify-between mb-8"
      >
        <div className="flex-1 min-w-0">
          <h2 className="text-3xl font-extrabold leading-7 text-slate-900 sm:truncate tracking-tight">
            Configuration de l&apos;analyse
          </h2>
          <p className="mt-2 text-base text-slate-500">
            Choisissez comment vous souhaitez analyser et visualiser vos données.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="bg-white/80 backdrop-blur-sm shadow-xl sm:rounded-2xl border border-slate-100 overflow-hidden"
      >
        <div className="px-4 py-8 sm:p-10 space-y-10">

          <fieldset>
            <legend className="text-lg font-semibold text-slate-900 border-b border-slate-200 pb-2 w-full">Format des résultats</legend>
            <div className="mt-6 space-y-5">
              <div className="flex items-center">
                <input id="format-tableaux" name="format" type="radio" className="focus:ring-indigo-500 h-5 w-5 text-indigo-600 border-slate-300" />
                <label htmlFor="format-tableaux" className="ml-3 block text-base font-medium text-slate-700 cursor-pointer">Tableaux statistiques seulement</label>
              </div>
              <div className="flex items-center">
                <input id="format-graphiques" name="format" type="radio" className="focus:ring-indigo-500 h-5 w-5 text-indigo-600 border-slate-300" />
                <label htmlFor="format-graphiques" className="ml-3 block text-base font-medium text-slate-700 cursor-pointer">Graphiques seulement</label>
              </div>
              <div className="flex items-center">
                <input id="format-mixte" name="format" type="radio" defaultChecked className="focus:ring-indigo-500 h-5 w-5 text-indigo-600 border-slate-300" />
                <label htmlFor="format-mixte" className="ml-3 block text-base font-medium text-slate-700 cursor-pointer">Tableaux + Graphiques</label>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-lg font-semibold text-slate-900 border-b border-slate-200 pb-2 w-full">Niveau d&apos;analyse</legend>
            <div className="mt-6 space-y-6">
              <div className="flex items-start">
                <div className="flex items-center h-6">
                  <input id="niveau-descriptif" name="niveau-descriptif" type="checkbox" defaultChecked className="focus:ring-indigo-500 h-5 w-5 text-indigo-600 border-slate-300 rounded" />
                </div>
                <div className="ml-3 text-base">
                  <label htmlFor="niveau-descriptif" className="font-medium text-slate-700 cursor-pointer">Analyse descriptive simple</label>
                  <p className="text-slate-500 mt-1">Fréquences, moyennes, écart-types.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-6">
                  <input id="niveau-avance" name="niveau-avance" type="checkbox" className="focus:ring-indigo-500 h-5 w-5 text-indigo-600 border-slate-300 rounded" />
                </div>
                <div className="ml-3 text-base">
                  <label htmlFor="niveau-avance" className="font-medium text-slate-700 cursor-pointer">Analyse croisée avec interprétation</label>
                  <p className="text-slate-500 mt-1">Croisement de variables avec suggestions automatiques d&apos;interprétation.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-6">
                  <input id="niveau-tests" name="niveau-tests" type="checkbox" className="focus:ring-indigo-500 h-5 w-5 text-indigo-600 border-slate-300 rounded" />
                </div>
                <div className="ml-3 text-base">
                  <label htmlFor="niveau-tests" className="font-medium text-slate-700 cursor-pointer">Tests statistiques</label>
                  <p className="text-slate-500 mt-1">Test du Chi-2, Corrélations de Pearson/Spearman, ANOVA.</p>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-8 flex justify-between"
      >
        <Link
          href="/collecte"
          className="bg-white py-3 px-6 border border-slate-300 rounded-xl shadow-sm text-sm font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
        >
          Retour
        </Link>
        <Link
          href="/dashboard"
          className="ml-3 inline-flex justify-center py-3 px-6 border border-transparent shadow-md text-sm font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 hover:-translate-y-0.5"
        >
          Générer les résultats
        </Link>
      </motion.div>
    </div>
  );
}
