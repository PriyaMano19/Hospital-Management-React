const express = require("express");

const Users = require("../n_models/n_users");

const router = express.Router();

//save User
router.post("/user/save", (req, res) => {
  let newUser = new Users(req.body);

  newUser.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }

    return res.status(200).json({
      success: "User saved successfully",
    });
  });
});

//get user
router.get("/users", (req, res) => {
  Users.find().exec((err, users) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingUsers: users,
    });
  });
});

//get a single user
router.get("/user/:id", (req, res) => {
  let userId = req.params.id;

  Users.findById(userId, (err, user) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }

    return res.status(200).json({
      success: true,
      user,
    });
  });
});

//update user
router.put("/user/update/:id", (req, res) => {
  Users.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, user) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }

      return res.status(200).json({
        success: "Update successfull",
      });
    }
  );
});

//delete user
router.delete("/user/delete/:id", (req, res) => {
  Users.findByIdAndRemove(req.params.id).exec((err, deletedUser) => {
    if (err)
      return res.status(400).json({
        message: "Deleted Unsuccessful",
        err,
      });
    return res.json({
      message: "Deleted succesfull",
      deletedUser,
    });
  });
});

module.exports = router;
