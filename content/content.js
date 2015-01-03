/// <reference path="lib/common/headjs/head.js" />


console.log('content.js loaded');

console.log(window.location);

function loadCss(complete_callback){
    head.load('style/bootstrap/bootstrap.css',
              'style/bootstrap/bootstrap-theme.css',
              'style/animate/animate.css',
              'style/font-awesome/font-awesome.css',
              'lib/editors/wyswig/bootstrap3-wysihtml5.css',
              function () {
                  // Load Global Application Style 
                  head.load('style/cosmo.css'
                  );
              }
    );

    if (complete_callback) {
        complete_callback();
    }
}


function loadLibraries(complete_callback) {
    head.load('lib/common/jquery/jquery.js', function () {
        console.log("jquery loaded");
    });
    
    head.load('lib/ui/bootstrap/bootstrap.js', function () {
        console.log("bootstrap loaded");
    });

    head.load('lib/editors/wyswig/bootstrap3-wysihtml5.all.js');

    if (complete_callback) {
        complete_callback();
    }
};


loadCss(function () {
    console.log("loading css");
});

loadLibraries(function () {
    console.log("libraries loaded");
    head.load('app/app.js', function () {
        console.log('application loaded');
    });
});