var endpoints = {
    'title': "http://netflixroulette.net/api/api.php?title=",
    'actor': "http://netflixroulette.net/api/api.php?actor=",
    'director': "http://netflixroulette.net/api/api.php?director="
};

var titleUndefinedError = new Error("title is not an optional parameter");
var titleNotStringError = new TypeError("title is not of type string");

// API functions (entry-points of this module)
module.exports = {
    title: function(title, year) {
        // Error check: title must be defined
        if (title === undefined) {
            throw titleUndefinedError;
            return null;
        }

        // Error check: title must be string
        if (typeof title !== 'string') {
            throw titleNotStringError;
            return null;
        }

        // Encode title for request URL
        encodedTitle = encodeCallParameters(title);
        // Create final NetflixRoulette request URL
        requestURL = endpoints.title + encodedTitle;

        // If user defines year, it must be added to request URL
        if (year !== undefined) {
            // Error check: year must be number
            if (typeof year !== 'number') {
                throw yearNotNumberError;
                return null;
            }

            // Append year parameter to URL
            requestURL = requestURL + '&year=' + parseInt(year, 10);
        }

        return requestURL;
    }

    // actor: function(actor) {

    // }

    // director: function(director) {

    // }
}

function encodeCallParameters(searchString) {
    var querystring = require('querystring');
    return querystring.escape(searchString);
}
