Ext.define('Extlp.view.nrbuupd.NrbuupdGrid', {
	extend: 'Ext.grid.Panel',
	xtype: 'nrbuupd-grid',
	// store: Ext.data.StoreManager.lookup('bustore'),
	store: 'Nrbuupd',
	columns: [     
        {
            width: 100,
            dataIndex: 'c_evalbu_nrbu',
            text: 'NRBU',
            editor:'textfield'
        },
        {
            width: 250,
            dataIndex: 'c_bu_nama',
            text: 'Nama Badan Usaha',
            flex: 1
        }
    ],
    selModel:'rowmodel',
    plugins: [{
        ptype: 'rowexpander',
        rowBodyTpl: [
            '<div class="detailEval">',
            '</div>'
        ]
    }],
    initComponent: function () {
        var me = this;

        this.callParent(arguments);

        me.getView().on('expandBody', me.onExpandNestedGrid,me);
        me.getView().on('collapsebody', me.onCollapseNestedGrid,me);
    },
    onExpandNestedGrid : function (rowNode, record, expandRow, eOpts) {
        var detailEval = Ext.DomQuery.select("div.detailEval", expandRow);


        var storeeval = Ext.create('Ext.data.Store', {
            storeId: 'evalbustore',
            model: 'Extlp.model.EvalBu', //#2
            autoload: true,
            proxy: {
                type: 'ajax', //#3
                url: 'services/crud/listEvalByEvalId.php?evalbu_id='+record.data.c_evalbu_id, //#4
                reader: { //#5
                    type: 'json'
                },
                listeners: {
                    exception: function(proxy, response, operation){ //#6
                        console.log('error cuy');
                    }
                }
            }
        });

        var evalGrid = Ext.create('Ext.grid.Panel', {
            store: storeeval,
            columns: [
                { text: "Hasil Evaluasi", columns: [
                    {text:'Klasifikasi', dataIndex: 'c_de_klasifikasi_e'},
                    {text:'Subklasifikasi', dataIndex: 'c_de_subkla_e'},
                    {text:'Subkualifikasi', dataIndex: 'c_de_subkua_e'}]
                }
            ],
            columnLines: false,
            autoWidth: true,
            autoHeight: true,
            frame: false,
            iconCls: 'icon-grid',
            renderTo: detailEval[0],
            preventHeader: true

        });


        evalGrid.getStore().load();


    },

    onCollapseNestedGrid : function (rowNode, record, expandRow, eOpts) {
        var detailEval = Ext.DomQuery.select("div.detailEval", expandRow);
        var parent1 = detailEval[0];
        var child1 = parent1.firstChild;

        while (child1) {
            child1.parentNode.removeChild(child1);
            child1 = child1.nextSibling;
        }
    }
});