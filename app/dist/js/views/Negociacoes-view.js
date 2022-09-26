import View from "./View.js";
export default class NegociacoesView extends View {
    template(model) {
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
                    ${model.lista().map(negociacao => `
                            <tr>
                                <td>${this.formatDate(negociacao.data)}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                            </tr>
                            `).join('')}
                </tbody>
            </table>
        `;
    }
    formatDate(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}