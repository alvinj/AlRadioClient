Ext.define('Radio.view.VcrControlPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.vcrControlPanel',

    // TODO i don't know what this line does, or if it's really needed
	renderTo: Ext.getBody(),

    items: [
        {
            xtype: 'panel',
            closable: false,
            layout: 'fit',
            html: '<p>vcr controls go here</p>'
        }
    ]
});

