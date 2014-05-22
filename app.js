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
        // 'Radio.store.RecordedStreams'
    ],

    autoCreateViewport: true
});
