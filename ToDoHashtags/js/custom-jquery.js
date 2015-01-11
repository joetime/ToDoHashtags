jQuery( document ).ready(function($) {	
    var numtags = 1;
    $("#addTag").click(function () {
        $("#tags").append('<textarea id="todotag' + numtags + '" class="todotag" rows="1" cols="20"></textarea>');
        numtags = numtags + 1;
    });
});
