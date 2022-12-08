var express = require("express")
var router = express.Router()

const credential = {
    email: "user@gamil.com",
    password: "user123"
}

router.post('/login', (req, res) => {
    if (req.body.email == credential.email && 
        req.body.password == credential.password) {
        // res.redirect('');
        res.end("login successful")
    }
    else {
        res.end("invalid details")
    }
});

module.exports = router

