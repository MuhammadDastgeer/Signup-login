const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const passport = require("passport");



router.get("/signup", (req, res) => {
    res.render("users/signup.ejs")
})

router.post("/signup", async (req, res) => {

    let { username, email, password } = req.body;
    const newUser = new User({ email, username });
    const registeredUser = await User.register(newUser, password);
    console.log(registeredUser);
    res.redirect("/login")
});

router.get("/login", (req, res) => {
    res.render("users/login.ejs")
})



router.post('/login',
    passport.authenticate('local', { failureRedirect: '/login' }),
    function (req, res) {
        res.send("Good");
    });

module.exports = router;