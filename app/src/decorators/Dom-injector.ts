export default function domInjector(seletor: string){
    return function(target: any, propertyKey: string){
        let elemento: HTMLElement; 
        Object.defineProperty(target, propertyKey, 
            {
                get: function() {
                    if(!elemento) elemento = document.querySelector(seletor) as HTMLElement;
                    return elemento;
                }
            });
    }
}