"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FileText, GraduationCap, Microscope, HelpCircle } from "lucide-react";

export default function TypeTravailPage() {
  const types = [
    { id: 'rapport', title: 'Rapport de stage', description: 'Licence, Master 1', icon: <FileText className="w-6 h-6 text-blue-500" />, href: "/type-travail/rapport-stage" },
    { id: 'memoire', title: 'Mémoire de fin d\'étude', description: 'Master 2', icon: <GraduationCap className="w-6 h-6 text-indigo-500" />, href: "/type-travail/memoire" },
    { id: 'article', title: 'Article scientifique', description: 'Publication, Recherche', icon: <Microscope className="w-6 h-6 text-purple-500" />, href: "/type-travail/article-scientifique" },
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 w-full z-10 relative">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Sélectionnez le type de travail</h2>
        <p className="mt-4 text-lg text-slate-500">Choisissez la catégorie qui correspond à votre projet académique pour accéder au guide dédié.</p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {types.map((type, index) => (
          <Link key={type.id} href={type.href}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              className="relative rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-sm px-6 py-6 shadow-sm hover:shadow-xl hover:border-indigo-300 transition-all duration-300 flex flex-col items-center space-y-4 cursor-pointer group h-full text-center"
            >
              <div className="flex-shrink-0 p-4 bg-slate-50 rounded-full group-hover:bg-indigo-50 transition-colors">
                {type.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-base font-semibold text-slate-900 group-hover:text-indigo-700 transition-colors">{type.title}</p>
                <p className="text-sm text-slate-500 mt-2">{type.description}</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
