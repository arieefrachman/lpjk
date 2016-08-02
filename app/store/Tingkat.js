Ext.define('Extlp.store.Tingkat', {
    extend: 'Ext.data.Store',
    fields: ['c_kuaprof_id','c_kuaprof_ahli','c_kuaprof_trampil'], //#2
    proxy: {
        type: 'ajax', //#3
        url: 'services/crud/lookupTingkat.php', //#4
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