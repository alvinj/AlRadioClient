/**
 * This is the main/center panel. 
 * Other panels like RadioStationsPanel and RadioStreamsPanel go inside this panel.
 */
Ext.define('Radio.view.CenterPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.centerPanel',

    // TODO i don't know what this line does, or if it's really needed
	renderTo: Ext.getBody(),

    requires:[
        'Radio.view.RadioStationsPanel',
        'Radio.view.RadioStreamsPanel',
        'Radio.view.PandoraPanel',
        'Radio.view.PodcastsPanel',
        'Radio.view.RecordedStreamsPanel'
    ],

    layout: {
        type: 'vbox',
        align: 'stretch' // 100% width
    },

    items: [
        {
            xtype: 'radioStationsPanel',
            title: 'stations',
            flex: 1
        },
        {
            xtype: 'radioStreamsPanel',
            title: 'streams',
            flex: 1
        },
        {
            xtype: 'recordedStreamsPanel',
            title: 'recorded streams',
            flex: 1.2
        },
        {
            xtype: 'pandoraPanel',
            title: 'pandora',
            flex: 1
        },
        {
            xtype: 'podcastsPanel',
            title: 'podcasts',
            flex: 1
        }
    ]

});

