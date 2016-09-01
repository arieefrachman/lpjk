Ext.define('Extlp.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLoginClick: function() {

        var me = this;

        // This would be the ideal location to verify the user's credentials via
        // a server-side lookup. We'll just move forward for the sake of this example.

        // Set the localStorage value to true
        var username = Ext.getCmp('loginform').getForm().findField('username').getValue();
        var password = Ext.getCmp('loginform').getForm().findField('password').getValue();

        console.log(username);
        Ext.Ajax.request({
            url: 'services/login/doAuth.php',
            params: {
                user: username,
                password: password
            },
            scope: me,
            success: 'onSuccess',
            failure: 'onFailure'
        });
        localStorage.setItem("TutorialLoggedIn", true);

        // Remove Login Window

    },

    onSuccess: function(conn, response, options, eOpts){
        var result = Ext.JSON.decode(conn.responseText, true); // #1

        if (!result){ // #2
            result = {};
            result.success = false;
            result.msg = conn.responseText;
        }


        if (result.success) { // #3

            //login.close(); // #4
            //Ext.create('Packt.view.MyViewport'); // #5
            console.log('success');
            this.getView().destroy();

            // Add the main view to the viewport
            Ext.widget('app-main');

        } else {
            Ext.Msg.show({
                title:'Fail!',
                msg: 'Salah username dan Password', // #6
                buttons: Ext.Msg.OK
            });
        }

    },
    onFailure: function (form, action) {
        console.log('failed');
    }
});