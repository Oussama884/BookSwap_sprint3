
let recherche = document.getElementById("recherche");
let demandes = document.getElementById("demande");

let resultat = [];

fetch("http://127.0.0.1:8000/api/v1/exchange-requests?page=1")

.then((response) => response.json())

.then((data) => {

    // Fonction affichage
    function afficherDemandes() {

        demandes.innerHTML = "";

        resultat.forEach((demande) => {

            demandes.innerHTML += `
                <div class="flex justify-between items-center mb-4">
                    <div class="bg-white rounded-xl shadow p-5">

                        <h2 class="text-lg font-bold mb-2">
                            ${demande.book.title}
                        </h2>

                        <img
                            src="http://127.0.0.1:8000${demande.book.image_url}"
                            class="w-full h-48 object-contain mb-3"
                        >

                        <p><strong>Auteur :</strong> ${demande.book.author}</p>
                        <p><strong>Propriétaire :</strong> ${demande.owner.name}</p>
                        <p><strong>Type :</strong> ${demande.exchange_type}</p>
                        <p><strong>Statut :</strong> ${demande.status}</p>
                        <p><strong>Nombre des offres :</strong> ${demande.offers_count}</p>
                        <p><strong>Date :</strong> ${demande.created_at}</p>

                        <hr class="my-3">

                    </div>
                </div>
            `;
        });

        if (resultat.length === 0) {
            demandes.innerHTML = `
                <p class="text-center text-gray-500">
                    Aucune demande trouvée.
                </p>
            `;
        }
    }

    // Affichage initial
    resultat = data.data;
    afficherDemandes();

    // Recherche
    recherche.addEventListener("input", () => {

        let mot = recherche.value.toLowerCase().trim();

        resultat = data.data.filter((demande) => {

            return demande.book.title.toLowerCase().includes(mot) ||
                   demande.owner.name.toLowerCase().includes(mot);

        });

        afficherDemandes();

    });

})

.catch((error) => {
    console.log("Erreur :", error);
});
