var endpoints = {
    'title': "http://netflixroulette.net/api/api.php?title=",
    'actor': "http://netflixroulette.net/api/api.php?actor=",
    'director': "http://netflixroulette.net/api/api.php?director="
};

var titleUndefinedError = new Error("title must be defined");
var titleNotStringError = new TypeError("title must be of type string");
var yearNotNumberError = new TypeError("year must be of type number");

var actorUndefinedError = new Error("actor must be defined");
var actorNotStringError = new TypeError("actor must be of type string");

var directorUndefinedError = new Error("director must be defined");
var directorNotStringError = new TypeError("director must be of type string");

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
    },

    actor: function(actor) {
        // Error check: actor must be defined
        if (actor === undefined) {
            throw actorUndefinedError;
            return null;
        }

        // Error check: actor must be string
        if (typeof actor !== 'string') {
            throw actorNotStringError;
            return null;
        }

        // Encode actor for request URL
        encodedActor = encodeCallParameters(actor);
        // Create final NetflixRoulette request URL
        requestURL = endpoints.actor + encodedActor;

        return requestURL;
    },

    director: function(director) {
        // Error check: director must be defined
        if (director === undefined) {
            throw directorUndefinedError;
            return null;
        }

        // Error check: director must be string
        if (typeof director !== 'string') {
            throw directorNotStringError;
            return null;
        }

        // Encode director for request URL
        encodedDirector = encodeCallParameters(director);
        // Create final NetflixRoulette request URL
        requestURL = endpoints.director + encodedDirector;

        return requestURL;
    }
};

function encodeCallParameters(searchString) {
    var querystring = require('querystring');
    return querystring.escape(searchString);
}
