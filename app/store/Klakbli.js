Ext.define('Extlp.store.Klakbli', {
    extend: 'Ext.data.Store',
    model: 'Extlp.model.Klakbli', //#2
    autoload: true,
    proxy: {
        type: 'ajax', //#3
        url: 'services/crud/lookupKla.php', //#4
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