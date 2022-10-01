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
    paraTexto() {
        return JSON.stringify(this.negociacioes, null, 2);
    }
}
//# sourceMappingURL=Negociacoes.js.map