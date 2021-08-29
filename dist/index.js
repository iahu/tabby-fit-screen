"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let MyModule = class MyModule {
    constructor() {
        const storeageKey = "fitScreen.lastWindowSize";
        const { innerHeight, outerHeight } = window;
        const withNativeFrame = innerHeight !== outerHeight;
        if (withNativeFrame)
            return;
        document.addEventListener("dblclick", (e) => {
            const { target } = e;
            if (target instanceof HTMLElement &&
                target.matches(".tab-bar .drag-space")) {
                const { availWidth, availHeight } = window.screen;
                const { outerWidth, outerHeight } = window;
                if (availWidth === outerWidth && outerHeight == outerHeight) {
                    const lastWindow = sessionStorage.getItem(storeageKey);
                    if (lastWindow) {
                        const { width, height } = JSON.parse(lastWindow);
                        window.resizeTo(width, height);
                    }
                }
                else {
                    window.resizeTo(availWidth, availHeight);
                    sessionStorage.setItem(storeageKey, JSON.stringify({
                        width: outerWidth,
                        height: outerHeight,
                    }));
                }
            }
        });
    }
};
MyModule = __decorate([
    (0, core_1.NgModule)()
], MyModule);
exports.default = MyModule;
