var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import inspect from "../decorators/Inspect.js";
import logarTempoDeExecucao from "../decorators/Logar-tempo-de-execucao.js";
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
__decorate([
    logarTempoDeExecucao(true),
    inspect
], View.prototype, "update", null);
