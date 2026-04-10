"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BarChart3, PieChart, Info, CheckCircle2, AlertTriangle } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 w-full z-10 relative">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="md:flex md:items-center md:justify-between mb-8"
      >
        <div className="flex-1 min-w-0">
          <h2 className="text-3xl font-extrabold leading-7 text-slate-900 sm:truncate tracking-tight">
            Dashboard des Résultats
          </h2>
          <p className="mt-2 text-base text-slate-500">
            Visualisation de vos données et suggestions d&apos;interprétation.
          </p>
        </div>
        <div className="mt-6 flex md:mt-0 md:ml-4">
          <Link
            href="/export"
            className="ml-3 inline-flex items-center px-6 py-3 border border-transparent rounded-xl shadow-md text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all hover:-translate-y-0.5"
          >
            Aller à l&apos;Export
          </Link>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Résumé Exécutif */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="col-span-1 lg:col-span-3 bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl border border-slate-100 overflow-hidden"
        >
          <div className="px-6 py-6 sm:p-8">
            <h3 className="text-xl leading-6 font-bold text-slate-900 mb-4">Résumé exécutif automatique</h3>
            <div className="bg-indigo-50/50 border-l-4 border-indigo-500 p-5 rounded-r-xl">
              <p className="text-base text-indigo-900 leading-relaxed">
                L&apos;analyse porte sur un échantillon de 150 répondants. La majorité (65%) se déclare satisfaite. Une corrélation positive forte (r=0.78, p&lt;0.01) est observée entre la variable X et la variable Y.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Visualisations Placeholder */}
        <div className="col-span-1 lg:col-span-2 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl border border-slate-100 p-6 sm:p-8"
          >
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <PieChart className="w-5 h-5 text-slate-400" />
              Répartition de la population
            </h3>
            <div className="h-72 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-200">
              <span className="text-slate-400 font-medium flex items-center gap-2"><PieChart className="w-8 h-8 opacity-50"/> Espace pour Graphique Circulaire</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl border border-slate-100 p-6 sm:p-8"
          >
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-slate-400" />
              Analyse Croisée
            </h3>
            <div className="h-72 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-200">
              <span className="text-slate-400 font-medium flex items-center gap-2"><BarChart3 className="w-8 h-8 opacity-50"/> Espace pour Histogramme Groupé</span>
            </div>
          </motion.div>
        </div>

        {/* Suggestions d&apos;interprétation et Tableaux */}
        <div className="col-span-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl border border-slate-100 p-6 sm:p-8"
          >
            <h3 className="text-lg font-bold text-slate-900 mb-6">Suggestions d&apos;interprétation</h3>
            <ul className="space-y-4 text-base text-slate-700">
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0 mt-0.5" />
                <span>Les résultats valident l&apos;Hypothèse 1.</span>
              </li>
              <li className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-amber-500 mr-3 shrink-0 mt-0.5" />
                <span>L&apos;Hypothèse 2 est partiellement rejetée au seuil de 5%.</span>
              </li>
              <li className="flex items-start">
                <Info className="w-5 h-5 text-blue-500 mr-3 shrink-0 mt-0.5" />
                <span>Notez la concentration des réponses dans la tranche d&apos;âge 25-34 ans.</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl border border-slate-100 p-6 sm:p-8 overflow-hidden"
          >
            <h3 className="text-lg font-bold text-slate-900 mb-6">Tableau Statistique (Extrait)</h3>
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <div className="inline-block min-w-full align-middle">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider rounded-tl-lg">Catégorie</th>
                      <th className="px-4 py-3 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider">Effectif</th>
                      <th className="px-4 py-3 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider rounded-tr-lg">%</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-100">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-slate-900">Groupe A</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-600 text-right">80</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-600 text-right">53.3%</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-slate-900">Groupe B</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-600 text-right">70</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-600 text-right">46.7%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
