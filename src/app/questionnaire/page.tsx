import Link from "next/link";

export default function QuestionnairePage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 w-full">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900">Gestion du Questionnaire</h2>
        <p className="mt-4 text-lg text-gray-500">
          Avez-vous déjà un questionnaire ou souhaitez-vous en créer un ?
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center flex flex-col items-center">
          <div className="h-16 w-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Option 1 : J&apos;ai déjà un questionnaire</h3>
          <p className="text-gray-500 mb-6 flex-1">Importez votre questionnaire existant. Vous pouvez télécharger notre template Excel pour vous assurer que le format est correct.</p>
          
          <div className="w-full space-y-3">
            <button className="w-full inline-flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Télécharger le template Excel
            </button>
            <button className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Importer mon fichier (Excel)
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center flex flex-col items-center">
          <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Option 2 : Je veux créer mon questionnaire</h3>
          <p className="text-gray-500 mb-6 flex-1">Utilisez notre builder intégré pour générer votre questionnaire étape par étape, avec l&apos;aide de nos suggestions adaptées à votre domaine.</p>
          
          <div className="w-full mt-auto">
            <button className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Ouvrir le Builder de Questionnaire
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-between">
        <Link
          href="/infos-projet"
          className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Retour
        </Link>
        <Link
          href="/parametres"
          className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Continuer vers Paramètres
        </Link>
      </div>
    </div>
  );
}
