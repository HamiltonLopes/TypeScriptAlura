import Negociacao from "../models/Negociacao.js";
import Negociacoes from "../models/Negociacoes.js";
import { DiasDaSemana } from "../enums/Dias-da-semana.js";
import NegociacoesView from "../views/Negociacoes-view.js";
import MensagemView from "../views/Mensagem-view.js";
import logarTempoDeExecucao from "../decorators/Logar-tempo-de-execucao.js";
import inspect from "../decorators/Inspect.js";
import domInjector from "../decorators/Dom-injector.js";
import NegociacoesService from "../services/NegociacoesService.js";

export default class NegociacaoController {

    @domInjector('#data')
    private inputData: HTMLInputElement;
    @domInjector('#quantidade')
    private inputQuantidade: HTMLInputElement;
    @domInjector('#valor')
    private inputValor: HTMLInputElement;

    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');

    constructor(){
        // this.inputData = <HTMLInputElement>document.querySelector('#data'); // ou as HTMLInputElement no fim da atribuição.
        // this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        // this.inputValor = document.querySelector('#valor') as HTMLInputElement;
        this.negociacoesView.update(this.negociacoes);
    }

    @inspect
    @logarTempoDeExecucao(true)
    public adiciona(): void{
        const negociacao: Negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if(!this.isDiaUtil(negociacao.data)){
            this.mensagemView.update("Apenas negociações em dias úteis serão aceitas.");
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.atualizaView();
        this.limparFormulario();
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

    private isDiaUtil(data: Date): boolean{
        return data.getDay() > DiasDaSemana.DOMINGO 
            && data.getDay() < DiasDaSemana.SABADO;
    }

    public importaDados(): void{
        NegociacoesService.obterNegociacoes().
        then((negociacoes) => {
            for(let negociacao of negociacoes){
                this.negociacoes.adiciona(negociacao);
            }
            this.negociacoesView.update(this.negociacoes);
        });
    }
}