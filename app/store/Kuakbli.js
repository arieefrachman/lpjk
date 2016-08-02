Ext.define('Extlp.store.Kuakbli', {
    extend: 'Ext.data.Store',
    fields: ['c_subkuakbli_id','c_subkuakbli_kode'], //#2
    autoload: true,
    proxy: {
        type: 'ajax', //#3
        url: 'services/crud/lookupSubkua.php', //#4
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