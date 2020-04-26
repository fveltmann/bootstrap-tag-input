/// <reference types="jquery" />
/// <reference types="bootstrap" />
declare type BootstrapTagInputColors = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
export declare class BootstrapTagInput {
    contextInput: JQuery<HTMLElement>;
    tagInputContainer: JQuery<HTMLElement>;
    tagInput: JQuery<HTMLElement>;
    tagInputColorClass: BootstrapTagInputColors;
    placeholder: string;
    constructor(contextInput: JQuery<HTMLElement>, colorClass?: BootstrapTagInputColors);
    private initHandler;
    private serialize;
    createTag(label: string): void;
}
export {};
//# sourceMappingURL=index.d.ts.map