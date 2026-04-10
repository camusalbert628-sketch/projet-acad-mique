"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FileText, GraduationCap, Microscope, HelpCircle } from "lucide-react";

export default function TypeTravailPage() {
  const types = [
    { id: 'rapport', title: 'Rapport de stage', description: 'Licence, Master 1', icon: <FileText className="w-6 h-6 text-blue-500" /> },
    { id: 'memoire', title: 'Mémoire de fin d\'étude', description: 'Master 2', icon: <GraduationCap className="w-6 h-6 text-indigo-500" /> },
    { id: 'article', title: 'Article scientifique', description: 'Publication, Recherche', icon: <Microscope className="w-6 h-6 text-purple-500" /> },
    { id: 'autre', title: 'Autre', description: 'Précisez votre type de travail', icon: <HelpCircle className="w-6 h-6 text-slate-500" /> }
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 w-full z-10 relative">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Sélectionnez le type de travail</h2>
        <p className="mt-4 text-lg text-slate-500">Choisissez la catégorie qui correspond à votre projet académique.</p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {types.map((type, index) => (
          <motion.div
            key={type.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            className="relative rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-sm px-6 py-6 shadow-sm hover:shadow-xl hover:border-indigo-300 transition-all duration-300 flex items-center space-x-4 cursor-pointer group"
          >
            <div className="flex-shrink-0">
              <input
                id={type.id}
                name="type-travail"
                type="radio"
                className="h-5 w-5 text-indigo-600 border-slate-300 focus:ring-indigo-500 transition-all"
              />
            </div>
            <div className="flex-shrink-0 p-2 bg-slate-50 rounded-lg group-hover:bg-indigo-50 transition-colors">
              {type.icon}
            </div>
            <div className="flex-1 min-w-0">
              <label htmlFor={type.id} className="focus:outline-none w-full block cursor-pointer">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-base font-semibold text-slate-900 group-hover:text-indigo-700 transition-colors">{type.title}</p>
                <p className="text-sm text-slate-500 truncate">{type.description}</p>
              </label>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-10 flex justify-end"
      >
        <Link
          href="/infos-projet"
          className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-xl shadow-md text-white bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 hover:-translate-y-0.5"
        >
          Suivant
        </Link>
      </motion.div>
    </div>
  );
}
