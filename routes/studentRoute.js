const express = require("express");
const router = express.Router();
const Student = require("../models/studentModel");

//
router.route("/register").post((req,res) => {
    const fullName = req.body.fullName;
    const regNo = req.body.regNo;
    const mobileNum = req.body.mobileNum;
    const email = req.body.email;

    //console.log(res);

    const newStudent = new Student({
        fullName,
        regNo,
        mobileNum,
        email
    })

    newStudent.save();
})

module.exports = router;