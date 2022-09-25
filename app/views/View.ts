export default abstract class View<T>{
    protected elemento: HTMLElement;
    private escapar = false;

    constructor(seletor: string, escapar?: boolean){
        this.elemento = document.querySelector(seletor);
        this.escapar = escapar;
    }

    protected abstract template(model: T): string;

    public update(model: T): void{
        if(this.escapar) 
            this.elemento.innerHTML = this.template(model).
                replace(/<script>[\s\S]*?<\/script>/,'');
        else 
            this.elemento.innerHTML = this.template(model);
    }
}