export default abstract class View<T>{
    protected elemento: HTMLElement;

    constructor(seletor: string){
        if(document.querySelector(seletor))
            this.elemento = document.querySelector(seletor) as HTMLElement;
        else
            throw Error(`Seletor ${seletor} não existe no DOM.`);
    }

    protected abstract template(model: T): string;

    public update(model: T): void{
        this.elemento.innerHTML = this.template(model);
    }
}