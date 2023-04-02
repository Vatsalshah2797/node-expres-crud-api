const mangoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

//Read:: Get All Users 
const getAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
});

//Read :: Edit Get specific user by id
const getUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        res.status(404);
        throw new Error("User not found");
    }
    res.status(200).json(user);
});

//Create :: Create a new user 
const createNewUser = asyncHandler(async (req, res) => {
    console.log(req.body);
    const {name, email} = req.body;
    // if (!name || !email) {
    //     res.status(400);
    //     throw new Error("All fields are mandatory.");
    // }
    const createUser = await User.create({
        name,
        email
    });
    //User.create(req.body);
    res.status(201).json({ messsage:`Create a new user`, data: createUser});
});

//Update user
const updateUser = asyncHandler(async (req, res) => {
    
    const user = await User.findById(req.params.id);
    if (!user) {
        res.status(404);
        throw new Error("User not found");
    }
    
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedUser);
});

//delete user
const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        res.status(404);
        throw new Error("User not found");
    }

    //await User.remove();
    const deletUser = await User.findByIdAndRemove(req.params.id, req.body, {new: true});
    res.status(200).json(user);
});

module.exports = {getAllUsers, getUser, createNewUser, updateUser, deleteUser};