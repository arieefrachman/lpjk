Ext.define('Extlp.store.EvalBu', {
	extend: 'Ext.data.Store',
	model: 'Extlp.model.EvalBu', //#2
	autoload: true,
	proxy: {
		type: 'ajax', //#3
		url: 'services/crud/listEvalBu.php', //#4
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