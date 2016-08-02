Ext.define('Extlp.store.Kk', {
    extend: 'Ext.data.Store',
    model: 'Extlp.model.EvalBu', //#2
    proxy: {
        type: 'ajax', //#3
        url: 'services/crud/listKk.php', //#4
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