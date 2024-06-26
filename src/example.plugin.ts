import $ from 'jquery';
import {IExampleOptions, IExamplePluginFunction} from './interfaces/example-plugin.interface';

$.fn.examplePlugin = Object.assign<IExamplePluginFunction, IGlobalOptions<IExampleOptions>>(
    function (this: JQuery, options: IExampleOptions): JQuery {
        this.each((index, element) => {
            const $element = $(element);
            const settings = $.extend({}, structuredClone(this.examplePlugin.options), options);
            $element.css('color', settings.color);
            $element.text(settings.message);
        });
        return this;
    },
    {
        options: {
            color: null,
            message: null,
        }
    }
);
