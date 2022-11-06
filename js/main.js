function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="assets/icon-${player1}.svg" alt="Bandeira ${player1}" />
      <strong>${hour}</strong>
      <img src="assets/icon-${player2}.svg" alt="Bandeira ${player2}" />
    </li>
  `;
}

let delay = -0.3;
function createCard(date, day, games) {
  delay = delay + 0.3;
  return `
    <div class="card" styles="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `;
}

document.querySelector("#app").innerHTML = `
  <header>
    <img src="assets/header.svg" alt="Logo da NLW" />
  </header>
  <main id="cards">
  ${createCard("24/11", "quinta",
  createGame("suica", "07:00", "camaroes") +
  createGame("uruguai", "10:00", "coreadosul") +
  createGame("portugal", "13:00", "gana") +
  createGame("brasil", "16:00", "servia")
  )}

  ${createCard("28/11", "segunda",
  createGame("camaroes", "07:00", "servia") +
  createGame("coreadosul", "10:00", "gana") +
  createGame("brasil", "13:00", "suica") +
  createGame("portugal", "16:00", "uruguai")
  )}

  ${createCard("02/12", "sexta",
  createGame("coreadosul", "07:00", "portugal") +
  createGame("gana", "10:00", "uruguai") +
  createGame("servia", "13:00", "suica") +
  createGame("camaroes", "16:00", "brasil")
  )}
  </main>
`;
