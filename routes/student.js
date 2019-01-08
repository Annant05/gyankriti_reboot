/* declaration of the required base classes of node.js start */
//TODO: proper console logging

const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");  // used body-parser to get data from all the field in form

const dynamoStudent = require('../database_files/dynamoStudent');
/* END: Declaration node.js */

router.get('/new_admission', (req, res) => {
    console.log("get student/new_admission render web page wizard");
    res.render('student/new_admission', {TITLE: "New Admission"});
});


router.post('/new_admission', (req, res) => {
    console.log("post: student/new_admission. receive the new admission data from ajax using post");
    try {
        // console.log(JSON.stringify(req.body.new_admission_data));
        dynamoStudent.newAdmission(req.body.new_admission_data).then(isSaved => console.log("is Data Saved to the dynamodb 'student' table:  " + isSaved));
        res.send({success: true});
    } catch (e) {
        console.log("exception e : " + e);
        res.send({success: false});
    }
});


/*  END: get and post method block */


/*  module export block start  */
module.exports = router;
/*  END: Export block  */


