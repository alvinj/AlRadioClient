Ext.define('Radio.Application', {
    name: 'Radio',

    extend: 'Ext.app.Application',

    views: [
        'Radio.view.RadioStationsPanel'
    ],

    controllers: [
        'Radio.controller.Radio'
    ],

    stores: [
        'Radio.store.RadioStations'
    ]
});
