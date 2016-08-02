Ext.define('Extlp.controller.Menu', {
	extend: 'Ext.app.Controller',

	stores: [
        'Menu'
    ],

    refs: [
        {
            ref: 'mainPanel',
            selector: 'mainpanel'
        }
    ],

    renderDynamicMenu: function(view, options){
    	var menu = Ext.create('Extlp.view.menu.Tree',{
    		title: 'Menu Administrator',
    		root:{
    			text: '/',
    			expanded: true,
    			children: [{
                text: 'Master Data',
                children: [{
                    text: 'Asosiasi',
                    leaf: true                  
                },{
                    text: 'Badan Usaha',
                    name: 'bu',
                    leaf: true                  
                }]
            	}, {
                text: 'Aktivitas',               
                children: [{
                    text: 'Evaluasi',
                    name: 'eval',
                    leaf: true
                },{
                    text: 'Approval',
                    name: 'nrbu',
                    leaf: true
                },{
                    text: 'List BU',
                    name: 'nrbuupd',
                    leaf: true
                },{
                    text: 'Kartu Kendali',
                    name: 'kk',
                    leaf: true
                }]
            }]
    		   }
    	});

    	view.add(menu)
    	
    },

    onTreePanelItemClick: function(view, record, item, index, event, options){    	
        
        /*var mainPanel = this.getMainPanel();

        var newTab = mainPanel.items.findBy(
            function (tab){
                return tab.title === record.get('text');
            });

        if (!newTab){
            newTab = mainPanel.add({
                xtype: record.get('className'),
                glyph: record.get('glyph') + '@FontAwesome',
                title: record.get('text'),
                closable: true
            });
        }

        mainPanel.setActiveTab(newTab);*/
                
        if(record.data.leaf){
            var mainPanel = this.getMainPanel();
            var newTab = mainPanel.items.findBy(
            function (tab){
                return tab.title === record.data.text;
            });

            if(!newTab){
                newTab = mainPanel.add({
                    xtype: record.data.name,
                    //glyph: record.get('glyph') + '@FontAwesome',
                    title: record.data.text,
                    closable: true
                });    
            }

            mainPanel.setActiveTab(newTab);
        }
    },

    init: function(){

    	this.control({
            "menutree": {
                itemclick: this.onTreePanelItemClick
            },
            "mainmenu": {
                render: this.renderDynamicMenu
            }
        });
    }
	
});