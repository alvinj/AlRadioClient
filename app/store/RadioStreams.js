Ext.define('Radio.store.RadioStreams', {
    extend: 'Ext.data.Store',
    requires: 'Radio.model.RadioStream',
    model: 'Radio.model.RadioStream',

    proxy: {
        type: 'ajax',
        url: '/radio/data/radioStreams.json',
        method: 'GET',
        reader: {
            type: 'json'
            //root: 'results'
        },
        // get these variables out of the GET url
        noCache: false,
        limitParam: undefined,
        pageParam: undefined,
        startParam: undefined,
    }

});

