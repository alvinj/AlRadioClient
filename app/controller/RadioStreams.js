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
                            handler: me.buttonHandler,
                            style: {
                                'margin': '8px'
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










