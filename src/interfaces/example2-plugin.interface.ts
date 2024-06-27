export interface IExample2Options {
    color: string;
    message: string;
}

export interface IExample2PluginFunction {
    (options: IExample2Options): JQuery;
}

export interface IExample2Plugin extends IExample2PluginFunction, IGlobalOptions<IExample2Options> { }

declare global {
    export interface JQuery {
        example2Plugin: IExample2Plugin;
    }
}
