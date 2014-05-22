Ext.define('Radio.view.PandoraPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.pandoraPanel',

    // TODO i don't know what this line does, or if it's really needed
	renderTo: Ext.getBody(),

    layout: {
        type: 'hbox',
        pack: 'center',
        align: 'center',
        padding: '20px'
    },

    html: '<center><p><font color="#ccc">get pandora working!</font></p></center>'

});

