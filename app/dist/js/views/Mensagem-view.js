import View from "./View.js";
export default class MensagemView extends View {
    template(model) {
        return `
            <p class="alert alert-info">
                ${model}
            </p>
        `;
    }
}
//# sourceMappingURL=Mensagem-view.js.map