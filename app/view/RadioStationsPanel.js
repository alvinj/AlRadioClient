Ext.define('Radio.view.RadioStationsPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.radioStationsPanel',

    // TODO i don't know what this line does, or if it's really needed
	renderTo: Ext.getBody(),

    layout: {
        type: 'hbox',
        pack: 'center',
        align: 'center',
        padding: '20px'
        // margins: '5 5 0 5',
    }

});

