Ext.define('Extlp.store.Bu', {
	extend: 'Ext.data.Store',
	storeId: 'bustore',
	model: 'Extlp.model.Bu', //#2
	autoload: true,
	proxy: {
		type: 'ajax', //#3
		url: 'services/crud/listBu.php', //#4
		reader: { //#5
			type: 'json'
		},
		listeners: {
				exception: function(proxy, response, operation){ //#6
				console.log('error cuy');
			   }
		}
	}	
});