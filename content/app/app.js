/// <reference path="../lib/ui/bootstrap/bootstrap.js" />
/// <reference path="../lib/common/jquery/jquery.js" />
/// <reference path="../lib/editors/wyswig/bootstrap3-wysihtml5.js" />



// Data Bind Api Resources
var base_path = "http://104.236.60.234:3003";

$('ul[data-resource]').each(function (e,element) {
    var resource_path = base_path + $(element).attr('data-resource');

    $.get(resource_path, {}, function (data) {
        console.log(data);
    });

    console.log(resource_path);
});



