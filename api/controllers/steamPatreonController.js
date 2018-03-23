'use strict';


var mongoose = require('mongoose'),
  Match = mongoose.model('IdMatch');

exports.list_details_by_steam_id = function(req, res) {
    Match.findById(req.params.taskId, function(err, steamId) {
    if (err)
      res.send(err);
    res.json(steamId);
  });
};

exports.create_id_record = function(req, res) {
  var new_steam_patreon_match = new Match(req.body);
  new_steam_patreon_match.save(function(err, steamId) {
    if (err)
      res.send(err);
    res.json(steamId);
  });
};

// exports.read_a_task = function(req, res) {
//   Task.findById(req.params.taskId, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
// };

// exports.update_a_task = function(req, res) {
//   Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
// };


// exports.delete_a_task = function(req, res) {
//   Task.remove({
//     _id: req.params.taskId
//   }, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json({ message: 'Task successfully deleted' });
//   });
// };