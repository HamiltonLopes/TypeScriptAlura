export default class Negociacao {
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    } // or using 'public readonly varName:Type' removing gets.
    get data() {
        return new Date(this._data.getTime());
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
    static criaDe(data, quantidade, valor) {
        const exp = /-/g;
        const date = new Date(data.replace(exp, ','));
        return new Negociacao(date, parseInt(quantidade), parseFloat(valor));
    }
}
