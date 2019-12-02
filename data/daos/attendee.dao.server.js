const userModel = require('../models/user/user.model.server');

//User whose _id is userId attends an event whose _id is eventId
attendEvent = (userId, eventId) =>
    userModel.update({_id:userId}, {$push : {'attendee.events':eventId}});

//User  whose _id is userId follows organizer whose _id is organizerId
followOrganizer = (userId, organizerId) => {
    return Promise.all([
        userModel.update({_id: userId}, {$push: {'attendee.following': organizerId}}),
        userModel.update({_id: organizerId}, {$push: {'organizer.followers': userId}})
    ]);
};
// find attendees events
listAttendeeEvents = userId =>
    userModel.find({_id: userId}, {_id: 0, 'attendee.events': 1});

// find attendee's following organizers
listAttendeeOrganizers = userId =>
  userModel.find({_id:userId}, {_id:0, 'attendee.following':1});


//user chooses to cancel going to event with event _id eventId
unattendEvent = (userId, eventId) =>
    userModel.update({_id:userId}, {$pull: {'attendee.events':eventId}});

//user chooses to unfollow an organization
unfollowOrganizer = (userId, organizerId) =>
    userModel.update({_id:userId}, {$pull: {'attendee.following':organizerId}});

module.exports = {
    attendEvent, followOrganizer, listAttendeeEvents, listAttendeeOrganizers, unattendEvent, unfollowOrganizer
};
