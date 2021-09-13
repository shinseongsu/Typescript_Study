export default abstract class View {
    private container;
    private template;
    private renderTemplate;
    private htmlList;
    constructor(containerId: string, template: string);
    protected updateView(): void;
    protected addHtml(htmlString: string): void;
    protected getHtml(): string;
    protected setTemplateData(key: string, value: string): void;
    private clearHtmlList;
    abstract render(...params: string[]): void;
}
