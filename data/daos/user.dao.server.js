const userModel = require('../models/user/user.model.server');

createUser = user =>
    userModel.create(user);

loginUser = user =>
    userModel.findOne({email:user.email, password:user.password}, function (err, user) {
        if(!user){return "Not Found"}
        console.log(user);
        return user;
    });

findUserById = userId =>
    userModel.findById(userId);

findUserByEmail = email => 
    userModel.findOne({email:email}, function (err, user) {
        if(!user)
        {return "Not Found"}
        return user;
    });    

updateUser = (userId, user) =>
    userModel
        .updateOne({_id: userId},
            {$set: user});

deleteUser = userId =>
    userModel.deleteOne({_id:userId});

findAllUsers = () =>
    userModel.find();

module.exports = {
    createUser, 
    findUserById, 
    updateUser, 
    deleteUser, 
    findAllUsers, 
    loginUser,
    findUserByEmail
};
