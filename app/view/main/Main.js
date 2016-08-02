/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Extlp.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'Extlp.view.main.MainController',
        'Extlp.view.main.MainModel',
        'Extlp.view.main.Panel',
        'Extlp.view.main.Footer',
        'Extlp.view.main.Header',
        'Extlp.view.menu.Accordion',
        'Extlp.view.menu.Tree',
        'Extlp.view.bu.Bu',
        'Extlp.view.bu.BuGrid',
        'Extlp.view.activity.Evaluasi',
        'Extlp.view.activity.EvalGrid',
        'Extlp.view.activity.EvalBuController',
        'Extlp.view.activity.EvalBuForm',
        'Extlp.view.nrbu.Nrbu',
        'Extlp.view.nrbu.NrbuGrid',
        'Extlp.view.nrbuupd.Nrbuupd',
        'Extlp.view.nrbuupd.NrbuupdGrid',
        'Extlp.view.kk.Kk',
        'Extlp.view.kk.KkGrid'
    ],

    xtype: 'app-main',

    plugins: 'viewport',
    
    controller: 'main',
    autoShow: true,
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [{
        region: 'center',
        xtype: 'mainpanel'
    },{
        xtype: 'appheader',
        region: 'north',
    },{
        xtype: 'appfooter',
        region: 'south'
    },{
        xtype: 'mainmenu',
        region: 'west',
        split: true
    }]
});
