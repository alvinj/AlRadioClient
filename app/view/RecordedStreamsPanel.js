Ext.define('Radio.view.RecordedStreamsPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.recordedStreamsPanel',

    // TODO i don't know what this line does, or if it's really needed
	renderTo: Ext.getBody(),

    layout: {
        type: 'hbox',
        pack: 'center',
        align: 'center',
        padding: '20px'
    },

    html: '<center><p><font color="#ccc">get recorded streams working!</font></p></center>'


});

