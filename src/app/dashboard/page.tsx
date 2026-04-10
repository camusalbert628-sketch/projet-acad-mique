import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 w-full">
      <div className="md:flex md:items-center md:justify-between mb-8">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Dashboard des Résultats
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Visualisation de vos données et suggestions d&apos;interprétation.
          </p>
        </div>
        <div className="mt-4 flex md:mt-0 md:ml-4">
          <Link
            href="/export"
            className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Aller à l&apos;Export
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Résumé Exécutif */}
        <div className="col-span-1 lg:col-span-3 bg-white shadow rounded-lg border border-gray-200">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Résumé exécutif automatique</h3>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="text-sm text-blue-700">
                L&apos;analyse porte sur un échantillon de 150 répondants. La majorité (65%) se déclare satisfaite. Une corrélation positive forte (r=0.78, p&lt;0.01) est observée entre la variable X et la variable Y.
              </p>
            </div>
          </div>
        </div>

        {/* Visualisations Placeholder */}
        <div className="col-span-1 lg:col-span-2 space-y-6">
          <div className="bg-white shadow rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Graphique: Répartition de la population</h3>
            <div className="h-64 bg-gray-100 rounded flex items-center justify-center border-2 border-dashed border-gray-300">
              <span className="text-gray-500">Espace pour Graphique Circulaire (Pie Chart)</span>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Graphique: Analyse Croisée</h3>
            <div className="h-64 bg-gray-100 rounded flex items-center justify-center border-2 border-dashed border-gray-300">
              <span className="text-gray-500">Espace pour Histogramme Groupé (Bar Chart)</span>
            </div>
          </div>
        </div>

        {/* Suggestions d'interprétation et Tableaux */}
        <div className="col-span-1 space-y-6">
          <div className="bg-white shadow rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Suggestions d&apos;interprétation</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Les résultats valident l&apos;Hypothèse 1.
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">!</span>
                L&apos;Hypothèse 2 est partiellement rejetée au seuil de 5%.
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">ℹ</span>
                Notez la concentration des réponses dans la tranche d&apos;âge 25-34 ans.
              </li>
            </ul>
          </div>

          <div className="bg-white shadow rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Tableau Statistique (Extrait)</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Catégorie</th>
                    <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Effectif</th>
                    <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">%</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">Groupe A</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500 text-right">80</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500 text-right">53.3%</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">Groupe B</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500 text-right">70</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500 text-right">46.7%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
