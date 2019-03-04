const AWS = require('aws-sdk');

const config = require('../config/config');
// const dynamoOffline = require('../config/initialise_awscloud');

AWS.config.update(config.getAWS_JSONCredentials());
const docClientDynamo = new AWS.DynamoDB.DocumentClient();

// Table For storing all the bio data.
const TABLE_GYANKRITI_ADMISSIONS = config.TABLE_GYANKRITI_ADMISSIONS;

// Table to store academic data and fee data.
const TABLE_GYANKRITI_STUDENTS = config.TABLE_GYANKRITI_STUDENTS;

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
                TableName: TABLE_GYANKRITI_STUDENTS
                // FilterExpression: '#str_section = :val_section and #str_standard = :val_standard',
                // ExpressionAttributeNames: {
                //     "#str_search_helper": "section",
                // },
                // ExpressionAttributeValues: {
                //     ':val_search_helper': var_search_helper,
                // },
                // // ProjectionExpression: "standard, first_name, gyankriti_enrollment"
            };
            const str_All = "All";

            let FilterExpression = "";

            function isEmpty(obj) {
                return Object.keys(obj).length === 0;
            }

            function createFilterExpressionString(FE) {
                if (FilterExpression !== "") {
                    FilterExpression += " and " + FE;
                } else {
                    FilterExpression += FE;
                }
                params['FilterExpression'] = FilterExpression;
                console.log(FilterExpression);
            }

            params['ExpressionAttributeNames'] = {};
            params['ExpressionAttributeValues'] = {};


            if (search_config.query === "Students") {  // only use this if searching for students

                if (search_config.standard !== str_All) {
                    params.ExpressionAttributeNames['#str_standard'] = "standard";
                    params.ExpressionAttributeValues[':val_standard'] = search_config.standard;
                    createFilterExpressionString('#str_standard = :val_standard');
                }

                if (search_config.section !== str_All) {
                    params.ExpressionAttributeNames['#str_section'] = "section";
                    params.ExpressionAttributeValues[':val_section'] = search_config.section;
                    createFilterExpressionString('#str_section = :val_section');

                }
            }

            if (search_config.route !== str_All) {
                params.ExpressionAttributeNames['#str_route'] = "route";
                params.ExpressionAttributeValues[':val_route'] = search_config.route;
                createFilterExpressionString('#str_route = :val_route');

            }

            if (search_config.shift !== str_All) {
                params.ExpressionAttributeNames['#str_shift'] = "shift";
                params.ExpressionAttributeValues[':val_shift'] = search_config.shift;
                createFilterExpressionString('#str_shift = :val_shift');
            }

            if (isEmpty(params['ExpressionAttributeNames']) || isEmpty(params['ExpressionAttributeValues'])) {
                delete params['ExpressionAttributeNames'];
                delete params['ExpressionAttributeValues'];
            }


            console.log("\nparams for function : scan(params) : " + JSON.stringify(params));


            try {
                await docClientDynamo.scan(params, (err, data) => {
                    if (err) {
                        console.log(err, err.stack); // an error occurred
                        sendDataInCallback(err, false);
                    } else {
                        console.log(JSON.stringify(data.Count));
                        sendDataInCallback(data, true);
                    }
                });
            } catch (err) {
                console.log("\nError :  " + err);
            }
        }

    }
;
/* END: Declaration of database functions */


// some test code function calls

// searchFunctions.getSearchResults(null, (data, state) => {
//     console.log(`success:  ${state} : `, JSON.stringify(data));
// });


module.exports = searchFunctions;