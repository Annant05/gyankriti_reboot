const AWS = require('aws-sdk');

const config = require('../config/config');
const dynamoOffline = require('../config/intialize_dynamodb');

AWS.config.update(config.getAWS_JSONCredentials());
const docClientDynamo = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = "students";

const studentFunctions = {
    // get students
    getStudents: function (callback) {
        const params = {
            Limit: 10,
            TableName: TABLE_NAME,
        };
        try {
            docClientDynamo.scan(params, (err, data) => {
                if (err) console.log(err, err.stack); // an error occurred
                else {
                    callback(err, data);
                }
            });
        } catch (err) {
            console.log("In try catch block line 120  :  " + err);
        }

    },

    // Function to add new student into the database
    newAdmission: async function addNewStudentToDatabase(studentDataObject) {
        console.log("File: database_files/dynamoStudent calling function 'newAdmission()'  Argument Passed : " + JSON.stringify(studentDataObject));

        // add time of insertion to the data;
        studentDataObject['time_of_insertion'] = (Math.round((new Date()).getTime() / 1000)).toString();

        const params = {
            TableName: TABLE_NAME,
            Item: studentDataObject
        };

        console.log("params for function : put(params) : " + JSON.stringify(params));
        try {
            await docClientDynamo.put(params, (err, data) => {
                if (err) {
                    console.log(err, err.stack);
                    return false;
                }// an error occurred
                else {
                    console.log(data);
                    return true;
                }
            });
        } catch (err) {
            console.log(err);
        }
    }


};
/* END: Declaration of database functions */

module.exports = studentFunctions;