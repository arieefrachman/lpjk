Ext.define('Extlp.view.main.Header', {
	extend: 'Ext.toolbar.Toolbar', //#1
	xtype: 'appheader', //#2
	
	requires: [
		//'Packt.view.locale.Translation' //#3
	],
	ui: 'footer', //#4
	
	items: [{
	xtype: 'component', //#5
	bind: { //#6
			html: 'icon'
		  }
	},{
	xtype: 'component',
	componentCls: 'app-header-title', //#7
	bind: { //#8
			html: 'Sistem Informasi LPJK'
		  }
	},{
	xtype: 'button', //#12
	itemId: 'logout', //#13
	text: 'Logout',
	reference: 'logout', //#14
	iconCls: 'fa fa-sign-out fa-lg buttonIcon', //#15
	listeners: {
		click: 'onLogout' //#16
		}
	}]
});