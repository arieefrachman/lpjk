Ext.define('Extlp.store.Nrbuupd', {
    extend: 'Ext.data.Store',
    model: 'Extlp.model.EvalBu', //#2
    proxy: {
        type: 'ajax', //#3
        url: 'services/crud/listNrbuupd.php', //#4
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