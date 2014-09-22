var endpoints = {
    'title': "http://netflixroulette.net/api/api.php?title=",
    'actor': "http://netflixroulette.net/api/api.php?actor=",
    'director': "http://netflixroulette.net/api/api.php?director="
};

var titleUndefinedError = new Error("'title' must be defined");
var titleNotStringError = new TypeError("'title' must be of type string");
var yearNotNumberError = new TypeError("'year' must be of type number");

var actorUndefinedError = new Error("'actor' must be defined");
var actorNotStringError = new TypeError("'actor' must be of type string");

var directorUndefinedError = new Error("'director' must be defined");
var directorNotStringError = new TypeError("'director' must be of type string");

// API functions (entry-points of this module)
module.exports = {
    title: function(title, parentCallback, year) {
        // Error check: title must be defined
        if (title === undefined) {
            throw titleUndefinedError;
            return;
        }

        // Error check: title must be string
        if (typeof title !== 'string') {
            throw titleNotStringError;
            return;
        }

        // Encode title for request URL
        encodedTitle = require('querystring').escape(title);
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

        getJSON(requestURL, function(error, data) {
            parentCallback(error, data);
        });
    },

    actor: function(actor, parentCallback) {
        // Error check: actor must be defined
        if (actor === undefined) {
            throw actorUndefinedError;
            return;
        }

        // Error check: actor must be string
        if (typeof actor !== 'string') {
            throw actorNotStringError;
            return;
        }

        // Encode actor for request URL
        encodedActor = require('querystring').escape(actor);
        // Create final NetflixRoulette request URL
        requestURL = endpoints.actor + encodedActor;

        getJSON(requestURL);
    },

    director: function(director, parentCallback) {
        // Error check: director must be defined
        if (director === undefined) {
            throw directorUndefinedError;
            return;
        }

        // Error check: director must be string
        if (typeof director !== 'string') {
            throw directorNotStringError;
            return;
        }

        // Encode director for request URL
        encodedDirector = require('querystring').escape(director);
        // Create final NetflixRoulette request URL
        requestURL = endpoints.director + encodedDirector;

        getJSON(requestURL);
    }
};

function getJSON(requestURL, callback) {
    var request = require('request');
        console.log(requestURL)
        request({
            url: requestURL,
            json: true
        }, function(error, response, data) {
            callback(error, data);
        });
}
