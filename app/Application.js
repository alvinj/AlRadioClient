Ext.define('Radio.Application', {
    name: 'Radio',

    extend: 'Ext.app.Application',

    views: [
        'Radio.view.RadioStationsPanel',
        'Radio.view.RadioStreamsPanel'
    ],

    controllers: [
        'Radio.controller.RadioStations',
        'Radio.controller.RadioStreams',
        'Radio.controller.VcrController'
    ],

    stores: [
        'Radio.store.RadioStations',
        'Radio.store.RadioStreams'
    ]
});
