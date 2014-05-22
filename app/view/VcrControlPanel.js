Ext.define('Radio.view.VcrControlPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.vcrControlPanel',

    // TODO i don't know what this line does, or if it's really needed
	renderTo: Ext.getBody(),

    layout: {
        type: 'hbox',
        pack: 'center',
        align: 'center',
        padding: '20px'
        // margins: '5 5 0 5',
    },

    // this affects the style of the outside of the panel. for instance,
    // the margin and padding move the panel, making it smaller.
    // style: {
    //     'margin': '10px',
    //     'margin-left': '100px'
    // },

    defaults: {
        xtype: 'button',
        margin: 2
    },
    items: [
        {
            text: '30m',
            itemId: 'back30m'
        },
        {
            text: '10m',
            itemId: 'back10m',
        },
        {
            text: '1m',
            itemId: 'back1m',
        },
        {
            text: '10s',
            itemId: 'back10s',
        },
        {
            text: '>',
            itemId: 'btnPlayPause',
            tooltip: 'Play/Pause'
        },
        {
            text: '10s',
            itemId: 'forward10s'
        },
        {
            text: '1m',
            itemId: 'forward1m',
        },
        {
            text: '10m',
            itemId: 'forward10m',
        },
        {
            text: '30m',
            itemId: 'forward30m',
        },
        {
            xtype: 'slider',
            itemId: 'volumeSlider',
            width: 300,
            value: 80,
            increment: 5,
            minValue: 0,
            maxValue: 100,
            margin: 10
        }
    ]
});










