"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, BarChart3, FileSpreadsheet, CheckCircle2, ArrowRight } from "lucide-react";

export default function EtudiantDashboard() {
  const { data: session } = useSession();

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 w-full z-10 relative">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h2 className="text-3xl font-extrabold leading-7 text-slate-900 tracking-tight">
          Bonjour, {session?.user?.name || "Étudiant"} 👋
        </h2>
        <p className="mt-2 text-base text-slate-500">
          Bienvenue dans votre espace personnel. Reprenez votre travail là où vous l&apos;avez laissé.
        </p>
      </motion.div>

      {/* Current Projects & Progress */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="col-span-1 lg:col-span-2 bg-white rounded-2xl shadow-xl border border-slate-100 p-8"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-slate-900">Projet en cours</h3>
            <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-semibold">En rédaction</span>
          </div>
          <div className="flex items-center space-x-4 mb-6">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
              <BookOpen className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900">L&apos;impact de l&apos;IA sur le marketing</h4>
              <p className="text-sm text-slate-500">Mémoire de fin d&apos;étude</p>
            </div>
          </div>

          {/* Progress Tracker */}
          <div className="space-y-4 relative before:absolute before:inset-0 before:ml-[1.15rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white bg-blue-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl shadow-sm bg-white border border-slate-200">
                <div className="flex items-center justify-between mb-1">
                  <div className="font-bold text-slate-900">Choix du sujet</div>
                </div>
                <div className="text-sm text-slate-500">Terminé le 10 Mars</div>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white bg-blue-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <span className="text-sm font-bold">2</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl shadow-sm bg-blue-50 border border-blue-200">
                <div className="flex items-center justify-between mb-1">
                  <div className="font-bold text-blue-900">Questionnaire & Collecte</div>
                </div>
                <div className="text-sm text-blue-700">En attente de réponses (45/100)</div>
                <Link href="/questionnaire" className="mt-3 inline-flex items-center text-sm font-medium text-blue-700 hover:text-blue-800">Reprendre <ArrowRight className="ml-1 w-4 h-4"/></Link>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white bg-slate-200 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <span className="text-sm font-bold">3</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl shadow-sm bg-slate-50 border border-slate-200 opacity-60">
                <div className="flex items-center justify-between mb-1">
                  <div className="font-bold text-slate-700">Analyse des données</div>
                </div>
                <div className="text-sm text-slate-500">À venir</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="col-span-1 space-y-6"
        >
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Accès rapide</h3>
            <div className="space-y-3">
              <Link href="/type-travail" className="flex items-center p-3 rounded-xl hover:bg-slate-50 border border-slate-100 transition-colors group">
                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg mr-3 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-5 h-5" />
                </div>
                <span className="font-medium text-slate-700 group-hover:text-indigo-600">Nouveau projet</span>
              </Link>
              <Link href="/questionnaire" className="flex items-center p-3 rounded-xl hover:bg-slate-50 border border-slate-100 transition-colors group">
                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg mr-3 group-hover:scale-110 transition-transform">
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                <span className="font-medium text-slate-700 group-hover:text-emerald-600">Gérer mon questionnaire</span>
              </Link>
              <Link href="/resultats" className="flex items-center p-3 rounded-xl hover:bg-slate-50 border border-slate-100 transition-colors group">
                <div className="p-2 bg-rose-50 text-rose-600 rounded-lg mr-3 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <span className="font-medium text-slate-700 group-hover:text-rose-600">Voir mes résultats</span>
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-xl p-6 text-white relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
            <h3 className="text-lg font-bold mb-2">Besoin d&apos;aide ?</h3>
            <p className="text-blue-100 text-sm mb-4">Découvrez nos guides méthodologiques pour chaque type de travail.</p>
            <Link href="/type-travail" className="inline-block bg-white text-blue-700 px-4 py-2 rounded-lg text-sm font-bold shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
              Consulter les guides
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
