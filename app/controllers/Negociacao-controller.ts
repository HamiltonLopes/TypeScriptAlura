import Negociacao from "../models/Negociacao.js";
import Negociacoes from "../models/Negociacoes.js";
import NegociacoesView from "../views/Negociacoes-view.js";
import MensagemView from "../views/Mensagem-view.js";
import { DiasDaSemana } from "../enums/Dias-da-semana.js";

export default class NegociacaoController {

    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');

    constructor(){
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }

    public adiciona(): void{
        const negociacao: Negociacao = this.criaNegociacao();
        if(!this.isDiaUtil(negociacao.data)){
            this.mensagemView.update("Apenas negociações em dias úteis serão aceitas.");
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.atualizaView();
        this.limparFormulario();
    }

    private criaNegociacao(): Negociacao{
        const exp = /-/g;
        const date = new Date (this.inputData.value.replace(exp, ','));
        return new Negociacao(date, parseInt(this.inputQuantidade.value), parseFloat(this.inputValor.value));
    }

    private limparFormulario(): void{
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView() : void{
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update("Negociação adicionada com sucesso!");
    }

    private isDiaUtil(data: Date) : boolean{
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }
}