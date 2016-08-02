Ext.define('Extlp.store.Tree', {
	extend: 'Ext.data.TreeStore',
	xtype: 'treestore',
	storeId: 'myTreeStoreDS',
	root: {
		text: 'My Application',
		expanded: true,
		children: [{
					text: 'app',
					children:[
							{ leaf:true, text: 'Application.js' }
							 ]
					},{
					text: 'controller',
					expanded: true,
					children: []
					},{
					text: 'model', expanded:true,
					children: [
							{ leaf:true, text: 'clients.js' },
							{ leaf:true, text: 'providers.js'},
							{ leaf:true, text: 'users.js' }
							]
					},{
					text: 'store',
					children: [
							{ leaf:true, text: 'clients.js' },
							{ leaf:true, text: 'providers.js' },
							{ leaf:true, text: 'users.js' }
							]
					},{
					text: 'view',
					children: [
							{ leaf:true, text: 'BasicTreePanel.js' },
							{ leaf:true, text: 'TreeStorePanel.js' }
							]
							},{
					text: 'resources',
					children: [
							{ text: 'images' },
							{ text: 'css',
								children: [
								{ leaf:true, text: 'main.css' },
								{ leaf:true, text: 'clients.css' }
								]
							}
							]
							}]
					}
});