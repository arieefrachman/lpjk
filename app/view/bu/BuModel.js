Ext.define('Extlp.view.bu.BuModel', {
	extend: 'Ext.app.ViewModel',

	alias: 'viewmodel.bu',

	stores: {
		bu:{
			model: 'Extlp.model.Bu',
			autoload: true
		}
	}
});