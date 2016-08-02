Ext.define('Extlp.view.login.LoginController', { // #1
    extend: 'Ext.app.ViewController', // #2
    alias: 'controller.login', // #3

    onTextFieldSpecialKey: function(field, e, options){ },// #4

    onTextFieldKeyPress: function(field, e, options){ }, // #5
    
    onButtonClickCancel: function(button, e, options){ 
        this.lookupReference('form').reset();
        console.log('login cancel');
    }, // #6
    
    onButtonClickSubmit: function(button, e, options){ 
        
        var me = this;
        if(me.lookupReference('form').isValid()){
            me.doLogin();
        }
        console.log('login submit');
        
    }, // #7
    
    doLogin: function() { 
        var me = this,
        form   = me.lookupReference('form');
        me.getView().mask('Authenticating... Please wait...');
        form.submit({
            clientValidation: true, // #3
            url: 'services/login/doAuth.php', // #4
            scope: me, // #5
            success: 'onLoginSuccess', // #6
            failure: 'onLoginFailure' // #7
        });
    }, // #8
    
    onLoginFailure: function(form, action) { 
        console.log('gagal');
    }, // #9
    
    onLoginSuccess: function(form, action) { 
        console.log('sukses');
        var view = this.getView();
        view.unmask();
        view.close();

        Ext.create('Extlp.view.main.Main');
        
    } // #10
});