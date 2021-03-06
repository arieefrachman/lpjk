Ext.define('Extlp.view.nrbuupd.Nrbuupd', {
	extend: 'Ext.panel.Panel',
	xtype: 'nrbuupd',
	frame: true,
	controller: 'c_evalbu',
	layout:{
		type: 'vbox',
		align: 'stretch'
	},
	items:[{
		xtype: 'nrbuupd-grid',
		flex: 1
	}],
	dockedItems: [{
		xtype: 'toolbar',
		dock: 'top',
		items: [
			'->','search',{
				xtype: 'textfield',
				id: 'searchFieldnrbuupd',
				itemId: 'searchFieldnrbuupd',
				name: 'searchFieldnrbuupd',
				listeners: {
					change: function(field, newValue) {

						// remove the existing filter.
						Ext.getStore('Nrbuupd').removeFilter('searchFilternrbuupd');

						// add filter if there is a search field value.
						if (newValue && newValue.length > 0) {
							var searchFilter = new Ext.util.Filter({
								id: 'searchFilternrbuupd',
								anyMatch: true,
								caseSensitive: false,
								property: 'c_bu_nama',
								value: newValue
							});

							// update the filter
							Ext.getStore('Nrbuupd').addFilter(searchFilter);
						}
					}
				}
			}
		]
	},{
    	xtype: 'pagingtoolbar',
    	dock: 'bottom',
    	store: 'Nrbuupd',
    	displayInfo: true
	}]
});