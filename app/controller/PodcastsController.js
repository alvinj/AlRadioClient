Ext.define('Radio.controller.PodcastsController', {
    extend: 'Ext.app.Controller',

    requires: [
        'Radio.view.PodcastsPanel'
    ],

    views: [
        'PodcastsPanel'
    ],

    refs: [
        {
            ref: 'podcastsPanel',
            selector: 'podcastsPanel'
        }
    ],

    init: function(application) {
        this.control({
            'podcastsPanel': {
                itemclick: this.onRecordedStreamsPanelItemClick
            }
        });
    },

    // TODO refactor. i've been copying and pasting this like crazy.
    onRecordedStreamsPanelItemClick: function(grid, record, item, index, e, eOpts) {
        var filename = record.data.filename;
        Ext.Ajax.request({
            url: '/server/playPodcast?podcastFilename=' + filename,
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







