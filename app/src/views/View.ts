export default abstract class View<T>{
    protected elemento: HTMLElement;
    private escapar: boolean;

    constructor(seletor: string, escapar?: boolean){
        if(document.querySelector(seletor))
            this.elemento = document.querySelector(seletor) as HTMLElement;
        else throw Error(`Seletor ${seletor} não existe no DOM.`);
        this.escapar = escapar || false; // = if(escapar){this.escapar = escapar;}else {this.escapar = false;}
    }

    protected abstract template(model: T): string;

    public update(model: T): void{
        const t1 = performance.now();
        if(this.escapar) 
            this.elemento.innerHTML = this.template(model).
                replace(/<script>[\s\S]*?<\/script>/,'');
        else 
            this.elemento.innerHTML = this.template(model);
        const t2 = performance.now();
        console.log(`Tempo de execução do método update ${(t2-t1)/1000} segundos.`)
    }
}