"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function InfosProjetPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8 w-full z-10 relative">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="md:flex md:items-center md:justify-between mb-8"
      >
        <div className="flex-1 min-w-0">
          <h2 className="text-3xl font-extrabold leading-7 text-slate-900 sm:truncate tracking-tight">
            Informations du projet
          </h2>
          <p className="mt-2 text-base text-slate-500">
            Détaillez le cadre de votre recherche pour personnaliser l&apos;analyse.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="bg-white/80 backdrop-blur-sm shadow-xl px-4 py-8 sm:rounded-2xl sm:p-10 border border-slate-100"
      >
        <form className="space-y-8">
          <div>
            <label htmlFor="theme" className="block text-sm font-medium text-slate-700 mb-2">
              Thème / Sujet du travail
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="theme"
                id="theme"
                className="shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-slate-200 rounded-xl p-3 border transition-all"
                placeholder="Ex: L&apos;impact de l&apos;IA sur le marketing digital"
              />
            </div>
          </div>

          <div>
            <label htmlFor="objectifs" className="block text-sm font-medium text-slate-700 mb-2">
              Objectifs de la recherche
            </label>
            <div className="mt-1">
              <textarea
                id="objectifs"
                name="objectifs"
                rows={3}
                className="shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-slate-200 rounded-xl p-3 border transition-all"
                placeholder="Quels sont les buts principaux de votre étude ?"
              />
            </div>
          </div>

          <div>
            <label htmlFor="problematique" className="block text-sm font-medium text-slate-700 mb-2">
              Problématique
            </label>
            <div className="mt-1">
              <textarea
                id="problematique"
                name="problematique"
                rows={3}
                className="shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-slate-200 rounded-xl p-3 border transition-all"
                placeholder="Quelle est la question centrale de votre recherche ?"
              />
            </div>
          </div>

          <div>
            <label htmlFor="hypotheses" className="block text-sm font-medium text-slate-700 mb-2">
              Hypothèses de recherche
            </label>
            <div className="mt-1">
              <textarea
                id="hypotheses"
                name="hypotheses"
                rows={3}
                className="shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-slate-200 rounded-xl p-3 border transition-all"
                placeholder="Quelles sont vos hypothèses de départ ?"
              />
            </div>
          </div>

          <div>
            <label htmlFor="champ" className="block text-sm font-medium text-slate-700 mb-2">
              Champ d&apos;étude (Domaine)
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="champ"
                id="champ"
                className="shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-slate-200 rounded-xl p-3 border transition-all"
                placeholder="Ex: Marketing, Ressources Humaines, Finance..."
              />
            </div>
          </div>
        </form>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-8 flex justify-between"
      >
        <Link
          href="/type-travail"
          className="bg-white py-3 px-6 border border-slate-300 rounded-xl shadow-sm text-sm font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
        >
          Retour
        </Link>
        <Link
          href="/questionnaire"
          className="ml-3 inline-flex justify-center py-3 px-6 border border-transparent shadow-md text-sm font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 hover:-translate-y-0.5"
        >
          Sauvegarder et continuer
        </Link>
      </motion.div>
    </div>
  );
}
