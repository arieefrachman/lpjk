Ext.define("Extlp.Order",{
    extend: 'Ext.data.Model',
    fields: [
        'id', 'total'
    ]
});

Ext.define("Extlp.Detail", {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id'}, {name: 'price'}, {name: 'quantity'}, {name: 'order_id', reference: 'Order'}
    ],

    belongsTo: 'Order'
});

var data = {"orders": [
                        {
                            "id" : "O01",
                            "total": 100,
                            "order_items":[{
                                "id": "OI01",
                                "price": 100,
                                "quantity": 1
                            }]
                        },
                        {
                            "id" : "O02",
                            "total": 200,
                            "order_items":[{
                                "id": "OI02",
                                "price": 100,
                                "quantity": 2
                            }]
                        }
                      ]};


var store = Ext.create('Ext.data.Store', {
    model: "Extlp.Order",
    autoLoad: false,
    data : data,
    
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'orders'
        }
    }
});


Ext.create('Ext.data.Store', {
    storeId:'orderstore',
    fields:['orderid', 'amt', 'date'],
    data:{'items':[
        { 'orderid': 'O12',  "amt":"1000",  "date":"29/05/2015"  },
        { 'orderid': 'O121',  "amt":"1200",  "date":"29/05/2015" },
        { 'orderid': 'O122', "amt":"1100",  "date":"29/05/2015"  },
        { 'orderid': 'O123', "amt":"900", "date":"29/05/2015"  }
    ]},
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});

Ext.create('Ext.data.Store', {
    storeId:'nestedStore1',
    fields:['productid', 'productName', 'qty'],
    data:{'items':[
        { 'productid': 'pr-1',  "productName":"Orange",  "qty":"5"  },
        { 'productid': 'pr-2',  "productName":"Apple",  "qty":"6" },
        { 'productid': 'pr-3', "productName":"papaya",  "qty":"3"  },
        { 'productid': 'pr-4', "productName":"Mango", "qty":"9"  }
    ]},
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});


Ext.define('Extlp.NestedGrid',{
	extend:'Ext.grid.Panel',
	xtype:'nestedgrid',
	requires:['Ext.grid.Panel'],
    autoHeight:true,
    //store: Ext.data.StoreManager.lookup('orderstore'),
    store: store,
    columns: [
        { text: 'Order Id',  dataIndex: 'id' },
        { text: 'Amount', dataIndex: 'total', flex: 1 }
        //{ text: 'Date', dataIndex: 'date' }
    ],
    plugins:[{
                ptype:'rowexpander',
                rowBodyTpl: [
                '<div class="detailData">',
                '</div>']
             },
             {
                 ptype:'viewport'
             }      
            ],
    collapsible: true,
    animCollapse: false,
    title: 'Expander Rows in a Collapsable Grid',
    iconCls: 'icon-grid',
    initComponent: function () {
        var me = this;
        this.callParent(arguments);
        me.getView().on('expandBody', me.onExpandNestedGrid,me);
    },
    onExpandNestedGrid : function (rowNode, record, expandRow, eOpts) {
        var detailData = Ext.DomQuery.select("div.detailData", expandRow);

        //Model for the inside grid store
        Ext.define('TestModel', {
            extend: 'Ext.data.Model',
            fields: [
                { name: 'Field1' },
                { name: 'Field2' },
                { name: 'Field3' }
            ]
        });

        //dummy data for the inside grid
        var dummyDataForInsideGrid = [
            ['dummyRow1', 1, 2],
            ['dummyRow2', 1, 2],
            ['dummyRow3', 1, 3]

        ];

        var insideGridStore = Ext.create('Ext.data.ArrayStore', {
            model: 'TestModel',
            data: dummyDataForInsideGrid
        });

        var innerGrid = Ext.create('Ext.grid.Panel', {
            store: insideGridStore,
            columns: [
                {xtype: 'rownumberer'},
                { text: "Column1", dataIndex: 'Field1' ,menuDisabled : true,resizable:false},
                { text: "Column2", dataIndex: 'Field2' ,menuDisabled : true,resizable:false},
                { text: "Column3", dataIndex: 'Field3' ,menuDisabled : true,resizable:false}
            ],
            columnLines: false,
            autoWidth: true,
            autoHeight: true,
            frame: false,
            iconCls: 'icon-grid',
            renderTo: detailData[0],
            preventHeader: true

        });

        innerGrid.getEl().swallowEvent([
                    'mousedown', 'mouseup', 'click',
                    'contextmenu', 'mouseover', 'mouseout',
                    'dblclick', 'mousemove'
                ]);
    }
});