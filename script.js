// Contador do carrinho
let total = 0;
const contador = document.getElementById("contador");

// Pega todos os botões dos produtos
const botoes = document.querySelectorAll(".produto button");

botoes.forEach(function (botao) {
  botao.addEventListener("click", function () {
    const produto = botao.closest(".produto");

    if (botao.dataset.acao === "comprar") {
      total = total + 1;
      contador.textContent = total;
    }

    if (botao.dataset.acao === "detalhes") {
      const detalhes = produto.querySelector(".detalhes");
      detalhes.hidden = !detalhes.hidden;

      if (detalhes.hidden) {
        botao.textContent = "Ver detalhes";
      } else {
        botao.textContent = "Fechar";
      }
    }
  });
});