const User = require('../models/User')
const mongoose = require('mongoose')

exports.getUsers = async (req, res) => {
  const users = await User.find().select('_id name email createdAt updatedAt')
  res.json(users)
};

exports.getAuthUser = () => {};

exports.getUserById = async (req, res, next, id) => {
  const user = await User.findOne({ _id: id })
  req.profile = user;

  const profileId = mongoose.Types.ObjectId(req.profile._id)

  if(profileId.equals(req.user._id)){
    req.isAuthUser = true;
    return next()
  }
  next()
};

exports.getUserProfile = () => {};

exports.getUserFeed = () => {};

exports.uploadAvatar = () => {};

exports.resizeAvatar = () => {};

exports.updateUser = () => {};

exports.deleteUser = async (req, res) => {
  const { userId } = req.params;

  const deletedUser = await User.findOneAndDelete({ _id: userId })
};

exports.addFollowing = () => {};

exports.addFollower = () => {};

exports.deleteFollowing = () => {};

exports.deleteFollower = () => {};
