import NegociacaoController from "./controllers/negociacao-controller.js";
const controller = new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        controller.adiciona();
    });
}
else {
    throw Error(`Erro, não existe um form nessa aplicação.`);
}
const botaoImporta = document.querySelector('#botao-importa');
if (botaoImporta) {
    botaoImporta.addEventListener('click', () => {
        controller.importaDados();
    });
}
else {
    throw Error(`Erro, não existe um #botao-importa nessa aplicação.`);
}
//# sourceMappingURL=app.js.map