import DadosAPINegociacao from "../interfaces/DadosAPINegociacao.js";
import Negociacao from "../models/Negociacao.js";

export default class NegociacoesService{
    public static obterNegociacoes(): Promise<Negociacao[]> {
        return fetch('http://localhost:8080/dados').
        then((res) => res.json()).
        then((dados: DadosAPINegociacao[]) => {
            return dados.map((dado)=>{
                return new Negociacao(new Date(), dado.vezes, dado.montante);
            })
        });
    }
}