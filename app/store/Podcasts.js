Ext.define('Radio.store.Podcasts', {
    extend: 'Ext.data.Store',

    // fields: [
    //     {name: 'filename'}
    // ],

    requires: 'Radio.model.Podcast',
    model: 'Radio.model.Podcast',

    proxy: {
        type: 'ajax',
        url: '/server/getPodcasts',
        method: 'GET',
        reader: {
            type: 'json'
        },
        noCache: true,
        limitParam: undefined,
        pageParam: undefined,
        startParam: undefined
    },

    // autoLoad: true

});