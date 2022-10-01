import Imprimivel from "../interfaces/Imprimivel.js";

export function imprimir(...args: Imprimivel[]): void{
    for(let objeto of args){
        console.log(objeto.paraTexto());
    }
}