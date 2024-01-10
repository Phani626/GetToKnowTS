"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function AccessorDecorator(target, name, descriptor) {
    console.log("Accessor Decorator ----------------");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
class DecoratorsAc {
    constructor(p) {
        this._product = p;
    }
    set setProduct(val) {
        this._product = val;
    }
    get getProduct() {
        return this._product;
    }
}
__decorate([
    AccessorDecorator
], DecoratorsAc.prototype, "setProduct", null);
__decorate([
    AccessorDecorator
], DecoratorsAc.prototype, "getProduct", null);
