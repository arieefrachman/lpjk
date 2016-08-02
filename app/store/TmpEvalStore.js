Ext.define('Extlp.store.TmpEvalStore', {
		extend: 'Ext.data.Store',
		model: 'Extlp.model.EvalBu',
		proxy: {
			type: 'memory',			
			reader: {
					type: 'array'
				}
			}
		});