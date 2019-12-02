const userModel = require('../models/user/user.model.server');

createEvent = (organizerId, eventId) =>
    userModel.update({_id: organizerId}, {$push: {'organizer.events': eventId}});

cancelEvent = (organizerId, eventId) =>
    userModel.update({_id:organizerId}, {$pull : {'organizer.events':eventId}});

viewFollowers = organizerId =>
    userModel.find({_id: organizerId}, {_id: 0, 'organizer.followers': 1});

viewEvents = organizerId =>
    userModel.find({_id: organizerId}, {_id: 0, 'organizer.events': 1});


module.exports = {
    createEvent, cancelEvent, viewFollowers, viewEvents
}


