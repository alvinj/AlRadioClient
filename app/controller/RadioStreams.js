Ext.define('Radio.controller.RadioStreams', {
    extend: 'Ext.app.Controller',

    requires: [
        'Radio.view.RadioStreamsPanel'
    ],

    stores: [
        'RadioStreams'
    ],

    views: [
        'CenterPanel',
        'RadioStreamsPanel'
    ],

    // TODO i don't know why 'refs' is needed
    refs: [
        {
            ref: 'centerPanel',
            selector: 'centerPanel'
        },
        {
            ref: 'radioStreamsPanel',
            selector: 'radioStreamsPanel'
        }
    ],

    init: function(application) {
        this.control({
            // more events: activate, afterrender, beforerender, beforestaterestore, enable,
            // render, show, staterestore
            'radioStreamsPanel': {
                beforerender: this.onRadioStreamsPanelBeforeRender
            }
        });
    },

    buttonHandler: function(button) {
        console.log('YOU CLICKED: ' + button.text);
        Ext.Ajax.request({
            url: '/server/playStream?streamName=' + button.text,
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

    onRadioStreamsPanelBeforeRender: function(panel, options) {
        var me = this;
        var radioStreamsStore = this.getRadioStreamsStore();
        radioStreamsStore.load({
            callback: function(records, operation, success) {
                if (success === true) {
                    radioStreamsStore.each(function(record) {
                        var name = record.data.name;
                        var button = Ext.create('Ext.button.Button', {
                            text: name,
                            scale: 'large',
                            tooltip: name,
                            cls: 'radioStreamButton',
                            handler: me.buttonHandler,
                            style: {
                                'margin': '12px'
                            },

                        });
                        panel.add(button);
                    });
                } else {
                    console.log('error: had a problem reading the radioStreamsStore');
                }
            }
        });
    }


});










