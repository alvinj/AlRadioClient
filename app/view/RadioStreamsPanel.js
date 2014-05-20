Ext.define('Radio.view.RadioStreamsPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.radioStreamsPanel',

    // TODO i don't know what this line does, or if it's really needed
	renderTo: Ext.getBody(),

    items: [
        {
            xtype: 'panel',
            closable: false,
            layout: 'fit',
            html: '<p>radio <em>stream</em> buttons go here ...</p>'
        }
    ]
});

