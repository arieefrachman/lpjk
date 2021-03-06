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
    /*
        Ext.create('Extlp.view.main.Main');
        Ext.setGlyphFontFamily('FontAwesome');
    */
        var loggedIn;

        // Check to see the current value of the localStorage key
        loggedIn = localStorage.getItem("TutorialLoggedIn");

        // This ternary operator determines the value of the TutorialLoggedIn key.
        // If TutorialLoggedIn isn't true, we display the login window,
        // otherwise, we display the main view
        Ext.widget(loggedIn ? 'app-main' : 'login');
    }
});
