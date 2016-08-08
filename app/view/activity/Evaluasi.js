Ext.define('Extlp.view.activity.Evaluasi', {
	extend: 'Ext.panel.Panel',
	xtype: 'eval',
	requires : 'Extlp.view.activity.EvalBuController',
	frame: true,
	controller: 'c_evalbu',
	layout:{
		type: 'vbox',
		align: 'stretch'
	},
	items:[{
		xtype: 'eval-grid',
		flex: 1
	}],
	dockedItems: [{
		xtype: 'toolbar',
		dock: 'top',
		items: [
			{
				xtype:'button',
				text: 'Tambah',
				listeners:{
					click: 'OnAdd'
				}
			},
			{
				xtype:'button',
				text: 'Hapus',
				listeners:{
					click: 'OnDelete'
				}
			},'->','search',{
				xtype: 'textfield',
				id: 'searchFieldeval',
				itemId: 'searchFieldeval',
				name: 'searchFieldeval',
				listeners: {
					change: function(field, newValue) {

						// remove the existing filter.
                        Ext.getStore('EvalBu').removeFilter('searchFilter');

						// add filter if there is a search field value.
						if (newValue && newValue.length > 0) {
							var searchFilter = new Ext.util.Filter({
								id: 'searchFiltereval',
								anyMatch: true,
								caseSensitive: false,
								property: 'c_bu_nama',
								value: newValue
							});

							// update the filter
                            Ext.getStore('EvalBu').addFilter(searchFilter);
						}
					}
				}
			}
		]
	},{
    	xtype: 'pagingtoolbar',
    	dock: 'bottom',
    	store: 'EvalBu',
    	displayInfo: true
	}]
});