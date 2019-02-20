//  dynamoStudent = require('../support_files/db_dynamo_student');

const sampleJSONdata = (require("../temp/csvjson"));

// console.log(sampleJSONdata);
let count = 1;

sampleJSONdata.forEach((aStudent) => {

    aStudent.route = (aStudent.route).toString();

    dynamoStudent.addGyankritiInformation(aStudent, (state) => {
        console.log(`\n\n\ncount :  ${count++}  , ${aStudent.gyankriti_enrollment}   , saved = ${state}`);
    });

});