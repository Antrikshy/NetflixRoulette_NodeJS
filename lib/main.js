// Module dependencies
var request = require('request');
var querystring = require('querystring');

// NetflixRoulette API request URLs
var endpoints = {
    'title': "http://netflixroulette.net/api/api.php?title=",
    'actor': "http://netflixroulette.net/api/api.php?actor=",
    'director': "http://netflixroulette.net/api/api.php?director="
};

// Errors (thrown during error-checking)
var titleNotStringError = new TypeError("'title' must be of type string.");
var yearNotNumberError = new TypeError("'year' must be of type number.");
var actorNotStringError = new TypeError("'actor' must be of type string.");
var directorNotStringError = new TypeError("'director' must be of type string.");
var callbackUndefinedError = new Error("Callback function must be defined.")

// API functions (entry-points of this module)
module.exports = {
    title: function(title, parentCallback, year) {
        // Error check: title must be string
        if (typeof title !== 'string') {
            throw titleNotStringError;
            return;
        }

        // Error check: parentCallback must be defined
        if (parentCallback == undefined || typeof parentCallback !== 'function') {
            throw callbackUndefinedError;
            return;
        }

        // Encode title for request URL
        encodedTitle = querystring.escape(title);
        // Create final NetflixRoulette request URL
        requestURL = endpoints.title + encodedTitle;

        // If user defines year, it must be added to request URL
        if (year !== undefined) {
            // Error check: year must be number
            if (typeof year !== 'number') {
                throw yearNotNumberError;
                return;
            }

            // Append year parameter to URL
            requestURL = requestURL + '&year=' + parseInt(year, 10);
        }

        // Get JSON fron NetflixRoulette, pass data into parent's callback
        getJSON(requestURL, function(error, data) {
            parentCallback(error, data);
        });
    },

    actor: function(actor, parentCallback) {
        // Error check: actor must be string
        if (typeof actor !== 'string') {
            throw actorNotStringError;
            return;
        }

        // Error check: parentCallback must be defined
        if (parentCallback == undefined || typeof parentCallback !== 'function') {
            throw callbackUndefinedError;
            return;
        }

        // Encode actor for request URL
        encodedActor = querystring.escape(actor);
        // Create final NetflixRoulette request URL
        requestURL = endpoints.actor + encodedActor;

        // Get JSON fron NetflixRoulette, pass data into parent's callback
        getJSON(requestURL, function(error, data) {
            parentCallback(error, data);
        });
    },

    director: function(director, parentCallback) {
        // Error check: director must be string
        if (typeof director !== 'string') {
            throw directorNotStringError;
            return;
        }

        // Error check: parentCallback must be defined
        if (parentCallback == undefined || typeof parentCallback !== 'function') {
            throw callbackUndefinedError;
            return;
        }

        // Encode director for request URL
        encodedDirector = querystring.escape(director);
        // Create final NetflixRoulette request URL
        requestURL = endpoints.director + encodedDirector;

        // Get JSON fron NetflixRoulette, pass data into parent's callback
        getJSON(requestURL, function(error, data) {
            parentCallback(error, data);
        });
    }
};

// Retreives JSON, uses passed in callback to 'return' data to caller-scope
function getJSON(requestURL, callback) {
    request({
        url: requestURL,
        json: true
    }, function(error, response, data) {
        // Calls callback passed by one of the API functions
        callback(error, data);
    });
}
