export default class View {
    constructor(seletor, escapar) {
        if (document.querySelector(seletor))
            this.elemento = document.querySelector(seletor);
        else
            throw Error(`Seletor ${seletor} não existe no DOM.`);
        this.escapar = escapar || false;
    }
    update(model) {
        const t1 = performance.now();
        if (this.escapar)
            this.elemento.innerHTML = this.template(model).
                replace(/<script>[\s\S]*?<\/script>/, '');
        else
            this.elemento.innerHTML = this.template(model);
        const t2 = performance.now();
        console.log(`Tempo de execução do método update ${(t2 - t1) / 1000} segundos.`);
    }
}
