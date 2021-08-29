import { NgModule } from "@angular/core";

@NgModule()
export default class MyModule {
    constructor() {
        const storeageKey = "fitScreen.lastWindowSize";
        const { innerHeight, outerHeight } = window;
        const withNativeFrame = innerHeight !== outerHeight;
        if (withNativeFrame) return;
        document.addEventListener("dblclick", (e) => {
            const { target } = e;
            if (
                target instanceof HTMLElement &&
                target.matches(".tab-bar .drag-space")
            ) {
                const { availWidth, availHeight } = window.screen;
                const { outerWidth, outerHeight } = window;
                if (availWidth === outerWidth && outerHeight == outerHeight) {
                    const lastWindow = sessionStorage.getItem(storeageKey);
                    if (lastWindow) {
                        const { width, height } = JSON.parse(lastWindow);
                        window.resizeTo(width, height);
                    }
                } else {
                    window.resizeTo(availWidth, availHeight);
                    sessionStorage.setItem(
                        storeageKey,
                        JSON.stringify({
                            width: outerWidth,
                            height: outerHeight,
                        })
                    );
                }
            }
        });
    }
}
