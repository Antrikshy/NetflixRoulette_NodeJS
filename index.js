var endpoints = {
    'title': "http://netflixroulette.net/api/api.php?title=",
    'actor': "http://netflixroulette.net/api/api.php?actor=",
    'director': "http://netflixroulette.net/api/api.php?director="
};



// API functions (entry-points of this module)
module.exports = {
    title: function(title, year, callback) {
        // TODO: Error checking: title must be defined, title must be string,
        //       year must be int.


        encodedTitle = encodeCallParameters(title);
        requestURL = endpoints.title + encodedTitle;

        if (year !== undefined) {
            requestURL = requestURL + '&year=' + parseInt(year, 10);
        }

        return requestURL;
    }

    // actor: function(actor, callback) {

    // }

    // director: function(director, callback) {

    // }
}

function encodeCallParameters(searchString) {
    var querystring = require('querystring');
    return querystring.escape(searchString);
}
