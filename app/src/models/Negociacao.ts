export default class Negociacao {
    constructor(
        private _data: Date,
        private _quantidade: number, 
        private _valor: number
    ){} // or using 'public readonly varName:Type' removing gets.

    public get data(): Date{
        return new Date(this._data.getTime());
    }

    public get quantidade(): number{
        return this._quantidade;
    }

    public get valor(): number{
        return this._valor;
    }

    public get volume(): number{
        return this._quantidade * this._valor;
    }

    public static criaDe(data: string, quantidade: string, valor: string): Negociacao{
        const exp = /-/g;
        const date = new Date (data.replace(exp, ','));
        return new Negociacao(date, parseInt(quantidade), parseFloat(valor));
    }
}