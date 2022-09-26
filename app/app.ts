import NegociacaoController from "./controllers/negociacao-controller.js";
import NegociacoesView from "./views/Negociacoes-view.js";

const controller = new NegociacaoController();
const form = document.querySelector('.form');

if(form){
    form.addEventListener('submit', (e) => { 
        e.preventDefault(); 
        controller.adiciona(); 
    });
}else{
    throw Error(`Erro, não existe um form nessa aplicação.`)
}


