// Generated by CoffeeScript 1.9.3
(function() {
  var handleRes, querystring, request;

  request = require('request');

  querystring = require('querystring');

  module.exports = function(client_id, client_secret) {
    var credentials, date;
    date = '20131014';
    credentials = {
      'v': date,
      'client_id': client_id,
      'client_secret': client_secret
    };
    return {
      getCategories: function(params, callback) {
        var urlString;
        urlString = "https://api.foursquare.com/v2/venues/categories?" + querystring.stringify(credentials);
        return request(urlString, function(error, response, body) {
          return handleRes(response, body, callback);
        });
      },
      getVenues: function(params, callback) {
        var urlString;
        urlString = "https://api.foursquare.com/v2/venues/search?" + querystring.stringify(params) + '&' + querystring.stringify(credentials);
        return request(urlString, function(error, response, body) {
          return handleRes(response, body, callback);
        });
      },
      exploreVenues: function(params, callback) {
        var urlString;
        urlString = "https://api.foursquare.com/v2/venues/explore?" + querystring.stringify(params) + '&' + querystring.stringify(credentials);
        return request(urlString, function(error, response, body) {
          return handleRes(response, body, callback);
        });
      },
      getVenue: function(params, callback) {
        var urlString;
        urlString = "https://api.foursquare.com/v2/venues/" + params.venue_id + '?' + querystring.stringify(credentials);
        return request(urlString, function(error, response, body) {
          return handleRes(response, body, callback);
        });
      },
      getVenueHours: function(params, callback) {
        var urlString;
        urlString = "https://api.foursquare.com/v2/venues/" + params.venue_id + "/hours" + '?' + querystring.stringify(credentials);
        return request(urlString, function(error, response, body) {
          return handleRes(response, body, callback);
        });
      }
    };
  };

  handleRes = function(res, body, callback) {
    if (res.statusCode >= 300) {
      return callback(body, null);
    } else {
      return callback(null, JSON.parse(body));
    }
  };

}).call(this);
