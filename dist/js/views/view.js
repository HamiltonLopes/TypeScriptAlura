export default class View {
    constructor(seletor, escapar) {
        this.escapar = false;
        this.elemento = document.querySelector(seletor);
        this.escapar = escapar;
    }
    update(model) {
        if (this.escapar)
            this.elemento.innerHTML = this.template(model).
                replace(/<script>[\s\S]*?<\/script>/, '');
        else
            this.elemento.innerHTML = this.template(model);
    }
}
