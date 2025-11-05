declare module "bootstrap/dist/js/bootstrap.bundle.min.js";

declare module 'bootstrap' {
    export class Offcanvas {
        constructor(element: Element, options?: any);
        show(): void;
        hide(): void;
        static getInstance(element: Element): Offcanvas | null;
    }
}
