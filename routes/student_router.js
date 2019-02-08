/* declaration of the required base classes of node.js start */

const express = require('express');
const router = express.Router();
// const bodyParser = require("body-parser");  // used body-parser to get data from all the field in form
// const fs = require('fs');
// const path = require('path');

//test code


// const upload = multer({dest: 'upload/'});

const dynamoStudent = require('../support_files/db_dynamo_student');
const s3storageStudent = require('../support_files/upload_to_s3');

// const fileDir = path.join(__dirname, '../views\\student\\');


/* END: Declaration node.js */

router.get('/', (req, res) => {
    console.log("\nGET: 'student/student_index'  Web-Page");
    res.render('student/student_index', {TITLE: "Gyankriti"});

});

router.get('/new-admission', (req, res) => {
    console.log("\nGET: 'student/new_admission'  Web-Page");
    res.render('student/new_admission', {TITLE: "New Admission"});

});

router.get('/upload-test', (req, res) => {
    res.render('student/upload_test', {TITLE: "Upload Test"});
});

router.post('/upload-images', async (req, res) => {
    console.log("\nPOST: 'student/upload-images' = Received  image files from AJAX call.");
    try {
        await s3storageStudent.uploadImagesToS3(req, res, (isSaved) => {
            res.send({success: isSaved})
        });
    } catch (e) {
        console.log("exception e : " + e);
        res.send({success: false});
    }
});

router.post('/new-admission', async (req, res) => {


    console.log("\nPOST: 'student/new_admission' = Received  New Admission data from AJAX call.");
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


router.get('/gyankriti-students', (req, res) => {
    console.log("\nGET: 'student/gyankriti-students'  Web-Page");
    res.render('student/gyankriti_students', {TITLE: "Gyankriti Students"});
});


router.post('/gyankriti-students', async (req, res) => {
    console.log("\nPOST: 'student/gyankriti-students' = Send students information.");

    try {
        await dynamoStudent.getCurrentStudents((studentsObject, isSuccess) => {

            console.log("isSuccess in receiving data from getCurrentStudents : ", isSuccess);

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


