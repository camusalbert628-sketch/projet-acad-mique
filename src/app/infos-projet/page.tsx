import Link from "next/link";

export default function InfosProjetPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8 w-full">
      <div className="md:flex md:items-center md:justify-between mb-8">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Informations du projet
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Détaillez le cadre de votre recherche pour personnaliser l&apos;analyse.
          </p>
        </div>
      </div>

      <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6 border border-gray-200">
        <form className="space-y-6">
          <div>
            <label htmlFor="theme" className="block text-sm font-medium text-gray-700">
              Thème / Sujet du travail
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="theme"
                id="theme"
                className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                placeholder="Ex: L'impact de l'IA sur le marketing digital"
              />
            </div>
          </div>

          <div>
            <label htmlFor="objectifs" className="block text-sm font-medium text-gray-700">
              Objectifs de la recherche
            </label>
            <div className="mt-1">
              <textarea
                id="objectifs"
                name="objectifs"
                rows={3}
                className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
                placeholder="Quels sont les buts principaux de votre étude ?"
              />
            </div>
          </div>

          <div>
            <label htmlFor="problematique" className="block text-sm font-medium text-gray-700">
              Problématique
            </label>
            <div className="mt-1">
              <textarea
                id="problematique"
                name="problematique"
                rows={3}
                className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
                placeholder="Quelle est la question centrale de votre recherche ?"
              />
            </div>
          </div>

          <div>
            <label htmlFor="hypotheses" className="block text-sm font-medium text-gray-700">
              Hypothèses de recherche
            </label>
            <div className="mt-1">
              <textarea
                id="hypotheses"
                name="hypotheses"
                rows={3}
                className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
                placeholder="Quelles sont vos hypothèses de départ ?"
              />
            </div>
          </div>

          <div>
            <label htmlFor="champ" className="block text-sm font-medium text-gray-700">
              Champ d&apos;étude (Domaine)
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="champ"
                id="champ"
                className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                placeholder="Ex: Marketing, Ressources Humaines, Finance..."
              />
            </div>
          </div>
        </form>
      </div>

      <div className="mt-8 flex justify-between">
        <Link
          href="/type-travail"
          className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Retour
        </Link>
        <Link
          href="/questionnaire"
          className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Sauvegarder et continuer
        </Link>
      </div>
    </div>
  );
}
