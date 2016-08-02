Ext.define('Extlp.view.bu.Bu', {
	extend: 'Ext.panel.Panel',
	xtype: 'bu',

	frame: true,

	layout:{
		type: 'vbox',
		align: 'stretch'
	},
	items:[{
		xtype: 'bu-grid',
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
			}
		]
	},{
    	xtype: 'pagingtoolbar',
    	dock: 'bottom',
    	store: 'Bu',
    	displayInfo: true
	}]
});