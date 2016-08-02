Ext.define('Extlp.store.TmpAhliStore', {
		extend: 'Ext.data.Store',
		model: 'Extlp.model.EvalBu',
		proxy: {
			type: 'memory',			
			reader: {
					type: 'array'
				}
			}
		});