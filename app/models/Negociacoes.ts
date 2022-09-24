import Negociacao from "./Negociacao.js";

export default class Negociacoes{
    private negociacioes: Negociacao[] = []; // or Array<Negociacao>

    adiciona(negociacao: Negociacao){
        this.negociacioes.push(negociacao);
    }

    lista(): readonly Negociacao[] { // or ReadonlyArray<Negociacao>
        return this.negociacioes;
    }
}