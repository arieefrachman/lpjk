/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('Extlp.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Extlp',

    stores: [
        'Menu',
        'Tree',
        'Bu',
        'EvalBu',
        'TmpEvalStore',
        'TmpAhliStore',
        'Nrbu',
        'Nrbuupd',
        'Kk',
        'Sub',
        'Subklakbli',
        'Tingkat',
        'Kuakbli'
    ],

    views: [
    	'Extlp.view.login.Login',
    	'Extlp.view.main.Main'
    ],

    controllers:[
        'Menu'
    ],
    
    launch: function () {
        // TODO - Launch the application
    //    Ext.create('Extlp.view.login.Login');
        Ext.create('Extlp.view.main.Main');
        Ext.setGlyphFontFamily('FontAwesome');

    /*Ext.create('Extlp.NestedGrid',{
            //plugins:[{ptype:'viewport'}],
            renderTo:Ext.getBody()
        });
    */
    
    }
});
