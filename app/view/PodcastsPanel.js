Ext.define('Radio.view.PodcastsPanel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.podcastsPanel',

    store: Ext.create('Radio.store.Podcasts'),

    renderTo: Ext.getBody(),
    hideHeaders: true,

    columns: [
        {
            text: 'Filename',
            width: 1000,
            dataIndex: 'filename'
        }
    ],

    initComponent: function(){
        this.callParent();
        this.on('render', this.loadStore, this);
    },

    loadStore: function() {
        this.getStore().load();
    }

});


