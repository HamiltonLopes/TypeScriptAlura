import escapar from "../decorators/Escapar.js";
import Negociacoes from "../models/Negociacoes.js";
import View from "./View.js";

export default class NegociacoesView extends View<Negociacoes>{

    @escapar
    protected template(model: Negociacoes): string{
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                <tbody>
                    ${
                        model.lista().map(negociacao => 
                            `
                            <tr>
                                <td>${this.formatDate(negociacao.data)}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                            </tr>
                            `
                        ).join('')
                    }
                </tbody>
            </table>
        `;
    }

    private formatDate(data: Date): string{
        return new Intl.DateTimeFormat().format(data); //Metodo que retorna a data no formato da localização atual.
    }
}