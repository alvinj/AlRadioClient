Ext.define('Radio.controller.RecordedStreamsController', {
    extend: 'Ext.app.Controller',

    requires: [
        'Radio.view.RecordedStreamsPanel'
    ],

    views: [
        'RecordedStreamsPanel'
    ],

    // TODO i don't know why 'refs' is needed
    refs: [
        {
            ref: 'recordedStreamsPanel',
            selector: 'recordedStreamsPanel'
        }
    ],

    init: function(application) {
        this.control({
            'recordedStreamsPanel': {
                itemclick: this.onRecordedStreamsPanelItemClick
            }
        });
    },

    onRecordedStreamsPanelItemClick: function(grid, record, item, index, e, eOpts) {
        var filename = record.data.filename;
        var encodedFilename = Ext.urlEncode({ recordingFilename: filename });
        Ext.Ajax.request({
            url: '/server/playRecording?' + encodedFilename,
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
    }

});







