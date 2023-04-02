const express = require("express");
const router = express.Router();

const {getAllUsers, getUser, createNewUser, updateUser, deleteUser} = require("../controllers/userController");

router.route("/api/users").get(getAllUsers).post(createNewUser);
router.route("/api/users/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;