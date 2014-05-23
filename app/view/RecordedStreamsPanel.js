Ext.define('Radio.view.RecordedStreamsPanel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.recordedStreamsPanel',

    // TODO - create this:
    store: Ext.create('Radio.store.RecordedStreams'),

    // TODO i don't know what this line does, or if it's really needed
	renderTo: Ext.getBody(),

    columns: [
        {
            text: 'Filename',
            width: 1000,
            dataIndex: 'filename'
        }
    ]

});

