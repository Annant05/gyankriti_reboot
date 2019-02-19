const AWS = require('aws-sdk');

const config = require('../config/config');
// const dynamoOffline = require('../config/initialise_awscloud');

AWS.config.update(config.getAWS_JSONCredentials());
const docClientDynamo = new AWS.DynamoDB.DocumentClient();

// Table For storing all the bio data.
const TABLE_STUDENTS = "students";

// Table to store academic data and fee data.
const TABLE_GYANKRITI = "gyankriti";

// Object with all the database support functions.
const databaseFunctions = {

    //Finished Functions // Testing also done.

    //* Function to get a student information using aadhar card as a key list of students from the database  */


    //END : Finished functions block

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // New functions development

    getSearchResults: async function getSearchResultsFromTheServer(aadhar_key, sendDataInCallback) {
        console.log("\nFile: support_files/dynamoStudent calling function 'getStudentUsingKey()'");

        const params = {
            TableName: TABLE_STUDENTS,
            Key: {
                student_aadhar: aadhar_key
            }

            // Use ProjectionExpression to send specific keys only. // makes data transfer efficient and increases security
            // ProjectionExpression: "mother_image_url,father_image_url,student_image_url,student_aadhar"

        };
        console.log("\nparams for function : get(params) : " + JSON.stringify(params));

        try {
            await docClientDynamo.get(params, (err, data) => {
                if (err) {
                    console.log(err, err.stack); // an error occurred
                    sendDataInCallback(err, false);
                } else {
                    sendDataInCallback(data.Item, true);
                }
            });
        } catch (err) {
            console.log("\nError :  " + err);
        }
    }

};
/* END: Declaration of database functions */


// some test code function calls

// databaseFunctions.getCurrentStudents((err, data) => {
//     console.log(data);
// });

// databaseFunctions.updateRecord('452177883232', (isSaved) => {
//     if (isSaved) {
//         console.log("table updated");
//     } else {
//         console.log("there was some err");
//     }
//
// });


module.exports = databaseFunctions;