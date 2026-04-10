import Link from "next/link";

export default function CollectePage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 w-full">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900">Collecte des Réponses</h2>
        <p className="mt-4 text-lg text-gray-500">
          Importez vos données collectées ou laissez-nous simuler des réponses pour votre démonstration.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Option 1: Import */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center flex flex-col items-center">
          <div className="h-16 w-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">J&apos;ai mes données</h3>
          <p className="text-gray-500 mb-6 flex-1">Importez votre fichier Excel ou CSV contenant les réponses à votre questionnaire.</p>

          <div className="w-full mt-auto">
            <label className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 cursor-pointer">
              <span>Choisir un fichier (Excel/CSV)</span>
              <input type="file" className="sr-only" accept=".xlsx,.xls,.csv" />
            </label>
            <p className="mt-2 text-xs text-gray-500">Max 10MB.</p>
          </div>
        </div>

        {/* Option 2: Simulation */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center flex flex-col items-center">
          <div className="h-16 w-16 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Générer des données</h3>
          <p className="text-gray-500 mb-6 flex-1">Nous simulons un jeu de données réaliste basé sur vos hypothèses et paramètres statistiques pour vous permettre de tester les analyses.</p>

          <div className="w-full mt-auto">
            <button className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
              Lancer la simulation
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-between">
        <Link
          href="/parametres"
          className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Retour
        </Link>
        <Link
          href="/analyse"
          className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Passer à l&apos;analyse
        </Link>
      </div>
    </div>
  );
}
