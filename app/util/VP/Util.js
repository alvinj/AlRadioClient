Ext.define('VP.util.Util', {

    // code copied from a Packt book

    requires: [
        'Ext.Msg'
    ],

    statics : {
        required: '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>',
        decodeJSON : function (text) {
            var result = Ext.JSON.decode(text, true);
            if (!result){
                result = {};
                result.success = false;
                result.msg = text;
            }
            return result;
        },

        showErrorMsg: function (text) {
            // Ext.Msg.alert('Error!', text);
            Ext.Msg.show({
                title:'Error!',
                msg: text,
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
            });
        },

        dumpObject: function(obj) {
            var output, property;
            for (property in obj) {
                output += property + ': ' + obj[property] + '; ';
            }
            console.log(output);
        }

    }
});
