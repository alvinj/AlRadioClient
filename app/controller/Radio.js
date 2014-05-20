Ext.define('Radio.controller.Radio', {
    extend: 'Ext.app.Controller',

    requires: [
        // 'VP.util.Utils'
    ],

    stores: [
        'RadioStations'
    ],

    views: [
        'CenterPanel',
        'RadioStationsPanel'
    ],

    // TODO i don't know why this is needed
    refs: [
        {
            ref: 'centerPanel',
            selector: 'centerPanel'
        },
        {
            ref: 'radioStationsPanel',
            selector: 'radioStationsPanel'
        }
    ],

    init: function(application) {
        this.control({
            // "login form button#submit": {
            //     click: this.onButtonClickSubmit
            // },

            // more events: activate, afterrender, beforerender, beforestaterestore, enable,
            // render, show, staterestore
            'radioStationsPanel': {
                beforerender: this.onRadioStationsPanelBeforeRender,
                render: this.onRadioStationsPanelRender
            }
        });
    },

    onRadioStationsPanelBeforeRender: function(panel, options) {
        console.log("ENTERED onRadioStationsPanelBeforeRender");
    },

    onRadioStationsPanelRender: function(panel, options) {
        console.log("ENTERED onRadioStationsPanelRender");
    }


});






















