Ext.define('Radio.view.RecordedStreamsPanel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.recordedStreamsPanel',

    // frame: true,
    store: Ext.create('Radio.store.RecordedStreams'),

    // TODO i don't know what this line does, or if it's really needed
	// renderTo: Ext.getBody(),

    hideHeaders: true,

    columns: [
        {
            text: 'Filename',
            width: 1000,
            dataIndex: 'filename'
        }
    ],

    initComponent: function(){
        this.callParent();
        this.on('render', this.loadStore, this);
    },

    loadStore: function() {
        this.getStore().load();
    }

});

