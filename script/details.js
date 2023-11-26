const apiUrl = "https://botafogo-atletas.mange.li";

function fetchPlayerDetails(playerId) {
    return fetch(`${apiUrl}/${playerId}`)
        .then(response => response.json())
        .catch(error => {
            console.error("Erro ao obter dados:", error);
            return null;
        });
}

function displayPlayerDetails(player) {
    const detailsContainer = document.getElementById("playerDetails");
    detailsContainer.innerHTML = `
        <h2>${player.nome}</h2>
        <img src="${player.imagem}" alt="${player.nome}">
        <p>Altura: ${player.altura} cm</p>
        <p>Nascimento: ${player.nascimento}</p>
        <p>${player.descricao}</p>
    `;
}


const urlParams = new URLSearchParams(window.location.search);
const playerId = urlParams.get('id');

if (playerId) {
    fetchPlayerDetails(playerId)
        .then(playerDetails => {
            if (playerDetails) {
               
                displayPlayerDetails(playerDetails);
            } else {
               
                const detailsContainer = document.getElementById("playerDetails");
                detailsContainer.innerHTML = "<p>Detalhes do jogador não encontrados.</p>";
            }
        });
} else {
    
    window.location.href = 'jogadores.html';
}


function voltarParaIndex() {
    window.history.back(); 
}
