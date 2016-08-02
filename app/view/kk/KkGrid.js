Ext.define('Extlp.view.kk.KkGrid', {
	extend: 'Ext.grid.Panel',
	xtype: 'kk-grid',
	// store: Ext.data.StoreManager.lookup('bustore'),
	store: 'Kk',
	columns: [     
        {
            width: 100,
            dataIndex: 'c_evalbu_nrbu',
            text: 'NRBUS',
            editor:'textfield'
        },
        {
            width: 250,
            dataIndex: 'c_bu_nama',
            text: 'Nama Badan Usaha',
            flex: 1
        },{
            xtype:'actioncolumn',
            text:'Cetak',
            items:[{
                tooltip:'Cetak',
                handler: function(grid, rowIndex, colIndex){
                    var rec = grid.getStore().getAt(rowIndex);
                    var conn = new Ext.data.Connection();
                    conn.request({
                        method: 'POST',
                        url: 'services/crud/updateKK.php',
                        params:{
                            c_evalbu_id: rec.get('c_evalbu_id')
                        },
                        success: function() {
                            console.log('Berhasil');
                        }
                    });
                }
            }]

        }
    ]
});