Ext.define('Extlp.view.activity.EvalGrid', {
	extend: 'Ext.grid.Panel',
	xtype: 'eval-grid',
	// store: Ext.data.StoreManager.lookup('bustore'),
	store: 'EvalBu',
	columns: [     
        {
            width: 200,
            dataIndex: 'c_bu_nama',
            flex: 1,
            text: 'Nama Badan Usaha',
            filter: {
                // required configs
                type: 'string',
                // optional configs
                value: 'star', // setting a value makes the filter active.
                itemDefaults: {
                    // any Ext.form.field.Text configs accepted
                }
            }
        },
        {
            width: 250,
            dataIndex: 'c_evalbu_kb',
            text: 'Kekayaan Bersih'
        },{
            xtype:'actioncolumn',
            text:'Cetak Laporan',
            items:[{
                icon:'build/development/Extlp/resources/images/button/default-small-arrow.png',
                tooltip:'Cetak',
                handler: function(grid, rowIndex, colIndex){
                    var rec = grid.getStore().getAt(rowIndex);
                    var conn = new Ext.data.Connection();

                    window.open('services/report/evaluasiRpt.php?c_evalbu_id='+rec.get('c_evalbu_id'));
                    /*conn.request({
                        method: 'GET',
                        url: 'services/report/evaluasiRpt.php',
                        params:{
                            c_evalbu_id: rec.get('c_evalbu_id')
                        },
                        success: function() {
                            console.log('Berhasil');
                        }
                    });*/
                }
            }]

        }
    ],
    selModel: {
        selType: 'rowmodel'
    },
    plugins: [{
        ptype: 'rowexpander',
        rowBodyTpl: [
                '<div class="detailAhli">',
                '</div>',
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
        var detailAhli = Ext.DomQuery.select("div.detailAhli", expandRow);
        var detailEval = Ext.DomQuery.select("div.detailEval", expandRow);

        var storeahli = Ext.create('Ext.data.Store', {
            storeId: 'bustore',
            model: 'Extlp.model.EvalBu', //#2
            autoload: true,
            proxy: {
                type: 'ajax', //#3
                url: 'services/crud/listAhliByEvalId.php?evalbu_id='+record.data.c_evalbu_id, //#4
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

        var ahliGrid = Ext.create('Ext.grid.Panel', {
            store: storeahli,
            columns: [
                {xtype: 'rownumberer'},
                { text: "Nama", dataIndex: 'c_da_nama' ,menuDisabled : true,resizable:false},
                { text: "Status", dataIndex: 'c_da_status' ,menuDisabled : true,resizable:false},
                { text: "Masa Berlaku", columns: [
                    {text:'SKA', dataIndex: 'c_da_ska'},
                    {text:'SKTK', dataIndex: 'c_da_sktk'}]
                }
            ],
            columnLines: false,
            autoWidth: true,
            autoHeight: true,
            frame: false,
            iconCls: 'icon-grid',
            renderTo: detailAhli[0],
            preventHeader: true

        });

        var evalGrid = Ext.create('Ext.grid.Panel', {
            store: storeeval,
            columns: [
                {xtype: 'rownumberer'},
                { text: "K / SK / KSO", dataIndex: 'c_de_kskkso' ,menuDisabled : true,resizable:false},
                { text: "NKPK", dataIndex: 'c_de_nkpk' ,menuDisabled : true,resizable:false},
                { text: "Tahun Kontrak", dataIndex: 'c_de_thnkontrak' ,menuDisabled : true,resizable:false},
                { text: "Dimohon", columns: [
                    {text:'Klasifikasi', dataIndex: 'c_de_klasifikasi_d'},
                    {text:'Subklasifikasi', dataIndex: 'c_de_subkla_d'},
                    {text:'Subkualifikasi', dataIndex: 'c_de_subkua_d'}]
                },
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

        ahliGrid.getStore().load();

        evalGrid.getStore().load();

        ahliGrid.getEl().swallowEvent([
                    'mousedown', 'mouseup', 'click',
                    'contextmenu', 'mouseover', 'mouseout',
                    'dblclick', 'mousemove'
                ]);
    },

    onCollapseNestedGrid : function (rowNode, record, expandRow, eOpts) {
        var detailAhli = Ext.DomQuery.select("div.detailAhli", expandRow);
        var detailEval = Ext.DomQuery.select("div.detailEval", expandRow);
        var parent = detailAhli[0];
        var parent1 = detailEval[0];
        var child = parent.firstChild;
        var child1 = parent1.firstChild;

        while (child) {
            child.parentNode.removeChild(child);
            child = child.nextSibling;
        }

        while (child1) {
            child1.parentNode.removeChild(child1);
            child1 = child1.nextSibling;
        }
    }
});