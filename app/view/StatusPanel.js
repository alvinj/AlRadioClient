Ext.define('Radio.view.StatusPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.statusPanel',

    // TODO i don't know what this line does, or if it's really needed
	renderTo: Ext.getBody(),

    items: [
        {
            xtype: 'panel',
            closable: false,
            layout: 'fit',
            html: '<p>status information goes here ...</p>'
        }
    ]
});

