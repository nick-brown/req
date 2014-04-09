require.config({
    shim: {
        underscore: {
            exports: '_',
        },

        backbone: {
            deps: ['underscore', 'jquery']
        },

        marionette: {
            deps: ['backbone'],
            exports: 'Backbone.Marionette'
        },
    },

    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        underscore: '../bower_components/underscore/underscore',
        backbone: '../bower_components/backbone/backbone',
        marionette: '../bower_components/marionette/lib/backbone.marionette',
        mustache: '../bower_components/mustache/mustache'
    }
});

require(['app'], function(App) {
    'use strict';
    App.start();

    Backbone.history.start();
});
