export default class Negociacao {
    constructor(
        private _data: Date,
        private _quantidade: number, 
        private _valor: number
    ){} // or using 'public readonly varName:Type' removing gets.

    get data(): Date{
        return new Date(this._data.getTime());
    }

    get quantidade(): number{
        return this._quantidade;
    }

    get valor(): number{
        return this._valor;
    }

    get volume(): number{
        return this._quantidade * this._valor;
    }
}