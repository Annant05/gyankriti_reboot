/* declaration of the required base classes of node.js start */

const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");  // used body-parser to get data from all the field in form
const fs = require('fs');
const path = require('path');

//test code
const multer = require('multer');
// const upload = multer({dest: 'upload/'});

const dynamoStudent = require('../database_files/dynamoStudent');
const fileDir = path.join(__dirname, '../views\\student\\');

// test code
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.jpg')
    }
});

let upload = multer({storage: storage}).single('profileImage');


router.post('/upload_test', function (req, res) {
    console.log("received post req for file");
    upload(req, res, function (err) {
        if (err) {
            // An error occurred when uploading
        }
        res.json({
            success: true,
            message: 'Image uploaded!'
        });

        // Everything went fine
    })
});


// router.post('/upload_test', upload.single('avatar'), function (req, res, next) {
//     console.log("received post req for file");
//     // req.file is the `avatar` file
//     // req.body will hold the text fields, if there were any
// });
//


router.get('/upload_test', function (req, res) {
    console.log("\nGET: 'student/upload_test'  Web-Page");
    res.render('student/upload_test');
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
});


/* END: Declaration node.js */

router.get('/', (req, res) => {
    console.log("\nGET: 'student/student_index'  Web-Page");
    res.render('student/student_index', {TITLE: "Gyankriti"});

});

router.get('/new-admission', (req, res) => {
    console.log("\nGET: 'student/new_admission'  Web-Page");
    res.render('student/new_admission', {TITLE: "New Admission"});

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

            console.log("isSuccess in recieveing data from getCurrentStudents : ", isSuccess);

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


//
// router.get('/containers', (req, res) => {
//     console.log("\nGET: 'student/containers' Web-Pages");
//
//
//     // load files to be sent to the client in jquery using ajax. Extend Dynamic functionality.
//     const gyankriti_students_ejs_file = fs.readFileSync(fileDir + 'container_gyankriti_students.ejs');
//     const new_admission_ejs_file = fs.readFileSync(fileDir + 'new_admission.ejs');
//
//     const body = {
//         page_gyankriti_student: {
//             TITLE: "Gyankriti Students",
//             HTML: gyankriti_students_ejs_file.toString()
//         },
//
//         page_new_admission: {
//             TITLE: "New Admission",
//             HTML: new_admission_ejs_file.toString()
//         }
//     };
//
//     res.send({body: body});
//
// });

/*  END: get and post method block */


/*  module export block start  */
module.exports = router;
/*  END: Export block  */


