export default class Negociacoes {
    constructor() {
        this.negociacioes = [];
    }
    adiciona(negociacao) {
        this.negociacioes.push(negociacao);
    }
    lista() {
        return this.negociacioes;
    }
}
