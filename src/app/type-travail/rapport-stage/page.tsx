"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, BookOpen, Target, LayoutList, Lightbulb, PlayCircle, ArrowRight } from "lucide-react";

export default function RapportStagePage() {
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
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Rapport de Stage</h1>
        <p className="mt-4 text-xl text-slate-600">
          Transformez votre expérience professionnelle en une analyse académique percutante.
        </p>
      </motion.div>

      <div className="space-y-12">
        {/* Definition */}
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
            Le rapport de stage est un document académique qui relate votre immersion en milieu professionnel. Il ne s&apos;agit pas d&apos;un simple journal de bord, mais d&apos;une réflexion analytique sur les missions accomplies et l&apos;organisation qui vous a accueilli.
          </p>
        </motion.section>

        {/* Objectives */}
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
            <li>Démontrer votre capacité à intégrer le monde professionnel.</li>
            <li>Analyser le fonctionnement d&apos;une entreprise ou d&apos;un service.</li>
            <li>Faire le lien entre vos connaissances théoriques et la pratique.</li>
            <li>Identifier une problématique rencontrée et proposer des solutions.</li>
          </ul>
        </motion.section>

        {/* Structure */}
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
                <h3 className="text-xl font-bold text-slate-900 mb-2">L&apos;entreprise et son secteur</h3>
                <p className="text-slate-600">Présentation de la structure, historique, organigramme, secteur d&apos;activité, concurrents.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 mr-4">2</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Les missions confiées</h3>
                <p className="text-slate-600">Description de vos tâches quotidiennes, outils utilisés, difficultés rencontrées et résultats obtenus.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 mr-4">3</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Bilan et Analyse</h3>
                <p className="text-slate-600">Analyse critique d&apos;une problématique spécifique (c&apos;est ici que l&apos;analyse de données intervient), apports du stage sur le plan personnel et professionnel.</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Conseils & Exemples */}
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
              <li>Prenez des notes quotidiennes dès le premier jour.</li>
              <li>Collectez des données chiffrées (CA, évolution, résultats d&apos;enquêtes).</li>
              <li>Restez objectif : la critique est bienvenue si elle est constructive et argumentée.</li>
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
              <h2 className="text-xl font-bold text-blue-900">Exemple d&apos;Analyse</h2>
            </div>
            <p className="text-blue-800 mb-4">
              <strong>Thème :</strong> Amélioration du processus de recrutement.
            </p>
            <p className="text-blue-800 text-sm">
              <em>Utilisation de DataAcademia :</em> Vous pouvez créer un questionnaire adressé aux nouveaux collaborateurs pour analyser leur satisfaction sur le processus d&apos;intégration (onboarding) et générer des graphiques pour votre partie Bilan.
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
          Démarrer mon Rapport de Stage <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </motion.div>
    </div>
  );
}
