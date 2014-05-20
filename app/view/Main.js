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

    items: [
        {
            region: 'north',
            xtype: 'vcrControlPanel',
            title: 'north'
        },
        {
            region: 'center',
            xtype: 'centerPanel',
            title: 'center panel'
        },
        {
            region: 'south',
            xtype: 'statusPanel',
            title: 'status'
        }
    ]

});