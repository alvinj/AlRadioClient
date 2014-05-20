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
        'Radio.view.RadioStreamsPanel'
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
        }
    ]

});

