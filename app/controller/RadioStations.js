Ext.define('Radio.controller.RadioStations', {
    extend: 'Ext.app.Controller',

    requires: [
        'VP.util.Util',
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
        Ext.Ajax.request({
            url: '/server/tuneRadio?station=' + button.text,
            method: 'GET',
            success: function(conn, response, options, eOpts) {
                var result = VP.util.Util.decodeJSON(conn.responseText);
                if (result.success) {
                    console.log('SUCCESS!');
                    // TODO change the button ui to indicate that the button is active
                } else {
                    console.log('ERROR!');
                    VP.util.Util.showErrorMsg(result.msg);
                }
            },
            failure: function(conn, response, options, eOpts) {
                // TODO get the 'msg' from the json and display it
                VP.util.Util.showErrorMsg(conn.responseText);
            }
        });
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
                            // iconCls:'questionIcon',
                            tooltip: description,
                            handler: me.buttonHandler,
                            style: {
                                // height: '60px',
                                'margin': '12px'
                            }
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






















