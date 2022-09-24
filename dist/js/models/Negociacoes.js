export default class Negociacoes {
    constructor() {
        this.negociacioes = []; // or Array<Negociacao>
    }
    adiciona(negociacao) {
        this.negociacioes.push(negociacao);
    }
    lista() {
        return this.negociacioes;
    }
}
