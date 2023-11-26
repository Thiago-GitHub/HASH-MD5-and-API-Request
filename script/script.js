/*Querido professor:
Quando eu escrevi este código, apenas Deus e eu sabíamos como ele funcionava.
Agora, apenas Deus sabe!
Portanto, se você estiver tentando melhorar esta rotina porque
está falhando e "com certeza está",
por favor, aumente este contador
como um aviso para a próxima
pessoa
total_horas_gastas_aqui: 2h */


const apiUrl = "https://botafogo-atletas.mange.li";

function fetchPlayerDetails(endpoint) {
    return fetch(`${apiUrl}/${endpoint}`)
        .then(response => response.json())
        .catch(error => {
            console.error("Erro ao obter dados:", error);
            return null;
        });
}

function displayPlayerDetails(players) {
    const playerContainer = document.getElementById("playerDetails");
    playerContainer.innerHTML = '';

    players.forEach(player => {
        const card = createPlayerCard(player);
        card.addEventListener("click", () => redirectToDetailsPage(player.id));
        playerContainer.appendChild(card);
    });
}

function createPlayerCard(player) {
    const card = document.createElement("div");
    card.className = "player-card";
    card.innerHTML = `
        <img src="${player.imagem}" alt="${player.nome}">
        <h2>${player.nome}</h2>

    `;
    return card;
}

function redirectToDetailsPage(playerId) {
    window.location.href = `detalhes.html?id=${playerId}`;
}

function filtrarAtletas(filtro) {
    const endpoint = filtro === 'masculino' ? 'masculino' : (filtro === 'feminino' ? 'feminino' : 'all');
    fetchPlayerDetails(endpoint)
        .then(playerDetails => {
            if (playerDetails) {
                displayPlayerDetails(playerDetails);
            }
        });
}

function loadDefaultCategory() {
    filtrarAtletas('all');
}

window.onload = loadDefaultCategory;
