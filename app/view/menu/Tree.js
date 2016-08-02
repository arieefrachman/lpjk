Ext.define('Extlp.view.menu.Tree', {
	extend: 'Ext.tree.Panel',
	title: 'MyTree',
	xtype: 'menutree',
	border: 0,
	autoScroll: true,
	root:{
		text: 'My Application',
		expanded: true
	}
});