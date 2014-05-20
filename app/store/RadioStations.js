Ext.define('Radio.store.RadioStations', {
    extend: 'Ext.data.Store',
    requires: 'Radio.model.RadioStation',
    model: 'Radio.model.RadioStation',

    proxy: {
        type: 'ajax',
        url: '/radio/data/radioStations.json',
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

