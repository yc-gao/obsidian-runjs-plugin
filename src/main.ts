import { Plugin } from 'obsidian';

import * as echarts from 'echarts';

export default class Main extends Plugin {
    echarts: typeof echarts;

    constructor(app: any, manifest: any) {
        super(app, manifest);
        this.echarts = echarts;
    }

    async onload() {
        console.log('Loading plugin: ' + this.manifest.name);

        this.registerMarkdownCodeBlockProcessor('runjs', async (source, el, ctx) => {
            await this.renderJs(source, el);
        });
    }

    async renderJs(source: string, el: HTMLElement): Promise<void> {
        eval(source);
    }

    onunload() {
        console.log('Unloading plugin: ' + this.manifest.name);
    }
}
