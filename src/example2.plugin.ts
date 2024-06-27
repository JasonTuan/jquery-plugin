import $ from 'jquery';
import {IExample2Options, IExample2PluginFunction} from './interfaces/example2-plugin.interface';

$.fn.example2Plugin = Object.assign<IExample2PluginFunction, IGlobalOptions<IExample2Options>>(
    function (this: JQuery, options: IExample2Options): JQuery {
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
