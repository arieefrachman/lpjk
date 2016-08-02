Ext.define('Extlp.view.kk.Kk', {
	extend: 'Ext.panel.Panel',
	xtype: 'kk',
	frame: true,
	controller: 'c_evalbu',
	layout:{
		type: 'vbox',
		align: 'stretch'
	},
	items:[{
		xtype: 'kk-grid',
		flex: 1
	}],
	dockedItems: [{
		xtype: 'toolbar',
		dock: 'top',
		items: [
			'->','search',{
				xtype: 'textfield',
				id: 'searchField',
				itemId: 'searchField',
				name: 'searchField',
				listeners: {
					change: function(field, newValue) {

						// remove the existing filter.
						Ext.getStore('Kk').removeFilter('searchFilter');

						// add filter if there is a search field value.
						if (newValue && newValue.length > 0) {
							var searchFilter = new Ext.util.Filter({
								id: 'searchFilter',
								anyMatch: true,
								caseSensitive: false,
								property: 'c_bu_nama',
								value: newValue
							});

							// update the filter
							Ext.getStore('Kk').addFilter(searchFilter);
						}
					}
				}
			}
		]
	},{
    	xtype: 'pagingtoolbar',
    	dock: 'bottom',
    	store: 'Kk',
    	displayInfo: true
	}]
});