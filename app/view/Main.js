Ext.define('Radio.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.layout.container.Border',
        'Radio.view.VcrControlPanel',
        'Radio.view.CenterPanel',
        'Radio.view.StatusPanel'
    ],
    
    xtype: 'app-main',

    layout: {
        type: 'border'
    },

    style: {
        'margin': '20px',
        'margin-left': '150px',
        'margin-right': '150px'
    },

    items: [
        {
            region: 'north',
            xtype: 'vcrControlPanel',
            title: 'controls'
        },
        {
            region: 'center',
            xtype: 'centerPanel'
        },
        {
            region: 'south',
            xtype: 'statusPanel',
            title: 'status'
        }
    ]

});