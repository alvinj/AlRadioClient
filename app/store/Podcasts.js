Ext.define('Radio.store.Podcasts', {
    extend: 'Ext.data.Store',

    fields: [
        {name: 'filename'}
    ],

    proxy: {
        type: 'ajax',
        url: '/server/getPodcasts',
        reader: {
            type: 'json'
        },
        noCache: true,
        limitParam: undefined,
        pageParam: undefined,
        startParam: undefined
    },

    autoLoad: true

});