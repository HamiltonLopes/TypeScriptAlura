import Imprimivel from "../interfaces/Imprimivel.js";
import Negociacao from "./Negociacao.js";

export default class Negociacoes implements Imprimivel{
    private negociacioes: Negociacao[] = []; // or Array<Negociacao>

    public adiciona(negociacao: Negociacao){
        this.negociacioes.push(negociacao);
    }

    public lista(): readonly Negociacao[] { // or ReadonlyArray<Negociacao>
        return this.negociacioes;
    }

    public paraTexto(): string{
        return JSON.stringify(this.negociacioes, null, 2);
    }
}   