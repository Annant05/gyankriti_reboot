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

    //* Function to add new student into the database */
    newAdmission: async function addNewStudentToStudentTable(studentDataObject, stateCallback) {
        console.log("\nFile: support_files/dynamoStudent calling function 'newAdmission()'  Argument Passed : ");


        // add time of insertion to the data;
        studentDataObject['time_of_admission'] = (Math.round((new Date()).getTime() / 1000)).toString();

        // add admission_status as pending because gynakriti details are not yet filled and it is possible that this student may leave school in future.
        studentDataObject['admission_status'] = "pending";

        const params = {
            TableName: TABLE_STUDENTS,
            Item: studentDataObject
        };
        console.log("\nparams for function : put(params) : " + JSON.stringify(params));

        try {
            await docClientDynamo.put(params, (err, data) => {
                if (err) {
                    console.log("\nThere was some error ", err, err.stack);
                    stateCallback(false);

                }// an error occurred
                else {
                    console.log("\nData saved ", data);
                    stateCallback(true);

                }
            });

        } catch (err) {
            console.log("\nError :  " + err);
        }
        // console.log("\nisSaved before return ", isSaved);

    },


    //* Function to scan/retrieve list of students from the database  */
    getCurrentStudents: async function getCurrentStudentsFromStudentTable(sendDataInCallback) {
        console.log("\nFile: support_files/dynamoStudent calling function 'getCurrentStudents()'");

        const params = {
            Limit: 20,
            TableName: TABLE_STUDENTS,
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
    },


    //* Function to get a student information using aadhar card as a key list of students from the database  */
    getStudentUsingKey: async function getStudentUsingPrimaryHashKeyFromStudentTable(aadhar_key, sendDataInCallback) {

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
    },


    //* Function to update the student information using aadhar card as a key when a new record is added in gyankritiTable  */
    updateAdmissionStatus: async function updateAdmissionStatusAttributeInStudentTable(identifier_key, gyankriti_enrollment, stateCallback) {

        console.log("\nFile: support_files/dynamoStudent calling function 'updateRecord()'");

        const params = {
            TableName: TABLE_STUDENTS,
            Key: {
                identifier_key: identifier_key
            },
            UpdateExpression: "set admission_status = :new_admission_status, gyankriti_enrollment = :enrollment",
            ConditionExpression: "admission_status = :pending",
            ExpressionAttributeValues: {
                ":new_admission_status": "completed",
                ":pending": "pending",
                ":enrollment": gyankriti_enrollment
            },

            ReturnValues: "UPDATED_NEW"
        };

        console.log("\nparams for function : update(params) : " + JSON.stringify(params));


        try {
            await docClientDynamo.update(params, (err, data) => {
                if (err) {
                    console.log("\nThere was some error ", err, err.stack);
                    stateCallback(false);

                }// an error occurred
                else {
                    console.log("\nData saved ", data);
                    stateCallback(true);

                }
            });

        } catch (err) {
            console.log("\nError :  " + err);
        }

    },

    //END : Finished functions block

    addGyankritiInformation: async function addGyankritiInformationToGyankritiTable(gyankritiDataObject, stateCallback) {
        console.log("\nFile: support_files/dynamoStudent calling function 'newAdmission()'  Argument Passed : ");


        // add time of insertion to the data;
        gyankritiDataObject['time_of_insertion'] = (Math.round((new Date()).getTime() / 1000)).toString();

        // gyankritiDataObject['search_helper'] = `${gyankritiDataObject.standard}_${gyankritiDataObject.section}_${gyankritiDataObject.route}_${gyankritiDataObject.shift}`;

        const params = {
            TableName: TABLE_GYANKRITI,
            Item: gyankritiDataObject
        };

        console.log("\nparams for function : put(params) : " + JSON.stringify(params));

        try {
            await docClientDynamo.put(params, (err, data) => {
                if (err) {
                    console.log("\nThere was some error ", err, err.stack);
                    stateCallback(false);

                }// an error occurred
                else {
                    console.log("\nData saved ", data);
                    stateCallback(true);
                }
            });

        } catch (err) {
            console.log("\nError :  " + err);
        }
        // console.log("\nisSaved before return ", isSaved);

    }



    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // New functions development


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