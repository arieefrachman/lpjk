Ext.define('Extlp.view.nrbu.Nrbu', {
	extend: 'Ext.panel.Panel',
	xtype: 'nrbu',
	frame: true,
	controller: 'c_evalbu',
	layout:{
		type: 'vbox',
		align: 'stretch'
	},
	items:[{
		xtype: 'nrbu-grid',
		flex: 1
	}],
	dockedItems: [{
		xtype: 'toolbar',
		dock: 'top',
		items: [
			'->','search',{
				xtype: 'textfield',
				id: 'searchFieldnrbu',
				itemId: 'searchFieldnrbu',
				name: 'searchFieldnrbu',
				listeners: {
					change: function(field, newValue) {

						// remove the existing filter.
						Ext.getStore('Nrbu').removeFilter('searchFilternrbu');

						// add filter if there is a search field value.
						if (newValue && newValue.length > 0) {
							var searchFilter = new Ext.util.Filter({
								id: 'searchFilternrbu',
								anyMatch: true,
								caseSensitive: false,
								property: 'c_bu_nama',
								value: newValue
							});

							// update the filter
							Ext.getStore('Nrbu').addFilter(searchFilter);
						}
					}
				}
			}
		]
	},{
    	xtype: 'pagingtoolbar',
    	dock: 'bottom',
    	store: 'Nrbu',
    	displayInfo: true
	}]
});