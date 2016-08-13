Ext.define('Extlp.model.EvalBu', {
	extend: 'Ext.data.Model',
	field: ['c_evalbu_id','c_bu_id','c_bu_nama','c_bu_alamat','c_evalbu_kb','c_evalbu_nrbu',
			'c_da_nama','c_da_status','c_da_sub','c_da_tingkat','c_da_noktp',{name:'c_da_ska',type: "date", format: 'Y-m-d'},{name:'c_da_sktk',type: "date", format: 'Y-m-d'},
			'c_de_kskkso','c_de_nkpk','c_de_thnkontrak',
			'c_klakbli_id','c_klakbli_desc','c_subklakbli_id',
			'c_de_klasifikasi_e', 'c_subkuakbli_kode','c_de_subkla_e','c_de_subkua_e','name','value','c_klakbli_desc']
});