const projetos = [
  {
    nome: "Sistema IoT",
    descricao: "Projeto de segurança residencial inteligente"
  },
  {
    nome: "Portfólio",
    descricao: "Meu primeiro site pessoal"
  }
];

const container = document.getElementById("lista-projetos");

projetos.forEach(projeto => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <h3>${projeto.nome}</h3>
    <p>${projeto.descricao}</p>
  `;

  container.appendChild(card);
});