export default function logarTempoDeExecucao(emSegundos = false) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${!emSegundos ? t2 - t1 + " milisegundos" : (t2 - t1) / 1000 + " segundos"}.`);
            return retorno;
        };
        return descriptor;
    };
}
//# sourceMappingURL=Logar-tempo-de-execucao.js.map