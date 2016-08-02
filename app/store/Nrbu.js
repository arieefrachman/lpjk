Ext.define('Extlp.store.Nrbu', {
    extend: 'Ext.data.Store',
    model: 'Extlp.model.EvalBu', //#2
    proxy: {
        type: 'ajax', //#3
        url: 'services/crud/listNrbu.php', //#4
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