import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl text-center space-y-8">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          Bienvenue sur <span className="text-blue-600">DataAcademia</span>
        </h1>
        <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
          La plateforme d&apos;analyse de données académiques conçue pour accompagner les étudiants de la Licence 1 au Master 2 dans leurs travaux de recherche.
        </p>

        <section className="py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Travaux Supportés</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Rapport de stage</h3>
              <p className="text-sm text-gray-500">Analysez les données collectées lors de vos immersions professionnelles.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Mémoire</h3>
              <p className="text-sm text-gray-500">Structurez et analysez les résultats de votre recherche de fin d&apos;étude.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Article scientifique</h3>
              <p className="text-sm text-gray-500">Produisez des analyses statistiques robustes pour vos publications.</p>
            </div>
          </div>
        </section>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/auth"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
          >
            Commencer maintenant
          </Link>
          <Link
            href="/type-travail"
            className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
          >
            En savoir plus
          </Link>
        </div>
      </div>
    </div>
  );
}
