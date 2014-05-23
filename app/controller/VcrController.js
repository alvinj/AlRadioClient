/**
 * This is the controller for the VCR buttons.
 */
Ext.define('Radio.controller.VcrController', {
    extend: 'Ext.app.Controller',

    requires: [
        'Radio.view.VcrControlPanel',
        'VP.util.Util'
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
            },
            'button#back30m':    { click: this.onBack30mClicked },
            'button#back10m':    { click: this.onBack10mClicked },
            'button#back1m':     { click: this.onBack1mClicked },
            'button#back10s':    { click: this.onBack10sClicked },
            'button#forward10s': { click: this.onForward10sClicked },
            'button#forward1m':  { click: this.onForward1mClicked },
            'button#forward10m': { click: this.onForward10mClicked },
            'button#forward30m': { click: this.onForward30mClicked}
        });
    },

    onBack30mClicked: function(button) {
        var encoded = Ext.urlEncode({ value: '-1800' });
        VP.util.Util.callRestUrl('/server/seek?' + encoded, 'GET')
    },

    onBack10mClicked: function(button) {
        var encoded = Ext.urlEncode({ value: '-600' });
        VP.util.Util.callRestUrl('/server/seek?' + encoded, 'GET')
    },

    onBack1mClicked: function(button) {
        var encoded = Ext.urlEncode({ value: '-60' });
        VP.util.Util.callRestUrl('/server/seek?' + encoded, 'GET')
    },

    onBack10sClicked: function(button) {
        var encoded = Ext.urlEncode({ value: '-10' });
        VP.util.Util.callRestUrl('/server/seek?' + encoded, 'GET')
    },

    onForward10sClicked: function(button) {
        var encoded = Ext.urlEncode({ value: '+10' });
        VP.util.Util.callRestUrl('/server/seek?' + encoded, 'GET')
    },

    onForward1mClicked: function(button) {
        var encoded = Ext.urlEncode({ value: '+60' });
        VP.util.Util.callRestUrl('/server/seek?' + encoded, 'GET')
    },

    onForward10mClicked: function(button) {
        var encoded = Ext.urlEncode({ value: '+600' });
        VP.util.Util.callRestUrl('/server/seek?' + encoded, 'GET')
    },

    onForward30mClicked: function(button) {
        var encoded = Ext.urlEncode({ value: '+1800' });
        VP.util.Util.callRestUrl('/server/seek?' + encoded, 'GET')
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







