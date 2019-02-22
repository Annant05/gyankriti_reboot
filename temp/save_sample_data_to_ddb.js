//  dynamoStudent = require('../support_files/db_dynamo_student');

const sampleJSONdata = (require("../temp/csvjson"));

// console.log(sampleJSONdata);
let count = 1;

sampleJSONdata.forEach((aStudent) => {

    aStudent.route = (aStudent.route).toString();

    aStudent['father_mobile_no'] = '9806247089'
    aStudent['mother_mobile_no'] = '9179878711'
    aStudent['father_email'] = 'annant.gupta@gyankriti.com'
    aStudent['mother_email'] = 'annantg05@gmail.com'

    dynamoStudent.addGyankritiInformation(aStudent, (state) => {

        console.log(`\n\n\ncount :  ${count++}  , ${aStudent.gyankriti_enrollment}   , saved = ${state}`);
    });

});