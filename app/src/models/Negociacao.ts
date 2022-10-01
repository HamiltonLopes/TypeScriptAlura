import { ObjetoModelo } from "../interfaces/ObjetoModelo.js";

export default class Negociacao implements ObjetoModelo<Negociacao> {
    constructor(
        private _data: Date,
        private _quantidade: number, 
        private _valor: number
    ){} // or using 'public readonly varName:Type' removing gets.
    
    public static criaDe(data: string, quantidade: string, valor: string): Negociacao{
        const exp = /-/g;
        const date = new Date (data.replace(exp, ','));
        return new Negociacao(date, parseInt(quantidade), parseFloat(valor));
    }

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

    public paraTexto(): string{
        return `
        Data: ${this.data},
        Valor: ${this.valor},
        Quantidade: ${this.quantidade}`
    }

    public ehIgual(negociacao: Negociacao): boolean{
        return this.data.getDate() === negociacao.data.getDate()
            && this.data.getMonth() === negociacao.data.getMonth()
            && this.data.getFullYear() === negociacao.data.getFullYear()
            && this.valor === negociacao.valor
            && this.quantidade === negociacao.quantidade;
    }
}