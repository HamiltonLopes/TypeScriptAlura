var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import Negociacao from "../models/Negociacao.js";
import Negociacoes from "../models/Negociacoes.js";
import { DiasDaSemana } from "../enums/Dias-da-semana.js";
import NegociacoesView from "../views/Negociacoes-view.js";
import MensagemView from "../views/Mensagem-view.js";
import logarTempoDeExecucao from "../decorators/Logar-tempo-de-execucao.js";
export default class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.mensagemView = new MensagemView('#mensagemView');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.isDiaUtil(negociacao.data)) {
            this.mensagemView.update("Apenas negociações em dias úteis serão aceitas.");
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.atualizaView();
        this.limparFormulario();
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    atualizaView() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update("Negociação adicionada com sucesso!");
    }
    isDiaUtil(data) {
        return data.getDay() > DiasDaSemana.DOMINGO
            && data.getDay() < DiasDaSemana.SABADO;
    }
}
__decorate([
    logarTempoDeExecucao()
], NegociacaoController.prototype, "adiciona", null);
