"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function PropertyDecorator(target, propertyName) {
    console.log("Property Decorator -----------------");
    console.log(target);
    console.log(propertyName);
}
class DecoratorPro {
    constructor(t, a, p) {
        this._author = a;
        this._price = p;
        this._title = t;
    }
}
__decorate([
    PropertyDecorator
], DecoratorPro.prototype, "_title", void 0);
__decorate([
    PropertyDecorator
], DecoratorPro.prototype, "_author", void 0);
__decorate([
    PropertyDecorator
], DecoratorPro.prototype, "_price", void 0);
