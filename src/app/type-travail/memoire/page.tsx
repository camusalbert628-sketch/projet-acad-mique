"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, BookOpen, Target, LayoutList, Lightbulb, PlayCircle, ArrowRight } from "lucide-react";

export default function MemoirePage() {
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
          Guide Académique
        </span>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Mémoire de fin d&apos;étude</h1>
        <p className="mt-4 text-xl text-slate-600">
          Un travail de recherche original, structuré et validé par une analyse rigoureuse.
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
            <BookOpen className="w-8 h-8 text-blue-500 mr-4" />
            <h2 className="text-2xl font-bold text-slate-900">Définition</h2>
          </div>
          <p className="text-slate-600 leading-relaxed text-lg">
            Le mémoire est l&apos;aboutissement d&apos;un cycle universitaire (souvent Master). Il démontre votre capacité à formuler une problématique de recherche, explorer l&apos;état de l&apos;art, collecter des données empiriques et les analyser pour apporter une réponse justifiée et innovante.
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
            <li>Produire une connaissance nouvelle ou appliquer un modèle théorique à un cas pratique.</li>
            <li>Maîtriser la méthodologie de recherche (quantitative ou qualitative).</li>
            <li>Argumenter et soutenir publiquement vos résultats devant un jury.</li>
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
            <h2 className="text-2xl font-bold text-slate-900">Structure Détaillée</h2>
          </div>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 mr-4">1</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Introduction</h3>
                <p className="text-slate-600">Contexte, justification du choix du sujet, énoncé clair de la problématique et des hypothèses de recherche.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 mr-4">2</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Revue de littérature (Cadre Théorique)</h3>
                <p className="text-slate-600">Synthèse des concepts clés, modèles existants et définition du cadre conceptuel qui soutiendra votre analyse empirique.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 mr-4">3</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Cadre Empirique et Méthodologie</h3>
                <p className="text-slate-600">Présentation du terrain, définition de la population cible, choix de l&apos;échantillonnage et création des instruments (ex: Questionnaire de DataAcademia).</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 mr-4">4</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Résultats et Discussions</h3>
                <p className="text-slate-600">Présentation des données statistiques (Tableaux croisés, régressions, tests d&apos;hypothèses générés par l&apos;app), vérification des hypothèses et recommandations.</p>
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
              <li>Alignez rigoureusement vos questions de recherche avec vos hypothèses et votre questionnaire.</li>
              <li>Assurez la représentativité de votre échantillon (min. 100-150 pour des tests fiables).</li>
              <li>Ne laissez aucun tableau sans commentaire ou interprétation.</li>
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
              <h2 className="text-xl font-bold text-blue-900">Exemple DataAcademia</h2>
            </div>
            <p className="text-blue-800 mb-4">
              <strong>H1:</strong> L&apos;adoption du télétravail augmente la productivité.
            </p>
            <p className="text-blue-800 text-sm">
              Saisissez cette hypothèse dans l&apos;outil. Collectez vos données, puis DataAcademia générera un test du Chi2 ou une corrélation (Pearson) avec la mention &quot;H1 Confirmée (p=0.03)&quot; prête à insérer dans votre document Word.
            </p>
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
          Démarrer mon Mémoire <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </motion.div>
    </div>
  );
}
