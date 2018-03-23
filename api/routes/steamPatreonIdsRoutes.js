'use strict';
module.exports = function(app) {
  var steamPatreonMatch = require('../controllers/steamPatreonController');

  app.route('/matchInfo')
    .get(steamPatreonMatch.list_details_by_steam_id)
    .post(steamPatreonMatch.create_id_record);

  app.route('/matchInfo/:steamId')
    .get(steamPatreonMatch.list_details_by_steam_id)
    .put(steamPatreonMatch.create_id_record);
};