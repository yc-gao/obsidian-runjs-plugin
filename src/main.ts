import { Plugin } from 'obsidian';

export default class Main extends Plugin {
    async onload() {
        console.log('Loading plugin: ' + this.manifest.name);

        this.registerMarkdownCodeBlockProcessor('runjs', (source, el, ctx) => {
            this.renderJs(source, el);
        });
    }

    async renderJs(source: string, el: HTMLElement) {
        (0, eval)(source);
    }

    onunload() {
        console.log('Unloading plugin: ' + this.manifest.name);
    }
}
