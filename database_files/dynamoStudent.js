const AWS = require('aws-sdk');

const config = require('../config/config');
const dynamoOffline = require('../config/intialize_dynamodb');

AWS.config.update(config.getAWS_JSONCredentials());
const docClientDynamo = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = "students";

const studentFunctions = {

    //Finished Functions // Testing also done.

    //* Function to add new student into the database */
    newAdmission: async function addNewStudentToDatabase(studentDataObject, stateCallback) {
        console.log("\nFile: database_files/dynamoStudent calling function 'newAdmission()'  Argument Passed : " + JSON.stringify(studentDataObject));


        // figure out a way to send response to the callie (the function that called it return true or false )
        // let isSaved = false;
        // add time of insertion to the data;
        studentDataObject['time_of_insertion'] = (Math.round((new Date()).getTime() / 1000)).toString();

        const params = {
            TableName: TABLE_NAME,
            Item: studentDataObject
        };
        console.log("\nparams for function : put(params) : " + JSON.stringify(params));

        try {
            await docClientDynamo.put(params, (err, data) => {
                if (err) {
                    console.log("\nThere was some error ", err, err.stack);
                    stateCallback(false);
                    // isSaved = false;
                }// an error occurred
                else {
                    console.log("\nData saved ", data);
                    stateCallback(true);
                    // isSaved = true;
                    // allback(null, true);
                    // console.log("\nmy log " + isSaved);
                }
            });

        } catch (err) {
            console.log(err);
        }
        // console.log("\nisSaved before return ", isSaved);

    },


    //* Function to scan/retrieve list of students from the database  */
    getCurrentStudents: async function getCurrentStudentsFromDatabase(sendDataInCallback) {
        console.log("\nFile: database_files/dynamoStudent calling function 'getCurrentStudents()'");

        const params = {
            Limit: 20,
            TableName: TABLE_NAME,
        };
        console.log("\nparams for function : scan(params) : " + JSON.stringify(params));

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

    //END : Finished functions block


    // New functions development


};
/* END: Declaration of database functions */


// studentFunctions.getCurrentStudents((err, data) => {
//     console.log(data);
// });


module.exports = studentFunctions;