'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_',
        },

        backbone: {
            deps: ['underscore', 'jquery']
        },

        marionette: {
            deps: ['jquery', 'underscore', 'backbone'],
            exports: 'Marionette'
        }
    },

    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        underscore: '../bower_components/underscore/underscore',
        backbone: '../bower_components/backbone/backbone',
        marionette: '../bower_components/marionette/backbone.marionette'
    }
});
