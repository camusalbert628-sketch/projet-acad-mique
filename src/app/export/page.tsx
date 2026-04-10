import Link from "next/link";

export default function ExportPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8 w-full">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900">Export et Paiement</h2>
        <p className="mt-4 text-lg text-gray-500">
          Choisissez votre format d&apos;export et procédez au paiement pour télécharger vos résultats complets.
        </p>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg border border-gray-200">
        <div className="px-4 py-5 sm:p-6 space-y-8">

          {/* Format d'export */}
          <fieldset>
            <legend className="text-base font-medium text-gray-900">Format d&apos;export</legend>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <label className="relative border p-4 flex cursor-pointer rounded-lg hover:bg-gray-50 focus-within:ring-2 focus-within:ring-blue-500">
                <input type="radio" name="format" value="pdf" className="sr-only" />
                <span className="flex-1">
                  <span className="block text-sm font-medium text-gray-900">Rapport PDF</span>
                  <span className="block text-sm text-gray-500">Prêt à imprimer</span>
                </span>
                <span className="mt-auto text-sm font-medium text-gray-900"></span>
              </label>

              <label className="relative border p-4 flex cursor-pointer rounded-lg hover:bg-gray-50 focus-within:ring-2 focus-within:ring-blue-500 border-blue-500 ring-1 ring-blue-500 bg-blue-50">
                <input type="radio" name="format" value="word" className="sr-only" defaultChecked />
                <span className="flex-1">
                  <span className="block text-sm font-medium text-blue-900">Document Word</span>
                  <span className="block text-sm text-blue-700">Modifiable</span>
                </span>
              </label>

              <label className="relative border p-4 flex cursor-pointer rounded-lg hover:bg-gray-50 focus-within:ring-2 focus-within:ring-blue-500">
                <input type="radio" name="format" value="excel" className="sr-only" />
                <span className="flex-1">
                  <span className="block text-sm font-medium text-gray-900">Fichier Excel</span>
                  <span className="block text-sm text-gray-500">Données brutes</span>
                </span>
              </label>
            </div>
          </fieldset>

          {/* Moyen de paiement */}
          <fieldset className="pt-6 border-t border-gray-200">
            <legend className="text-base font-medium text-gray-900">Moyen de paiement</legend>
            <div className="mt-4 space-y-4">
              <div className="flex items-center">
                <input id="payment-card" name="payment_method" type="radio" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300" />
                <label htmlFor="payment-card" className="ml-3 block text-sm font-medium text-gray-700">Carte Bancaire</label>
              </div>
              <div className="flex items-center">
                <input id="payment-mobile" name="payment_method" type="radio" defaultChecked className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300" />
                <label htmlFor="payment-mobile" className="ml-3 block text-sm font-medium text-gray-700">Mobile Money (Orange, MTN...)</label>
              </div>
              <div className="flex items-center">
                <input id="payment-transfer" name="payment_method" type="radio" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300" />
                <label htmlFor="payment-transfer" className="ml-3 block text-sm font-medium text-gray-700">Virement Bancaire</label>
              </div>
            </div>
          </fieldset>

          {/* Résumé de la commande */}
          <div className="pt-6 border-t border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Total à payer</h3>
            <p className="mt-2 text-3xl font-extrabold text-gray-900">15 000 FCFA</p>
          </div>

        </div>
      </div>

      <div className="mt-8 flex justify-between">
        <Link
          href="/dashboard"
          className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Retour au Dashboard
        </Link>
        <button
          type="button"
          className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Payer et Télécharger
        </button>
      </div>
    </div>
  );
}
