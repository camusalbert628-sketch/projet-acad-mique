"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Microscope, Target, LayoutList, Lightbulb, PlayCircle, ArrowRight } from "lucide-react";

export default function ArticleScientifiquePage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 w-full z-10 relative">
      <Link href="/type-travail" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" /> Retour au choix du travail
      </Link>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-4">
          Publication Académique
        </span>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Article Scientifique</h1>
        <p className="mt-4 text-xl text-slate-600">
          Un écrit rigoureux destiné à être publié dans une revue évaluée par des pairs.
        </p>
      </motion.div>

      <div className="space-y-12">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100"
        >
          <div className="flex items-center mb-4">
            <Microscope className="w-8 h-8 text-blue-500 mr-4" />
            <h2 className="text-2xl font-bold text-slate-900">Définition</h2>
          </div>
          <p className="text-slate-600 leading-relaxed text-lg">
            L&apos;article scientifique (ou &quot;paper&quot;) est un texte concis présentant les résultats de travaux de recherche originaux. Il obéit à des normes de rédaction internationales (ex: APA) très strictes et a pour but de contribuer à l&apos;avancement des connaissances dans une discipline.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100"
        >
          <div className="flex items-center mb-4">
            <Target className="w-8 h-8 text-indigo-500 mr-4" />
            <h2 className="text-2xl font-bold text-slate-900">Objectifs</h2>
          </div>
          <ul className="space-y-4 text-slate-600 list-disc pl-6 text-lg">
            <li>Partager de nouvelles découvertes avec la communauté scientifique.</li>
            <li>Fournir suffisamment de détails méthodologiques pour permettre la réplication (reproductibilité).</li>
            <li>Faire valider la qualité de ses travaux par le processus de &quot;peer-review&quot;.</li>
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100"
        >
          <div className="flex items-center mb-6">
            <LayoutList className="w-8 h-8 text-emerald-500 mr-4" />
            <h2 className="text-2xl font-bold text-slate-900">Structure Détaillée (IMRAD)</h2>
          </div>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 mr-4">I</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Introduction</h3>
                <p className="text-slate-600">Quel est le problème étudié ? Revue de littérature ciblée, lacunes identifiées (&quot;gap&quot;), et hypothèses (ex: The purpose of this study is...).</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 mr-4">M</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Méthodes (Materials & Methods)</h3>
                <p className="text-slate-600">Comment le problème a-t-il été étudié ? Participants, variables, protocoles de collecte, instruments utilisés et méthodes statistiques choisies.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 mr-4">R</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Résultats (Results)</h3>
                <p className="text-slate-600">Qu&apos;a-t-on trouvé ? Présentation objective des données sans interprétation, supportée par des graphiques ou tableaux de tests de validité (p-value, R², ANOVA).</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 mr-4">D</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Discussion (And Discussion)</h3>
                <p className="text-slate-600">Que signifient ces résultats ? Comparaison avec la littérature existante, validation ou rejet des hypothèses, limites de l&apos;étude et pistes futures.</p>
              </div>
            </div>
          </div>
        </motion.section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-indigo-50 p-8 rounded-2xl border border-indigo-100"
          >
            <div className="flex items-center mb-4">
              <Lightbulb className="w-6 h-6 text-indigo-600 mr-3" />
              <h2 className="text-xl font-bold text-indigo-900">Conseils Pratiques</h2>
            </div>
            <ul className="space-y-3 text-indigo-800 list-disc pl-5">
              <li>Rédigez l&apos;Abstract (le résumé) en tout dernier lieu.</li>
              <li>Évitez la verbosité : soyez précis, direct et factuel.</li>
              <li>N&apos;incluez que les figures absolument nécessaires à la compréhension des résultats clés.</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-blue-50 p-8 rounded-2xl border border-blue-100"
          >
            <div className="flex items-center mb-4">
              <PlayCircle className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-xl font-bold text-blue-900">Support DataAcademia</h2>
            </div>
            <p className="text-blue-800 mb-4">
              L&apos;outil d&apos;analyse vous fournira exactement ce qu&apos;attendent les revues :
            </p>
            <ul className="text-blue-800 text-sm list-disc pl-5">
               <li>Calculs exacts des p-values et intervalles de confiance.</li>
               <li>Tableaux formatés selon la norme APA.</li>
               <li>Graphiques de corrélation nets et sans &quot;bruit visuel&quot;.</li>
            </ul>
          </motion.section>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <Link
          href="/infos-projet"
          className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          Démarrer mon Article <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </motion.div>
    </div>
  );
}
