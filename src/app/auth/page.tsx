"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, User, ArrowRight, GraduationCap, Building } from "lucide-react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    nom: "",
    niveau: "",
    universite: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    if (isLogin) {
      const res = await signIn("credentials", {
        redirect: false,
        email: formData.email,
        password: formData.password,
      });

      if (res?.error) {
        setError("Email ou mot de passe incorrect");
        setIsLoading(false);
      } else {
        // Redirection is handled properly since middleware protects routes,
        // we can just go to the dashboard which will show proper role views.
        router.push("/etudiant");
      }
    } else {
      try {
        const res = await fetch("/api/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.message || "Erreur lors de l&apos;inscription");
        }

        // Auto login after signup
        await signIn("credentials", {
          redirect: false,
          email: formData.email,
          password: formData.password,
        });

        router.push("/etudiant");
      } catch (err: unknown) {
        if (err instanceof Error) setError(err.message); else setError(String(err));
        setIsLoading(false);
      }
    }
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

          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="bg-rose-50 text-rose-600 p-3 rounded-xl text-sm text-center border border-rose-100">
                {error}
              </div>
            )}

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
                      <input type="text" name="nom" value={formData.nom} onChange={handleChange} required={!isLogin} className="pl-10 appearance-none block w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all" placeholder="Jean Dupont" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Niveau d&apos;étude</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <GraduationCap className="h-5 w-5 text-slate-400" />
                      </div>
                      <select name="niveau" value={formData.niveau} onChange={handleChange} required={!isLogin} className="pl-10 appearance-none block w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all text-slate-700">
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
                      <input type="text" name="universite" value={formData.universite} onChange={handleChange} required={!isLogin} className="pl-10 appearance-none block w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all" placeholder="Ex: Université de Douala" />
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
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="pl-10 appearance-none block w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all" placeholder="vous@exemple.com" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Mot de passe</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400" />
                </div>
                <input type="password" name="password" value={formData.password} onChange={handleChange} required className="pl-10 appearance-none block w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all" placeholder="••••••••" />
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

            <button disabled={isLoading} type="submit" className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-md text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all hover:-translate-y-0.5 disabled:opacity-50">
              {isLoading ? "Veuillez patienter..." : isLogin ? "Se connecter" : "Créer mon compte"} <ArrowRight className="ml-2 w-4 h-4" />
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
