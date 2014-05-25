/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when upgrading.
*/

Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'VP.util': 'app/util/VP'
    }
});


Ext.application({
    name: 'Radio',
    extend: 'Radio.Application',
    
    requires: [
        'Ext.form.Panel',
        'Ext.grid.Panel',
        'Ext.slider.Single',
        'Radio.store.RecordedStreams',
        'Radio.store.Podcasts'
    ],

    views: [
        'Radio.view.RadioStationsPanel',
        'Radio.view.RadioStreamsPanel',
        'Radio.view.RecordedStreamsPanel',
        'Radio.view.PodcastsPanel',
        'Radio.view.VcrControlPanel',
    ],

    controllers: [
        'Radio.controller.RadioStations',
        'Radio.controller.RadioStreams',
        'Radio.controller.VcrController',
        'Radio.controller.RecordedStreamsController',
        'Radio.controller.PodcastsController'
    ],

    models: [
        'Radio.model.RadioStation',
        'Radio.model.RadioStream',
        'Radio.model.RecordedStream',
        'Radio.model.Podcast'
    ],

    stores: [
        'Radio.store.RadioStations',
        'Radio.store.RadioStreams',
        'Radio.store.RecordedStreams',
        'Radio.store.Podcasts'
    ],

    autoCreateViewport: true,

    // create a reference in Ext.application so we can access it from multiple functions
    splashscreen: {},

    init: function() {
        // start the mask on the body and get a reference to the mask
         splashscreen = Ext.getBody().mask('Loading AlRadio, please stand by ...', 'splashscreen');
    },

    launch: function() {

        Ext.tip.QuickTipManager.init();
        var task = new Ext.util.DelayedTask(function() {

            // fade out the body mask
            splashscreen.fadeOut({
                duration: 500,
                remove: true
            });

            // fade out the message
            splashscreen.next().fadeOut({
                duration: 500,
                remove: true
            });

       });

       task.delay(1000);

    }

});











