Ext.define('Radio.store.RecordedStreams', {
    extend: 'Ext.data.Store',

    // requires: [
    //     'Radio.model.RecordedStream'
    // ],

    // model: 'Radio.model.RecordedStreams',

    fields: [
        {name: 'filename'}
    ],

    proxy: {
        type: 'ajax',
        url: '/server/getRecordings',
        reader: {
            type: 'json'
        }
    },

    autoLoad: true,

    // init: function(application) {
    //     console.log('RecordedStreams Store created');
    // }

});