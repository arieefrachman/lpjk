Ext.define('Extlp.store.Subklakbli', {
    extend: 'Ext.data.Store',
    fields:['c_subklakbli_id','c_klakbli_id'],
    proxy: {
        type: 'ajax', //#3
        url: 'services/crud/lookupSubklakbli.php', //#4
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