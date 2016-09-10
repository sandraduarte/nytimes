$(document).ready(function(){

	$('#runSearch').on('click', function() {
        var p = $("#searchTerm)".val(); 
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json" + p + "&api_key=eb240f09ad3340b68c5c63dcc8bf269f";

        $.ajax({ 
                url: queryURL,
                method: 'GET'
            })
        //when we're finished 'getting' the response
            .done(function(response) {
         
                }

            });

$('#clearAll').on('click', function() {
 //empty form fields
 //empty #wellSection

})// end of jQuery