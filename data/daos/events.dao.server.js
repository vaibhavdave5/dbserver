const eventModel = require('../models/event/event.model.server');

createEvent = (userId, event) => {
    eventModel.create({
        organizationId: userId,
        eventId: event.eventId,
        eventImage: event.eventImage,
        address: event.address,
        latitude: event.latitude,
        longitude: event.longitude
    });
};

getEventByEventId = (eventId) =>
    eventModel.findOne({
        eventId: eventId
    }, function (err, event) {
        if (!event) {
            return "Not Found";
        }
        return event;
    });

module.exports = {
    createEvent,
    getEventByEventId
};
