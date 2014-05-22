/**
 * This is the controller for the VCR buttons.
 */
Ext.define('Radio.controller.VcrController', {
    extend: 'Ext.app.Controller',

    requires: [
        'Radio.view.VcrControlPanel'
    ],

    views: [
        'VcrControlPanel'
    ],

    // TODO i don't know why 'refs' is needed
    refs: [
        {
            ref: 'vcrControlPanel',
            selector: 'vcrControlPanel'
        }
    ],

    init: function(application) {
        this.control({
            // more events: activate, afterrender, beforerender, beforestaterestore, enable,
            // render, show, staterestore
            'btnPlayPause': {
                click: this.onPlayPauseButtonClicked
            },
            'button#btnPlayPause': {
                click: this.onPlayPauseButtonClicked
            },
            'slider#volumeSlider': {
                changecomplete: this.onVolumeSliderChangeComplete
            }
        });
    },

    // TODO refactor these ajax calls (too much copy/paste)
    onVolumeSliderChangeComplete: function(slider, newValue, thumb, eOpts) {
        console.log('new slider value: ' + newValue);
        Ext.Ajax.request({
            url: '/server/setVolume?volume=' + newValue,
            method: 'GET',
            success: function(conn, response, options, eOpts) {
                var result = VP.util.Util.decodeJSON(conn.responseText);
                if (result.success) {
                    // ignore
                } else {
                    VP.util.Util.showErrorMsg(result.msg);
                }
            },
            failure: function(conn, response, options, eOpts) {
                // TODO get the 'msg' from the json and display it
                VP.util.Util.showErrorMsg(conn.responseText);
            }
        });
    },

    onPlayPauseButtonClicked: function(button) {
        Ext.Ajax.request({
            url: '/server/turnEverythingOff',
            method: 'GET',
            success: function(conn, response, options, eOpts) {
                var result = VP.util.Util.decodeJSON(conn.responseText);
                if (result.success) {
                    // console.log('SUCCESS!');
                } else {
                    // console.log('ERROR!');
                    VP.util.Util.showErrorMsg(result.msg);
                }
            },
            failure: function(conn, response, options, eOpts) {
                // TODO get the 'msg' from the json and display it
                VP.util.Util.showErrorMsg(conn.responseText);
            }
        });
    }

});







