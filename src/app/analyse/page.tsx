import Link from "next/link";

export default function AnalysePage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8 w-full">
      <div className="md:flex md:items-center md:justify-between mb-8">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Configuration de l&apos;analyse
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Choisissez comment vous souhaitez analyser et visualiser vos données.
          </p>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg border border-gray-200">
        <div className="px-4 py-5 sm:p-6 space-y-8">

          <fieldset>
            <legend className="text-base font-medium text-gray-900">Format des résultats</legend>
            <div className="mt-4 space-y-4">
              <div className="flex items-center">
                <input id="format-tableaux" name="format" type="radio" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300" />
                <label htmlFor="format-tableaux" className="ml-3 block text-sm font-medium text-gray-700">Tableaux statistiques seulement</label>
              </div>
              <div className="flex items-center">
                <input id="format-graphiques" name="format" type="radio" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300" />
                <label htmlFor="format-graphiques" className="ml-3 block text-sm font-medium text-gray-700">Graphiques seulement</label>
              </div>
              <div className="flex items-center">
                <input id="format-mixte" name="format" type="radio" defaultChecked className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300" />
                <label htmlFor="format-mixte" className="ml-3 block text-sm font-medium text-gray-700">Tableaux + Graphiques</label>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-base font-medium text-gray-900">Niveau d&apos;analyse</legend>
            <div className="mt-4 space-y-4">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="niveau-descriptif" name="niveau-descriptif" type="checkbox" defaultChecked className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded" />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="niveau-descriptif" className="font-medium text-gray-700">Analyse descriptive simple</label>
                  <p className="text-gray-500">Fréquences, moyennes, écart-types.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="niveau-avance" name="niveau-avance" type="checkbox" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded" />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="niveau-avance" className="font-medium text-gray-700">Analyse croisée avec interprétation</label>
                  <p className="text-gray-500">Croisement de variables avec suggestions automatiques d&apos;interprétation.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="niveau-tests" name="niveau-tests" type="checkbox" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded" />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="niveau-tests" className="font-medium text-gray-700">Tests statistiques</label>
                  <p className="text-gray-500">Test du Chi-2, Corrélations de Pearson/Spearman, ANOVA.</p>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </div>

      <div className="mt-8 flex justify-between">
        <Link
          href="/collecte"
          className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Retour
        </Link>
        <Link
          href="/dashboard"
          className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Générer les résultats
        </Link>
      </div>
    </div>
  );
}
