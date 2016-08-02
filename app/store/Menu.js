Ext.define('Extlp.store.Menu', {
	extend: 'Ext.data.Store',
	xtype: 'menustore',
	requires: [
		//'Packt.util.Util' //#1
	],
	model: 'Extlp.model.Accordion', //#2
	
	proxy: {
		type: 'ajax', //#3
		url: 'services/menu/list.php', //#4
		reader: { //#5
			type: 'json',
			rootProperty: 'data'
		},
		listeners: {
				exception: function(proxy, response, operation){ //#6
				console.log('error cuy');
			   }
		}
	}	
});