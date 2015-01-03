

var routes = function (app, options) {
    var self = {}; //
    
    self.Api = require('./_api.js').Api(app, options.api);


    return self;
};

module.exports.routes = routes;