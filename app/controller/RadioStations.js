Ext.define('Radio.controller.RadioStations', {
    extend: 'Ext.app.Controller',

    requires: [
        'Radio.view.RadioStationsPanel'
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

    buttonHandler: function(button) {
        console.log('YOU CLICKED: ' + button.text);
    },

    onRadioStationsPanelBeforeRender: function(panel, options) {
        var me = this;
        var radioStationsStore = this.getRadioStationsStore();
        radioStationsStore.load({
            callback: function(records, operation, success) {
                if (success === true) {
                    radioStationsStore.each(function(record) {
                        var number = record.data.number;
                        var description = record.data.description;
                        var button = Ext.create('Ext.button.Button', {
                            text: number,
                            scale: 'large',
                            tooltip: description,
                            handler: me.buttonHandler,
                            style: {
                                'margin': '8px'
                            },

                        });
                        panel.add(button);
                    });
                } else {
                    console.log('error: had a problem reading the radioStationsStore');
                }
            }
        });
    },

    onRadioStationsPanelRender: function(panel, options) {
        console.log("ENTERED onRadioStationsPanelRender");
    }


});






















