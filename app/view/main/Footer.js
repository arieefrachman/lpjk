Ext.define('Extlp.view.main.Footer', {
	extend: 'Ext.container.Container', //#1
	xtype: 'appfooter', //#2
	cls: 'app-footer', //#3
	height: 30, //#4
	layout: 'center', //#5
	items: [
	{
		xtype: 'component', //#6
		width: 350, //#7
		componentCls: 'app-footer-title', //#8
		bind: {
			html: 'ini footer' //#9
		}
	}
	]
});