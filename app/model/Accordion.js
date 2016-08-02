Ext.define('Extlp.model.Accordion', {
	extend: 'Ext.data.Model',
	fields: [ //#1
		{ name: 'id', type: 'int'}, //#2
		{ name: 'text' },
		{ name: 'iconCls' }
	],

	hasMany: {
        model: 'Extlp.model.menu.TreeNode',
        foreignKey: 'parent_id',
        name: 'items'
    }
});