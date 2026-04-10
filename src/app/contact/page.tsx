"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 pt-20">

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl tracking-tight mb-4">
              Contactez le support DataAcademia
            </h1>
            <p className="text-lg text-slate-600">
              Besoin d&apos;aide avec vos analyses ? Notre équipe d&apos;experts data est là pour vous accompagner.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Infos Contact */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="col-span-1 space-y-6"
            >
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Assistance en ligne</h3>
                <p className="text-slate-600 mb-4">Chattez avec un analyste en direct depuis votre espace de travail.</p>
                <p className="font-medium text-blue-600 cursor-pointer hover:underline">Ouvrir le chat</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Email</h3>
                <p className="text-slate-600 mb-4">Pour toute demande administrative ou partenariat.</p>
                <p className="font-medium text-indigo-600 cursor-pointer hover:underline">support@dataacademia.com</p>
              </div>
            </motion.div>

            {/* Formulaire */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="col-span-1 lg:col-span-2 bg-white rounded-2xl shadow-xl border border-slate-100 p-8 sm:p-12"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Envoyez-nous un message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Nom complet</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-slate-50 focus:bg-white" placeholder="Jean Dupont" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email universitaire</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-slate-50 focus:bg-white" placeholder="jean@etu.univ.edu" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Sujet de votre demande</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-slate-50 focus:bg-white text-slate-700">
                    <option>Problème technique (import, builder)</option>
                    <option>Aide sur l&apos;analyse (interprétation, tests)</option>
                    <option>Question sur la facturation/export</option>
                    <option>Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-slate-50 focus:bg-white" placeholder="Expliquez-nous votre problème en détail..."></textarea>
                </div>

                <button type="button" className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  Envoyer la demande
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
