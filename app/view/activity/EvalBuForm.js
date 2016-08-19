Ext.define('Extlp.view.activity.EvalBuForm', {
	extend: 'Ext.window.Window',
	id: 'formbu',
	xtype: 'evalbu-form',
	controller: 'c_evalbu',
	closeAction: 'destroy',
	height: 570,
	width: 1200,
	layout: {
		type: 'fit'
	},
	title: 'Add Activity',
	modal: true,
	autoScroll: true,
	items: [{
		xtype: 'tabpanel',
		width:10,
		height:10,
		items:[{
			title: 'Badan Usaha',
			items:[{
				xtype:'form',
				id: 'buform',
				bodyPadding: 5,
				items:[{
					xtype: 'combobox',
					name: 'c_bu_id',
					allowBlank: false,
					fieldLabel: 'Badan Usaha',
					emptyText: '',
					triggerAction: 'all',
					forceSelection: true,
					queryMode: 'local',
					minChars: 1,
					typeAhead: true,
					displayField:'c_bu_nama',
					valueField:'c_bu_id',
					labelWidth: 120,
					margins: '0 10 0 0',
					store: {
						autoLoad: true,
						fields: ['c_bu_nama','c_bu_id'],
						proxy: {
							type: 'ajax',
							url: 'services/crud/lookupBu.php'
						}
					}
				},{
					xtype:'textfield',
					fieldLabel:'Nama PJBU',
					labelWidth: 120,
					name: 'c_evalbu_bpju'
				},
					{
						xtype:'textfield',
						fieldLabel:'No NPWP',
						labelWidth: 120,
						name: 'c_evalbu_nonpwp'
					},{
						xtype:'textfield',
						fieldLabel:'No KTP',
						labelWidth: 120,
						name: 'c_evalbu_noktp'
					},{
						xtype: 'combobox',
						name: 'c_jnsbu_id',
						allowBlank: false,
						fieldLabel: 'Bentuk Usaha',
						emptyText: '',
						triggerAction: 'all',
						forceSelection: true,
						queryMode: 'local',
						minChars: 1,
						typeAhead: true,
						displayField:'c_jnsbu_nama',
						valueField:'c_jnsbu_id',
						labelWidth: 120,
						margins: '0 10 0 0',
						store: {
							autoLoad: true,
							fields: ['c_jnsbu_nama','c_jnsbu_id'],
							proxy: {
								type: 'ajax',
								url: 'services/crud/lookupjnsBu.php'
							}
						},
						listeners:{
							select : function (cmb, record, options) {
								if(record.data.c_jnsbu_nama == 'PT'){
									Ext.getCmp('c_evalbu_kb').setDisabled(false);
									Ext.getCmp('c_evalbu_ms').setDisabled(false);
								}else{
									Ext.getCmp('c_evalbu_kb').setDisabled(true);
									Ext.getCmp('c_evalbu_ms').setDisabled(true);
								}
							}
						},
					},{
						xtype: 'combobox',
						name: 'c_assoc_id',
						allowBlank: false,
						fieldLabel: 'Asosiasi',
						emptyText: '',
						triggerAction: 'all',
						forceSelection: true,
						queryMode: 'local',
						minChars: 1,
						typeAhead: true,
						displayField:'c_assoc_nama',
						valueField:'c_assoc_id',
						labelWidth: 120,
						margins: '0 10 0 0',
						store: {
							autoLoad: true,
							fields: ['c_assoc_nama','c_assoc_id'],
							proxy: {
								type: 'ajax',
								url: 'services/crud/lookupAssoc.php'
							}
						}
					},{
						xtype: 'combobox',
						name: 'c_kbli_id',
						allowBlank: false,
						fieldLabel: 'Jenis Badan Usaha',
						emptyText: '',
						triggerAction: 'all',
						forceSelection: true,
						queryMode: 'local',
						minChars: 1,
						typeAhead: true,
						displayField:'c_kbli_nama',
						valueField:'c_kbli_id',
						labelWidth: 120,
						margins: '0 10 0 0',
						store: {
							autoLoad: true,
							fields: ['c_kbli_nama','c_kbli_id'],
							proxy: {
								type: 'ajax',
								url: 'services/crud/lookupKbli.php'
							}
						}
					},{
						xtype:'textfield',
						fieldLabel:'Kekayaan Bersih',
						labelWidth: 120,
						name: 'c_evalbu_kb',
						id: 'c_evalbu_kb'

					},{
						xtype:'textfield',
						fieldLabel:'Modal Setor',
						labelWidth: 120,
						name: 'c_evalbu_ms',
						id: 'c_evalbu_ms'
					},{
						xtype:'textarea',
						fieldLabel: 'Keterangan',
						labelWidth: 120,
						name: 'c_evalbu_ket',
						id: 'c_evalbu_ket'
					}]
			}]
		},{
			title: 'Ahli',
			items:[{
				xtype:'form',
				id: 'ahliform',
				bodyPadding: 5,
				items:[{
					xtype:'textfield',
					fieldLabel:'Nama TK',
					name: 'c_da_nama'
				},{
					xtype:'textfield',
					fieldLabel:'PJP / PJK',
					name: 'c_da_status'
				},{
					xtype:'textfield',
					fieldLabel:'No KTP',
					name: 'c_da_noktp'
				},{
					xtype:'combobox',
					fieldLabel:'Jenis TK',
					name: 'c_da_sub',
					store:'Sub',
					displayField: 'c_sub_nama',
					valueField: 'c_sub_id',
					queryMode: 'local',
					listeners:{
						change : function (field, newValue, oldValue) {

							var combotkt = Ext.getCmp('c_da_tingkat');

						},
						select : function (cmb, record, options) {


							var autosCbx = Ext.getCmp('c_da_tingkat'),
								autosStore = autosCbx.getStore();

							autosCbx.clearValue();
							autosStore.clearFilter();
							autosStore.filterBy(function (item) {
								return item.get('c_kuaprof_trampil') === record.get('c_sub_nama');
							})
							autosCbx.enable();

							Ext.getCmp('c_da_tingkat').store.reload();

						}
					}
				},{
					xtype: 'combobox',
					name: 'c_assoc_id',
					allowBlank: false,
					fieldLabel: 'Asosiasi',
					emptyText: '',
					triggerAction: 'all',
					forceSelection: true,
					queryMode: 'local',
					minChars: 1,
					typeAhead: true,
					displayField:'c_assoc_nama',
					valueField:'c_assoc_id',

					margins: '0 10 0 0',
					store: {
						autoLoad: true,
						fields: ['c_assoc_nama','c_assoc_id'],
						proxy: {
							type: 'ajax',
							url: 'services/crud/lookupAssoc.php'
						}
					}
				},{
					xtype:'textfield',
					fieldLabel:'No Reg',
					name: 'c_da_noreg'
				},{
					xtype:'combobox',
					store: 'Tingkat',
					name: 'c_da_tingkat',
					id: 'c_da_tingkat',
					fieldLabel:'Tingkat',
					name: 'c_kuaprof_tingkat',
					queryMode: 'local',
					displayField: 'c_kuaprof_ahli',
					valueField: 'c_kuaprof_ahli'
				},{
					fieldLabel: 'SKA',
					xtype: 'datefield',
					minDate: new Date(),
					format: 'Y-m-d',
					id: 'c_da_ska',
					listeners: {
						render: function(){
							var picker = this.getPicker();
							picker.on("select",function(){ this.hide(); });
							this.triggerCell.hide();
							this.inputCell.on("click",function(){
								if(picker.hidden)
									picker.show();
								else
									picker.hide();
							});
						}
					}
				},{
					fieldLabel: 'SKTK',
					xtype: 'datefield',
					minDate: new Date(),
					format: 'Y-m-d',
					id: 'c_da_sktk',
					listeners: {
						render: function(){
							var picker = this.getPicker();
							picker.on("select",function(){ this.hide(); });
							this.triggerCell.hide();
							this.inputCell.on("click",function(){
								if(picker.hidden)
									picker.show();
								else
									picker.hide();
							});
						}
					}
				}],
				buttons:[{
					text: 'Tambah',
					handler: function(){
						var form = this.up('form');
						var nama = Ext.getCmp('ahliform').getForm().findField('c_da_nama').getValue();
						var status = Ext.getCmp('ahliform').getForm().findField('c_da_status').getValue();
						var sub = Ext.getCmp('ahliform').getForm().findField('c_da_sub').getValue();
						var assoc = Ext.getCmp('ahliform').getForm().findField('c_assoc_id').getValue();
						var noreg = Ext.getCmp('ahliform').getForm().findField('c_da_noreg').getValue();
						var tingkat = Ext.getCmp('ahliform').getForm().findField('c_da_tingkat').getValue();
						var ska = Ext.getCmp('ahliform').getForm().findField('c_da_ska').getValue();
						var sktk = Ext.getCmp('ahliform').getForm().findField('c_da_sktk').getValue();
						var noktp = Ext.getCmp('ahliform').getForm().findField('c_da_noktp').getValue();
						var r = Ext.create('Extlp.model.EvalBu',{
							c_da_nama: nama,
							c_da_status: status,
							c_da_sub: sub,
							c_assoc_id: assoc,
							c_da_noreg: noreg,
							c_da_tingkat: tingkat,
							c_da_ska: ska,
							c_da_sktk: sktk,
							c_da_noktp: noktp
						});

						Ext.getStore('TmpAhliStore').insert(Ext.getStore('TmpAhliStore').data.items.length,r);
						Ext.getCmp('ahliform').reset();
					}
				}]
			},{
				xtype: 'grid',

				id: 'gridahli',
				store: 'TmpAhliStore',
				columns:[
					{ text: 'Nama', dataIndex: 'c_da_nama' },
					{ text: 'Status', dataIndex: 'c_da_status'},
					{ text: 'No KTP', dataIndex: 'c_da_noktp'},
					{ text: 'Tanggal Cetak', columns:[{
						text:'SKA',dataIndex:'c_da_ska', xtype: 'datecolumn',format: 'Y-m-d'
					},{
						text: 'SKTK', dataIndex: 'c_da_sktk', xtype: 'datecolumn',format: 'Y-m-d'
					}]
					}
				],
				height: 200,
				width: 500,
				listeners: {
					itemcontextmenu: function (view, record, item, i, e, opt) {
						e.preventDefault();
						var menu = new Ext.menu.Menu({
							items: [{
								text: 'Hapus',
								handler: function() {
									var sm = Ext.getCmp('gridahli').getSelectionModel();
									Ext.getStore('TmpAhliStore').remove(sm.getSelection());
								}
							}]
						}).showAt(e.getXY());
						return false;
					}
				}
			}]
		},{
			title: 'Evaluasi',
			autoScroll: true,
			items:[{
				xtype:'form',
				id: 'evaldetform',
				bodyPadding: 5,
				autoScroll: true,
				items:[{
					xtype:'textfield',
					fieldLabel:'K/SK/KSO',
					labelWidth: 160,
					name:'c_de_kskkso'
				},{
					xtype:'textfield',
					fieldLabel:'NKPK',
					labelWidth: 160,
					name: 'c_de_nkpk'
				},{
					xtype:'textfield',
					fieldLabel:'Tahun Kontrak',
					labelWidth: 160,
					name: 'c_de_thnkontrak'
				}, {
					xtype: 'combobox',
					id: 'c_klakbli_id',
					store: 'Klakbli',
					displayField: 'c_klakbli_id',
					valueField: 'c_klakbli_desc',
					typeAhead: true,
					//editable: false,
					queryMode: 'local',
					//forceSelection: true,
					//multiSelect: false,
					triggerAction: 'all',
					fieldLabel: 'Klasifikasi (Evaluasi)',
					//selectOnFocus: false,
					store: {
						autoLoad: true,
						fields: ['c_klakbli_id','c_klakbli_desc'],
						proxy: {
							type: 'ajax',
							url: 'services/crud/lookupKla.php'
						}
					},
					labelWidth: 160,
					listeners:{
						select : function (cmb, record, options) {
							var autosCbx = Ext.getCmp('c_subklakbli_id'),
								autosStore = autosCbx.getStore();

							autosCbx.clearValue();
							autosStore.clearFilter();
							autosStore.filterBy(function (item) {
								return item.get('c_klakbli_id') === record.get('c_klakbli_id');
							})
							autosCbx.enable();
							Ext.getCmp('c_subklakbli_id').store.reload();
							Ext.getCmp('c_subkuakbli_kode').store.reload();
						}
					}
				},
					{
						xtype: 'combobox',
						id: 'c_subklakbli_id',
						store: 'Subklakbli',
						displayField: 'c_subklakbli_id',
						valueField: 'c_subklakbli_id',
						//typeAhead: false,
						//editable: false,
						queryMode: 'local',
						//forceSelection: true,
						//multiSelect: false,
						//triggerAction: 'all',
						fieldLabel: 'Subklasifikasi (Evaluasi)',
						//emptyText: 'Select a model...',
						//selectOnFocus: false,
						disabled: true,
						labelWidth: 160
					},
					{
						xtype:'combobox',
						id: 'c_subkuakbli_kode',
						store: 'Kuakbli',
						fieldLabel:'Subkualifikasi (Evaluasi)',
						displayField: 'c_subkuakbli_kode',
						valueField: 'c_subkuakbli_kode',
						labelWidth: 160,
						name: 'c_subkuakbli_kode'
					}],
				buttons:[{
					text: 'Tambah',
					handler: function(){
						var form = this.up('form');
						var kskkso = Ext.getCmp('evaldetform').getForm().findField('c_de_kskkso').getValue();
						var nkpk = Ext.getCmp('evaldetform').getForm().findField('c_de_nkpk').getValue();
						var thnkontrak = Ext.getCmp('evaldetform').getForm().findField('c_de_thnkontrak').getValue();
						var kalsifikasi_e = Ext.getCmp('evaldetform').getForm().findField('c_klakbli_id').getValue();
						var subklasifikasi_e = Ext.getCmp('evaldetform').getForm().findField('c_subklakbli_id').getValue();
						var subkualifiakasi_e = Ext.getCmp('evaldetform').getForm().findField('c_subkuakbli_kode').getValue();
						var r = Ext.create('Extlp.model.EvalBu',{
							c_de_kskkso: kskkso,
							c_de_nkpk: nkpk,
							c_de_thnkontrak: thnkontrak,
							c_de_klasifikasi_e: kalsifikasi_e,
							c_de_subkla_e: subklasifikasi_e,
							c_de_subkua_e: subkualifiakasi_e
						});
						Ext.getStore('TmpEvalStore').insert(Ext.getStore('TmpEvalStore').data.items.length,r);
						Ext.getCmp('evaldetform').reset();
					}
				}],
			},{
				xtype: 'grid',
				store: 'TmpEvalStore',
				id: 'grideval',
				autoScroll: true,
				enableRowBody: true,
				width: 600,
				columns:[
					{ text: 'K / SK / KSO', dataIndex: 'c_de_kskkso' },
					{ text: 'NKPK', dataIndex: 'c_de_nkpk' },
					{ text: 'Tahun', dataIndex: 'c_de_thnkontrak' },
					/*{ text: 'Dimohon', columns:[{
					 text:'Klasifikasi', dataIndex:'c_de_klasifikasi_d'
					 },{
					 text:'Subklasifikasi', dataIndex:'c_de_subkla_d'
					 },{
					 text:'Subkualifikasi', dataIndex:'c_de_subkua_d'
					 }]
					 },*/
					{ text: 'Hasil Evaluasi', columns:[{
						text:'Klasifikasi', dataIndex:'c_de_klasifikasi_e'
					},{
						text:'Subklasifikasi', dataIndex:'c_de_subkla_e'
					},{
						text:'Subkualifikasi', dataIndex:'c_de_subkua_e'
					}]
					}
				],
				height: 200,
				listeners: {
					itemcontextmenu: function (view, record, item, i, e, opt) {
						e.preventDefault();
						var menu = new Ext.menu.Menu({
							items: [{
								text: 'Hapus',
								handler: function() {
									var sm = Ext.getCmp('grideval').getSelectionModel();
									Ext.getStore('TmpEvalStore').remove(sm.getSelection());
								}
							}]
						}).showAt(e.getXY());
						return false;
					}
				}
			}]
		}]
	}],
	dockedItems:[{
		xtype: 'toolbar',
		dock: 'bottom',
		items:[{
			xtype:'button',
			text: 'Simpan',
			handler: function(){
				var conn = new Ext.data.Connection();
				var detEval = Ext.encode(Ext.pluck(Ext.getStore('TmpEvalStore').data.items,'data'));
				var detAhli = Ext.encode(Ext.pluck(Ext.getStore('TmpAhliStore').data.items,'data'));
				var namabu  =  Ext.getCmp('buform').getForm().findField('c_bu_id').getValue();
				var kb      =  Ext.getCmp('buform').getForm().findField('c_evalbu_kb').getValue();
				var ms      =  Ext.getCmp('buform').getForm().findField('c_evalbu_ms').getValue();
				var noktp   =  Ext.getCmp('buform').getForm().findField('c_evalbu_noktp').getValue();
				var bpju    =  Ext.getCmp('buform').getForm().findField('c_evalbu_bpju').getValue();
				var jnsbu   =  Ext.getCmp('buform').getForm().findField('c_jnsbu_id').getValue();
				var assoc   =  Ext.getCmp('buform').getForm().findField('c_assoc_id').getValue();
				var nonpwp  =  Ext.getCmp('buform').getForm().findField('c_evalbu_nonpwp').getValue();
				var kbli  =  Ext.getCmp('buform').getForm().findField('c_kbli_id').getValue();
				var ket  =  Ext.getCmp('buform').getForm().findField('c_evalbu_ket').getValue();

				conn.request({
					method: 'POST',
					url: 'services/crud/insertEvalBu.php',
					params:{
						namabu: namabu,
						kb: kb,
						ms: ms,
						noktp: noktp,
						bpju: bpju,
						jnsbu: jnsbu,
						assoc: assoc,
						nonpwp: nonpwp,
						kbli: kbli,
						ket: ket,
						detEval: detEval,
						detAhli: detAhli
					},
					success: function() {
						console.log('Berhasil');
					}
				});
				//Ext.getCmp('formbu').hide();
				Ext.getStore('TmpEvalStore').removeAll();
				Ext.getStore('TmpAhliStore').removeAll();
				//Ext.getCmp('eval-grid').store.reload();
			}
		}]
	}]
});