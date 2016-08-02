Ext.define('Extlp.view.bu.BuGrid', {
	extend: 'Ext.grid.Panel',
	xtype: 'bu-grid',
	// store: Ext.data.StoreManager.lookup('bustore'),
	store: 'Bu',
	columns: [     
        {
            width: 200,
            dataIndex: 'c_bu_nama',
            flex: 1,
            text: 'Nama Badan Usaha'
        },
        {
            width: 250,
            dataIndex: 'c_bu_alamat',
            text: 'Alamat'
        },
        {
            width: 150,
            dataIndex: 'c_bu_tlp',
            text: 'Telfon'
        },
        {
            width: 150,
            dataIndex: 'c_bu_email',
            text: 'Email'
        },
        {
            width: 150,
            dataIndex: 'c_bu_website',
            text: 'Website'
        }
    ]
});