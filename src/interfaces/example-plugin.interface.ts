export interface IExampleOptions {
    color: string;
    message: string;
}

export interface IExamplePluginFunction {
    (options: IExampleOptions): JQuery;
}

export interface IExamplePlugin extends IExamplePluginFunction, IGlobalOptions<IExampleOptions> { }

declare global {
    export interface JQuery {
        examplePlugin: IExamplePlugin;
    }
}
