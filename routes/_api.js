
/// -----------------------------------
/// Api Module Defenition
/// -----------------------------------
var ApiModule = function (app, options) {
    var self = {};
    
    var levelup = require('levelup');
    var db = levelup('./apidb/', { valueEncoding: 'json' });
    var _user = levelup('./apidb/user', { valueEncoding: 'json' });
    var _event = levelup('./apidb/event', { valueEncoding: 'json' });

    
    var log = {};

    app.get('/api/*', function (req, res) {
        db.get(req.path, function (err, value) {
            var model = {};
            
            // Log Event 

            // Handle Error
            if (err) {
                model.err = err;
                console.log('leveldb:' + new Date() + err);
            }
            
            // Value
            model.value = value;
            
            console.log("[GET] " + req.path + " == " + model.value);
            // Build the response
            res.type('application/json');
            res.json(model);
        });
    });
    
    
    app.post('/api/*', function (req, res) {
        db.put(req.path, req.body, function (err) {
            var model = {};
            model.input = req.body;
            
            console.log('[POST] ' + req.path + ' = req.body = ' + JSON.stringify(req.body));
            
            // Handle Error
            if (err) {
                model.err = err;
                console.log('leveldb:' + new Date() + err);
            }
            
            console.log("[POST] " + req.path + " == " + req.body);
            // Build the response
            model.message = req.path + " saved.";
            res.type('application/json');
            res.json(model);
        });
    });



    return self;
};

module.exports.Api = ApiModule;