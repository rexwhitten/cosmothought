/// <reference path="../lib/ui/bootstrap/bootstrap.js" />
/// <reference path="../lib/common/jquery/jquery.js" />
/// <reference path="../lib/editors/wyswig/bootstrap3-wysihtml5.js" />
// Data Bind Api Resources
var base_path = "http://104.236.60.234:3003";

$('ul[data-resource]').each(function (e,element) {
    var resource_path = base_path + $(element).attr('data-resource');

    $.ajax({
        url: resource_path,
        type: "GET",
        dataType: "application/json"
    }).done(function (data) {
        console.log("GET Request Complete");
        console.log(data);

        var $ul = $('<ul></ul>'); // results

        // Resource Rendering
        for (var index in data) {
             var $li = $('<li></li>');
             $li.append(index);
             $ul.append($li);
        }

        $(element).append($ul);
    });

    console.log(resource_path);
});



