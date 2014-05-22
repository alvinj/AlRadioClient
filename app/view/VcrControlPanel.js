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
        margin: 6
    },
    items: [
        {
            text: '|<<',
            itemId: 'btnBeginning',
            tooltip: 'Beginning'
        },
        {
            text: '<<',
            itemId: 'btnRewind',
            tooltip: 'Rewind'
        },
        {
            text: '>',
            itemId: 'btnPlayPause',
            tooltip: 'Play/Pause'
        },
        {
            text: '>>',
            itemId: 'btnFastForward',
            tooltip: 'Fast-forward'
        },
        {
            text: '>>|',
            itemId: 'btnEnd',
            tooltip: 'End'
        }
    ]
});





