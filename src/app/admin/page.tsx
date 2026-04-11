"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Users, Activity, LogIn, Mail, GraduationCap, Building, User } from "lucide-react";

type UserData = {
  id: string;
  email: string;
  nom: string | null;
  niveau: string | null;
  universite: string | null;
  role: string;
  createdAt: string;
  connections: { timestamp: string }[];
  _count: { connections: number; projects: number };
};

export default function AdminDashboard() {
  const [users, setUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/admin/users");
        if (res.ok) {
          const data = await res.json();
          setUsers(data);
        }
      } catch (error) {
        console.error("Failed to fetch users", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 w-full z-10 relative">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h2 className="text-3xl font-extrabold leading-7 text-slate-900 tracking-tight">
          Dashboard Administrateur
        </h2>
        <p className="mt-2 text-base text-slate-500">
          Gérez les utilisateurs et suivez l&apos;activité de la plateforme.
        </p>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mr-4">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Total Utilisateurs</p>
            <p className="text-2xl font-bold text-slate-900">{users.length}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center">
          <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mr-4">
            <Activity className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Projets Créés</p>
            <p className="text-2xl font-bold text-slate-900">
              {users.reduce((acc, user) => acc + user._count.projects, 0)}
            </p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mr-4">
            <LogIn className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Connexions Totales</p>
            <p className="text-2xl font-bold text-slate-900">
              {users.reduce((acc, user) => acc + user._count.connections, 0)}
            </p>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white shadow-xl rounded-2xl border border-slate-100 overflow-hidden"
      >
        <div className="px-6 py-5 border-b border-slate-200 flex justify-between items-center bg-slate-50">
          <h3 className="text-lg font-bold text-slate-900">Utilisateurs inscrits</h3>
        </div>

        {loading ? (
          <div className="p-8 text-center text-slate-500">Chargement des données...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-white">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Étudiant</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Profil Académique</th>
                  <th className="px-6 py-4 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider">Activité</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Dernière connexion</th>
                  <th className="px-6 py-4 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-100">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                          {user.nom ? user.nom.charAt(0).toUpperCase() : <User className="w-5 h-5"/>}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-semibold text-slate-900">{user.nom || "Non renseigné"}</div>
                          <div className="text-sm text-slate-500 flex items-center"><Mail className="w-3 h-3 mr-1"/> {user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-slate-900 flex items-center"><GraduationCap className="w-4 h-4 mr-2 text-slate-400"/> {user.niveau || "N/A"}</div>
                      <div className="text-sm text-slate-500 flex items-center"><Building className="w-4 h-4 mr-2 text-slate-400"/> {user.universite || "N/A"}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800 mb-1">
                        {user._count.projects} projets
                      </span>
                      <br/>
                      <span className="text-xs text-slate-500">{user._count.connections} connexions</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                      {user.connections[0] ? new Date(user.connections[0].timestamp).toLocaleString('fr-FR') : "Jamais"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 mr-3">Détails</button>
                      <button className="text-rose-600 hover:text-rose-900">Bloquer</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </motion.div>
    </div>
  );
}
