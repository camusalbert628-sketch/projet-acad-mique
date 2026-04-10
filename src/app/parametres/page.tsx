"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ParametresPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8 w-full z-10 relative">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="md:flex md:items-center md:justify-between mb-8"
      >
        <div className="flex-1 min-w-0">
          <h2 className="text-3xl font-extrabold leading-7 text-slate-900 sm:truncate tracking-tight">
            Paramètres de l&apos;étude
          </h2>
          <p className="mt-2 text-base text-slate-500">
            Définissez les caractéristiques de votre échantillon et de votre collecte.
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
            <label htmlFor="population" className="block text-sm font-medium text-slate-700 mb-2">
              Population cible
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="population"
                id="population"
                className="shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-slate-200 rounded-xl p-3 border transition-all"
                placeholder="Ex: Étudiants en master, Employés de banque..."
              />
            </div>
            <p className="mt-2 text-sm text-slate-500">
              Décrivez les personnes que vous souhaitez interroger.
            </p>
          </div>

          <div>
            <label htmlFor="taille" className="block text-sm font-medium text-slate-700 mb-2">
              Taille de l&apos;échantillon visée
            </label>
            <div className="mt-1">
              <input
                type="number"
                name="taille"
                id="taille"
                className="shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-slate-200 rounded-xl p-3 border transition-all"
                placeholder="Ex: 150"
              />
            </div>
          </div>

          <div>
            <label htmlFor="methode" className="block text-sm font-medium text-slate-700 mb-2">
              Méthode d&apos;échantillonnage
            </label>
            <div className="mt-1">
              <select
                id="methode"
                name="methode"
                className="shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-slate-200 rounded-xl p-3 border transition-all bg-white"
              >
                <option>Aléatoire simple</option>
                <option>Stratifié</option>
                <option>Par quotas</option>
                <option>De convenance</option>
                <option>Boule de neige</option>
                <option>Autre</option>
              </select>
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
          href="/questionnaire"
          className="bg-white py-3 px-6 border border-slate-300 rounded-xl shadow-sm text-sm font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
        >
          Retour
        </Link>
        <Link
          href="/collecte"
          className="ml-3 inline-flex justify-center py-3 px-6 border border-transparent shadow-md text-sm font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 hover:-translate-y-0.5"
        >
          Valider les paramètres
        </Link>
      </motion.div>
    </div>
  );
}
