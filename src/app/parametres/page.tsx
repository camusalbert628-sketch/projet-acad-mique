import Link from "next/link";

export default function ParametresPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8 w-full">
      <div className="md:flex md:items-center md:justify-between mb-8">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Paramètres de l&apos;étude
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Définissez les caractéristiques de votre échantillon et de votre collecte.
          </p>
        </div>
      </div>

      <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6 border border-gray-200">
        <form className="space-y-6">
          <div>
            <label htmlFor="population" className="block text-sm font-medium text-gray-700">
              Population cible
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="population"
                id="population"
                className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                placeholder="Ex: Étudiants en master, Employés de banque..."
              />
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Décrivez les personnes que vous souhaitez interroger.
            </p>
          </div>

          <div>
            <label htmlFor="taille" className="block text-sm font-medium text-gray-700">
              Taille de l&apos;échantillon visée
            </label>
            <div className="mt-1">
              <input
                type="number"
                name="taille"
                id="taille"
                className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                placeholder="Ex: 150"
              />
            </div>
          </div>

          <div>
            <label htmlFor="methode" className="block text-sm font-medium text-gray-700">
              Méthode d&apos;échantillonnage
            </label>
            <div className="mt-1">
              <select
                id="methode"
                name="methode"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md border"
              >
                <option>Aléatoire simple</option>
                <option>Stratifié</option>
                <option>Par quotas</option>
                <option>De convenance</option>
                <option>Boule de neige</option>
                <option>Autre</option>
              </select>
            </div>
          </div>
        </form>
      </div>

      <div className="mt-8 flex justify-between">
        <Link
          href="/questionnaire"
          className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Retour
        </Link>
        <Link
          href="/collecte"
          className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Valider les paramètres
        </Link>
      </div>
    </div>
  );
}
