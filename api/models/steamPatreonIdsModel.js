'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SteamPatreonIdSchema = new Schema({
    name: {
        type: String,
        required: 'Enter the name of the user'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    steam_id: {
        type: String,
        required: 'Enter the Steam id'
    },
    patreon_id: {
        type: String,
        required: 'Enter the Patreon id'
    },
    patreon_level: {
        type: String,
        required: 'Enter the Patreon Subscriber Level'
    }
});

module.exports = mongoose.model('IdMatch', SteamPatreonIdSchema);