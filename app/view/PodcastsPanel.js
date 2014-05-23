Ext.define('Radio.view.PodcastsPanel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.podcastsPanel',

    store: Ext.create('Radio.store.Podcasts'),

    renderTo: Ext.getBody(),

    columns: [
        {
            text: 'Filename',
            width: 1000,
            dataIndex: 'filename'
        }
    ]

});


