"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FileText, FileSpreadsheet, FileArchive, CreditCard, Smartphone, Building } from "lucide-react";

export default function ExportPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 w-full z-10 relative">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Export et Paiement</h2>
        <p className="mt-4 text-lg text-slate-500">
          Choisissez votre format d&apos;export et procédez au paiement pour télécharger vos résultats complets.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="bg-white/80 backdrop-blur-sm shadow-xl sm:rounded-2xl border border-slate-100 overflow-hidden"
      >
        <div className="px-4 py-8 sm:p-10 space-y-10">

          {/* Format d&apos;export */}
          <fieldset>
            <legend className="text-lg font-semibold text-slate-900 border-b border-slate-200 pb-2 w-full mb-6">1. Format d&apos;export</legend>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <label className="relative border border-slate-200 p-6 flex flex-col items-center cursor-pointer rounded-xl hover:bg-slate-50 hover:border-indigo-300 focus-within:ring-2 focus-within:ring-indigo-500 transition-all group">
                <input type="radio" name="format" value="pdf" className="sr-only" />
                <FileArchive className="w-8 h-8 text-rose-500 mb-3 group-hover:scale-110 transition-transform" />
                <span className="block text-base font-semibold text-slate-900">Rapport PDF</span>
                <span className="block text-sm text-slate-500 mt-1">Prêt à imprimer</span>
              </label>

              <label className="relative border p-6 flex flex-col items-center cursor-pointer rounded-xl hover:bg-indigo-50/50 focus-within:ring-2 focus-within:ring-indigo-500 border-indigo-500 ring-1 ring-indigo-500 bg-indigo-50/30 transition-all group">
                <input type="radio" name="format" value="word" className="sr-only" defaultChecked />
                <FileText className="w-8 h-8 text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                <span className="block text-base font-semibold text-indigo-900">Document Word</span>
                <span className="block text-sm text-indigo-700 mt-1">Modifiable</span>
              </label>

              <label className="relative border border-slate-200 p-6 flex flex-col items-center cursor-pointer rounded-xl hover:bg-slate-50 hover:border-indigo-300 focus-within:ring-2 focus-within:ring-indigo-500 transition-all group">
                <input type="radio" name="format" value="excel" className="sr-only" />
                <FileSpreadsheet className="w-8 h-8 text-emerald-500 mb-3 group-hover:scale-110 transition-transform" />
                <span className="block text-base font-semibold text-slate-900">Fichier Excel</span>
                <span className="block text-sm text-slate-500 mt-1">Données brutes</span>
              </label>
            </div>
          </fieldset>

          {/* Moyen de paiement */}
          <fieldset className="pt-8 border-t border-slate-100">
            <legend className="text-lg font-semibold text-slate-900 border-b border-slate-200 pb-2 w-full mb-6">2. Moyen de paiement</legend>
            <div className="space-y-4">
              <label className="flex items-center p-4 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
                <input id="payment-card" name="payment_method" type="radio" className="focus:ring-indigo-500 h-5 w-5 text-indigo-600 border-slate-300" />
                <CreditCard className="w-5 h-5 text-slate-400 mx-3" />
                <span className="block text-base font-medium text-slate-700">Carte Bancaire</span>
              </label>

              <label className="flex items-center p-4 border border-indigo-200 bg-indigo-50/30 rounded-xl cursor-pointer hover:bg-indigo-50 transition-colors">
                <input id="payment-mobile" name="payment_method" type="radio" defaultChecked className="focus:ring-indigo-500 h-5 w-5 text-indigo-600 border-slate-300" />
                <Smartphone className="w-5 h-5 text-indigo-500 mx-3" />
                <span className="block text-base font-medium text-slate-900">Mobile Money (Orange, MTN...)</span>
              </label>

              <label className="flex items-center p-4 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
                <input id="payment-transfer" name="payment_method" type="radio" className="focus:ring-indigo-500 h-5 w-5 text-indigo-600 border-slate-300" />
                <Building className="w-5 h-5 text-slate-400 mx-3" />
                <span className="block text-base font-medium text-slate-700">Virement Bancaire</span>
              </label>
            </div>
          </fieldset>

          {/* Résumé de la commande */}
          <div className="pt-8 border-t border-slate-100 flex items-center justify-between">
            <h3 className="text-xl font-medium text-slate-700">Total à payer</h3>
            <p className="text-4xl font-extrabold text-slate-900">15 000 FCFA</p>
          </div>

        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-8 flex justify-between"
      >
        <Link
          href="/dashboard"
          className="bg-white py-3 px-6 border border-slate-300 rounded-xl shadow-sm text-sm font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
        >
          Retour au Dashboard
        </Link>
        <button
          type="button"
          className="ml-3 inline-flex justify-center items-center py-3 px-8 border border-transparent shadow-md text-base font-bold rounded-xl text-white bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-200 hover:-translate-y-0.5"
        >
          Payer et Télécharger
        </button>
      </motion.div>
    </div>
  );
}
