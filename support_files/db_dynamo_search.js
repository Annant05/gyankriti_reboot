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
const searchFunctions = {

    //Finished Functions // Testing also done.

    //* Function to get a student information using aadhar card as a key list of students from the database  */


    //END : Finished functions block

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // New functions development

    getSearchResults: async function getSearchResultsFromTheServer(search_config, sendDataInCallback) {
        console.log("\nFile: support_files/searchFunction calling function 'getSearchResults()'");


        let params = {
            TableName: TABLE_STUDENTS,
            FilterExpression: 'Year = :this_year',
            ExpressionAttributeValues: {':this_year': 2015}
        };

        console.log("\nparams for function : get(params) : " + JSON.stringify(params));

        try {
            await docClientDynamo.scan(params, (err, data) => {
                if (err) {
                    console.log(err, err.stack); // an error occurred
                    sendDataInCallback(err, false);
                } else {
                    sendDataInCallback(data, true);
                }
            });
        } catch (err) {
            console.log("\nError :  " + err);
        }
    }

};
/* END: Declaration of database functions */


// some test code function calls

// searchFunctions.getCurrentStudents((err, data) => {
//     console.log(data);
// });

// searchFunctions.updateRecord('452177883232', (isSaved) => {
//     if (isSaved) {
//         console.log("table updated");
//     } else {
//         console.log("there was some err");
//     }
//
// });


module.exports = searchFunctions;