Ext.define('Radio.view.RadioStationsPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.radioStationsPanel',

    // TODO i don't know what this line does, or if it's really needed
	renderTo: Ext.getBody(),

    items: [
        {
            xtype: 'panel',
            closable: false,
            layout: 'fit',
            html: '<p>radio station buttons go here ...</p>'
        }
    ]
});

