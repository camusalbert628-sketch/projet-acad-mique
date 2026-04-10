"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Rocket, Target, Award, ArrowRight, Users, BookOpen, Star, Mail, MapPin, Phone } from "lucide-react";

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
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Students collaborating"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/90 via-white/80 to-white"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-700 font-semibold text-sm mb-6 border border-indigo-200">
              Bienvenue sur Genenzis Academy
            </span>
            <h1 className="text-5xl font-extrabold text-slate-900 sm:text-6xl lg:text-7xl tracking-tight mb-8">
              Transformez votre <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Avenir Digital</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              La plateforme premium pour acquérir les compétences les plus demandées sur le marché. Formez-vous aujourd&apos;hui, excellez demain.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="/auth"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-white bg-indigo-600 hover:bg-indigo-700 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                Commencer maintenant <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="#formations"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-slate-700 bg-white border-2 border-slate-200 hover:border-indigo-300 hover:bg-slate-50 transition-all duration-300"
              >
                Découvrir le catalogue
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Étudiants formés", value: "+500" },
              { label: "Formations certifiantes", value: "15" },
              { label: "Taux de réussite", value: "98%" },
              { label: "Experts formateurs", value: "25" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col"
              >
                <span className="text-4xl md:text-5xl font-extrabold mb-2">{stat.value}</span>
                <span className="text-indigo-200 font-medium">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi Nous Choisir */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Pourquoi choisir Genenzis Academy ?</h2>
            <p className="mt-4 text-lg text-slate-500">Une méthode pédagogique éprouvée pour garantir votre succès.</p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: <Target className="w-10 h-10 text-blue-500" />, title: "Approche Pratique", desc: "Apprenez en réalisant des projets concrets issus du monde professionnel." },
              { icon: <Award className="w-10 h-10 text-indigo-500" />, title: "Certifications Reconnues", desc: "Obtenez des diplômes valorisés par les entreprises technologiques." },
              { icon: <Rocket className="w-10 h-10 text-emerald-500" />, title: "Accompagnement 1-to-1", desc: "Bénéficiez d'un mentorat personnalisé tout au long de votre parcours." }
            ].map((feature, i) => (
              <motion.div key={i} variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-slate-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Formations Populaires */}
      <section id="formations" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Nos formations populaires</h2>
              <p className="mt-4 text-lg text-slate-500">Développez les compétences de demain.</p>
            </div>
            <Link href="#" className="hidden md:flex text-indigo-600 font-semibold hover:text-indigo-800 items-center">
              Voir tout <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", title: "Développement Web Fullstack", level: "Débutant à Avancé", duration: "6 mois" },
              { img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", title: "Data Science & IA", level: "Intermédiaire", duration: "8 mois" },
              { img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", title: "Marketing Digital & SEO", level: "Tous niveaux", duration: "3 mois" }
            ].map((course, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={course.img} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center text-xs text-slate-500 font-medium mb-3 space-x-4">
                    <span className="flex items-center"><Users className="w-4 h-4 mr-1" /> {course.level}</span>
                    <span className="flex items-center"><BookOpen className="w-4 h-4 mr-1" /> {course.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{course.title}</h3>
                  <div className="mt-auto pt-4 border-t border-slate-100">
                    <Link href="#" className="text-indigo-600 font-semibold flex items-center group-hover:text-indigo-800">
                      En savoir plus <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section id="temoignages" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl">Ils ont transformé leur carrière</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-800/80 backdrop-blur-md p-8 rounded-2xl border border-slate-700 relative"
              >
                <div className="flex text-amber-400 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-slate-300 italic mb-6">&quot;Grâce à Genenzis Academy, j&apos;ai pu acquérir les compétences nécessaires pour décrocher mon premier poste de développeur en seulement 6 mois. Une expérience incroyable.&quot;</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center text-xl font-bold mr-4">
                    A{i}
                  </div>
                  <div>
                    <h4 className="font-bold">Alain Dupont</h4>
                    <span className="text-sm text-slate-400">Développeur Front-end</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & CTA Final */}
      <section id="contact" className="py-24 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">

            {/* Contact Info */}
            <div className="bg-indigo-600 p-10 lg:w-1/3 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-4">Prêt à vous lancer ?</h3>
                <p className="text-indigo-200 mb-8">Contactez notre équipe d&apos;admission pour discuter de votre projet de formation.</p>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 mr-4 text-indigo-300" />
                    <span>+237 655 48 76 98</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 mr-4 text-indigo-300" />
                    <span>contact@genenzis.academy</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 mr-4 text-indigo-300" />
                    <span>Douala, Cameroun</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-10 lg:w-2/3">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Envoyez-nous un message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Nom complet</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all bg-slate-50 focus:bg-white" placeholder="Jean Dupont" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all bg-slate-50 focus:bg-white" placeholder="jean@exemple.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all bg-slate-50 focus:bg-white" placeholder="Comment pouvons-nous vous aider ?"></textarea>
                </div>
                <button type="button" className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl">
                  Envoyer le message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
