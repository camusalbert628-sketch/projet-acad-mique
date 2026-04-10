"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, User, ArrowRight, GraduationCap, Building } from "lucide-react";
import { signIn } from "next-auth/react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/type-travail" });
  };

  return (
    <div className="flex-1 flex flex-col justify-center py-16 sm:px-6 lg:px-8 relative min-h-[calc(100vh-80px)]">
      <div className="absolute inset-0 bg-slate-50 -z-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sm:mx-auto sm:w-full sm:max-w-md z-10"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            {isLogin ? "Content de vous revoir !" : "Rejoignez DataAcademia"}
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            {isLogin ? "Accédez à votre espace d&apos;analyse" : "Créez votre compte étudiant pour commencer"}
          </p>
        </div>

        <div className="bg-white py-8 px-4 shadow-2xl border border-slate-100 sm:rounded-2xl sm:px-10">

          {/* Social Auth */}
          <div className="mb-6">
            <button
              onClick={handleGoogleSignIn}
              type="button"
              className="w-full flex justify-center items-center py-3 px-4 border border-slate-300 rounded-xl shadow-sm bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Se connecter avec Google
            </button>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-slate-500">Ou avec votre email</span>
            </div>
          </div>

          <form className="space-y-5">
            <AnimatePresence mode="wait">
              {!isLogin && (
                <motion.div
                  key="signup-fields"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-5"
                >
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Nom complet</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-slate-400" />
                      </div>
                      <input type="text" className="pl-10 appearance-none block w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all" placeholder="Jean Dupont" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Niveau d&apos;étude</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <GraduationCap className="h-5 w-5 text-slate-400" />
                      </div>
                      <select className="pl-10 appearance-none block w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all text-slate-700">
                        <option value="">Sélectionnez votre niveau</option>
                        <option value="L1">Licence 1</option>
                        <option value="L2">Licence 2</option>
                        <option value="L3">Licence 3</option>
                        <option value="M1">Master 1</option>
                        <option value="M2">Master 2</option>
                        <option value="Doctorat">Doctorat</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Université / Établissement</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Building className="h-5 w-5 text-slate-400" />
                      </div>
                      <input type="text" className="pl-10 appearance-none block w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all" placeholder="Ex: Université de Douala" />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400" />
                </div>
                <input type="email" required className="pl-10 appearance-none block w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all" placeholder="vous@exemple.com" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Mot de passe</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400" />
                </div>
                <input type="password" required className="pl-10 appearance-none block w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all" placeholder="••••••••" />
              </div>
            </div>

            {isLogin && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input id="remember-me" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded" />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-700">Se souvenir de moi</label>
                </div>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-blue-600 hover:text-blue-500">Mot de passe oublié ?</a>
                </div>
              </div>
            )}

            <button type="button" onClick={() => window.location.href = '/type-travail'} className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-md text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all hover:-translate-y-0.5">
              {isLogin ? "Se connecter" : "Créer mon compte"} <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-slate-600">
              {isLogin ? "Vous n&apos;avez pas de compte ?" : "Vous avez déjà un compte ?"}
              <button onClick={() => setIsLogin(!isLogin)} className="ml-1 font-bold text-blue-600 hover:text-blue-500">
                {isLogin ? "S&apos;inscrire" : "Se connecter"}
              </button>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
