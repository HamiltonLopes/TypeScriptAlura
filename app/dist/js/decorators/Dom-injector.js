export default function domInjector(seletor) {
    return function (target, propertyKey) {
        let elemento;
        Object.defineProperty(target, propertyKey, {
            get: function () {
                if (!elemento)
                    elemento = document.querySelector(seletor);
                return elemento;
            }
        });
    };
}
