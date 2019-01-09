/* declaration of the required base classes of node.js start */
//TODO: proper console logging

const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");  // used body-parser to get data from all the field in form

const dynamoStudent = require('../database_files/dynamoStudent');
/* END: Declaration node.js */

router.get('/new_admission', (req, res) => {
    console.log("GET: 'student/new_admission' = Render Web-Page");
    res.render('student/new_admission', {TITLE: "New Admission"});
});


router.post('/new_admission', async (req, res) => {
    console.log("POST: 'student/new_admission' = Receive the new admission data from AJAX.");
    try {
        // console.log(JSON.stringify(req.body.new_admission_data));
        await dynamoStudent.newAdmission(req.body.new_admission_data, (isSaved) => {
            console.log("is Data Saved to the dynamodb 'student' table:  " + isSaved);
            res.send({success: isSaved});
        });

    } catch (e) {
        console.log("exception e : " + e);
        res.send({success: false});
    }
});


router.get('/current_students', (req, res) => {
    console.log("GET: 'student/current_students' = Render Web-Page");
    res.render('student/current_students', {TITLE: "Gyankriti Students"});

});

router.post('/current_students', async (req, res) => {
    console.log("POST: 'student/current_students' = Send students information.");
    try {
        // console.log(JSON.stringify(req.body.new_admission_data));
        await dynamoStudent.getCurrentStudents((studentsObject, isSuccess) => {
            console.log("is Data Saved to the dynamodb 'student' table:  " + JSON.stringify(studentsObject));
            console.log("isSuccess  : " + isSuccess);
            if (isSuccess) {
                res.send({body: {studentsObject: studentsObject, isSuccess: isSuccess}});
            } else {
                res.send({body: {studentsObject: null, isSuccess: isSuccess}});
            }
        });

    } catch (e) {
        console.log("exception e : " + e);
    }
});


/*  END: get and post method block */


/*  module export block start  */
module.exports = router;
/*  END: Export block  */


