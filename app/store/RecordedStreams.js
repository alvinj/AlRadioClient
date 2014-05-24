Ext.define('Radio.store.RecordedStreams', {
    extend: 'Ext.data.Store',

    // fields: [
    //     {name: 'filename'}
    // ],

    requires: 'Radio.model.RecordedStream',
    model: 'Radio.model.RecordedStream',

    proxy: {
        type: 'ajax',
        url: '/server/getRecordings',
        method: 'GET',
        reader: {
            type: 'json'
        },
        noCache: true,
        // limitParam: undefined,
        // pageParam: undefined,
        // startParam: undefined
    },

    // autoLoad: true

});