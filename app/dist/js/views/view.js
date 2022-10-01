export default class View {
    constructor(seletor) {
        if (document.querySelector(seletor))
            this.elemento = document.querySelector(seletor);
        else
            throw Error(`Seletor ${seletor} não existe no DOM.`);
    }
    update(model) {
        this.elemento.innerHTML = this.template(model);
    }
}
//# sourceMappingURL=View.js.map