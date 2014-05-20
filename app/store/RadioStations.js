Ext.define('Radio.store.RadioStations', {
    extend: 'Ext.data.Store',
    requires: 'Radio.model.RadioStation',
    model: 'Radio.model.RadioStation',

    proxy: {
        type: 'ajax',
        url: '/server/getRadioStations',
        method: 'GET',
        noCache: false,
        reader: {
            type: 'json'
            //root: 'results'
        }
    }

});

