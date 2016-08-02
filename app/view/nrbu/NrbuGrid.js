Ext.define('Extlp.view.nrbu.NrbuGrid', {
	extend: 'Ext.grid.Panel',
	xtype: 'nrbu-grid',
	// store: Ext.data.StoreManager.lookup('bustore'),
	store: 'Nrbu',
	columns: [
        {
            width: 100,
            dataIndex: 'c_evalbu_id',
            text: 'NRBU',
            hidden: true
        },
        {
            width: 100,
            dataIndex: 'c_evalbu_nrbu',
            text: 'NRBU',
            editor: {
                xtype: 'textfield',
                allowBlank: false,
            }
        },
        {
            width: 250,
            dataIndex: 'c_bu_nama',
            text: 'Nama Badan Usaha',
            flex: 1
        }
    ],
    selModel:'rowmodel',
    plugins: {
        ptype: 'cellediting',
        clicksToEdit: 1
    },
    listeners: {
        edit: function () {
            var rec = this.getSelectionModel().getSelection()[0];
            var conn = new Ext.data.Connection();

            conn.request({
                method: 'POST',
                url: 'services/crud/updateNrbu.php',
                params:{
                    c_evalbu_id: rec.get('c_evalbu_id'),
                    c_evalbu_nrbu: rec.get('c_evalbu_nrbu')
                },
                success: function() {
                    console.log('Berhasil');
                }
            });
        }
    }
});