import Link from "next/link";

export default function TypeTravailPage() {
  const types = [
    { id: 'rapport', title: 'Rapport de stage', description: 'Licence, Master 1' },
    { id: 'memoire', title: 'Mémoire de fin d\'étude', description: 'Master 2' },
    { id: 'article', title: 'Article scientifique', description: 'Publication, Recherche' },
    { id: 'autre', title: 'Autre', description: 'Précisez votre type de travail' }
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 w-full">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900">Sélectionnez le type de travail</h2>
        <p className="mt-4 text-lg text-gray-500">Choisissez la catégorie qui correspond à votre projet académique.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {types.map((type) => (
          <div key={type.id} className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-blue-500 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500 cursor-pointer">
            <div className="flex-shrink-0">
              <input
                id={type.id}
                name="type-travail"
                type="radio"
                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
            </div>
            <div className="flex-1 min-w-0">
              <label htmlFor={type.id} className="focus:outline-none w-full block cursor-pointer">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-sm font-medium text-gray-900">{type.title}</p>
                <p className="text-sm text-gray-500 truncate">{type.description}</p>
              </label>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-end">
        <Link
          href="/infos-projet"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Suivant
        </Link>
      </div>
    </div>
  );
}
