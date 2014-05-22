Ext.define('Radio.view.PodcastsPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.podcastsPanel',

    // TODO i don't know what this line does, or if it's really needed
	renderTo: Ext.getBody(),

    layout: {
        type: 'hbox',
        pack: 'center',
        align: 'center',
        padding: '20px'
    },

    html: '<center><p><font color="#ccc">get podcasts working!</font></p></center>'


});

