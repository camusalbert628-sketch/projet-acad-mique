"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, GraduationCap, Microscope, Database, BarChart3, Download, FileText, Star } from "lucide-react";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Data Science Workspace"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900"></div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/30 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/20 text-blue-300 font-semibold text-sm mb-6 border border-blue-500/30">
              DataAcademia — La référence académique
            </span>
            <h1 className="text-5xl font-extrabold sm:text-6xl lg:text-7xl tracking-tight mb-8">
              Analyse tes données académiques <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">comme un expert</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              La plateforme SaaS premium conçue pour accompagner les étudiants (Licence à Master 2) dans la réalisation de leurs mémoires, rapports de stage et articles scientifiques.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="/type-travail"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-500 shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1 transition-all duration-300"
              >
                Commencer gratuitement <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/auth"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-slate-900 bg-white hover:bg-slate-100 shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Se connecter avec Google
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Présentation - Types de travaux */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Des outils adaptés à votre recherche</h2>
            <p className="mt-4 text-lg text-slate-600">Peu importe la nature de votre projet académique, nous avons le workflow qu&apos;il vous faut.</p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: <BookOpen className="w-8 h-8 text-blue-600" />, title: "Rapport de stage", desc: "Traitez les données de vos missions professionnelles (Licence/Master 1)." },
              { icon: <GraduationCap className="w-8 h-8 text-indigo-600" />, title: "Mémoire de fin d&apos;étude", desc: "Produisez des statistiques fiables pour soutenir votre recherche (Master 2)." },
              { icon: <Microscope className="w-8 h-8 text-violet-600" />, title: "Article scientifique", desc: "Réalisez des tests complexes (ANOVA, Chi2) pour vos publications." }
            ].map((work, i) => (
              <motion.div key={i} variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group">
                <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-100 transition-all">
                  {work.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{work.title}</h3>
                <p className="text-slate-600 leading-relaxed">{work.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Fonctionnalités principales */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-6">Un workflow de A à Z</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                De la conception de votre questionnaire jusqu&apos;à l&apos;export final de vos résultats dans un format prêt à être intégré à votre document Word.
              </p>
              <div className="space-y-6">
                {[
                  { icon: <FileText className="w-6 h-6 text-emerald-500" />, title: "Création de Questionnaire", desc: "Import Excel ou builder dynamique intégré." },
                  { icon: <Database className="w-6 h-6 text-blue-500" />, title: "Collecte & Simulation", desc: "Importez vos données ou générez un jeu simulé basé sur vos hypothèses." },
                  { icon: <BarChart3 className="w-6 h-6 text-indigo-500" />, title: "Analyse Intelligente", desc: "Statistiques descriptives, croisées et tests d&apos;hypothèses avec interprétation." },
                  { icon: <Download className="w-6 h-6 text-rose-500" />, title: "Export Professionnel", desc: "Téléchargez vos résultats complets en PDF, Word ou Excel." }
                ].map((feature, i) => (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    key={i}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 mt-1 bg-slate-50 p-2 rounded-lg border border-slate-100">{feature.icon}</div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-slate-900">{feature.title}</h4>
                      <p className="text-slate-600">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                 <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Dashboard preview"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-16 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Étudiants accompagnés", value: "+1000" },
              { label: "Projets finalisés", value: "850" },
              { label: "Universités partenaires", value: "25" },
              { label: "Tests statistiques", value: "15+" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
              >
                <span className="text-4xl md:text-5xl font-extrabold mb-2 text-blue-200">{stat.value}</span>
                <span className="text-slate-300 font-medium">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Ils ont validé avec brio</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah M.", role: "Master 2 Marketing", univ: "Université de Douala", quote: "Les interprétations automatiques du Chi2 m&apos;ont sauvé la vie. Mon jury a adoré la clarté de mes graphiques." },
              { name: "Marc K.", role: "Licence 3 RH", univ: "Université de Yaoundé", quote: "La simulation intelligente m&apos;a permis de tester mon questionnaire avant même de le diffuser sur le terrain." },
              { name: "Dr. Ndongo", role: "Doctorant", univ: "Université de Dschang", quote: "Un outil puissant et incroyablement intuitif. Fini les usines à gaz comme SPSS pour des analyses standards." }
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative"
              >
                <div className="flex text-amber-400 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-slate-700 italic mb-6 leading-relaxed">&quot;{t.quote}&quot;</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold mr-4">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{t.name}</h4>
                    <span className="text-sm text-slate-500">{t.role} - {t.univ}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Prêt à sublimer vos recherches ?</h2>
              <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">Rejoignez des centaines d&apos;étudiants qui utilisent DataAcademia pour gagner un temps précieux et obtenir des résultats irréprochables.</p>
              <Link
                href="/auth"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-blue-700 bg-white hover:bg-slate-50 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                Créer un compte gratuit
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
