define(['marionette', 'mustache', 'backbone'], function(Marionette, Mustache, Backbone) {
    'use strict';
    

    var App = new Marionette.Application();

    // Use mustache templates instead of underscore templates
    Marionette.TemplateCache.prototype.compileTemplate = function (rawTemplate) {
        // Mustache.parse will not return anything useful (returns an array)
        // The render function from Marionette.Renderer.render expects a function
        // so instead pass a partial of Mustache.render 
        // with rawTemplate as the initial parameter.

        // Additionally Mustache.compile no longer exists so we must use parse.
        Mustache.parse(rawTemplate);
        return _.partial(Mustache.render, rawTemplate);
    };

    App.addRegions({
        mainRegion: "#main-region"
    });

    App.StaticView = Marionette.ItemView.extend({
        template: '#musty-template',
    });

    App.on("initialize:after", function() {
        var model1 = new Backbone.Model({ name: "Dave" });
        var view1 = new App.StaticView({ model: model1 });

        App.mainRegion.show(view1);
    });


    return App;
});
