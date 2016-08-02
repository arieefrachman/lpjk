Ext.define('Extlp.view.activity.EvalBuController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.c_evalbu',
    requires: ['Extlp.view.activity.EvalBuForm'],
    OnAdd: function(button, e, options){
        var win = Ext.WindowManager.get('formbu');

        if(!win){
            Ext.create('Extlp.view.activity.EvalBuForm').show();
        }
    }
});