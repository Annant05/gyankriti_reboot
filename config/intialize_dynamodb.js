const cmd = require('node-cmd');
const AWS = require('aws-sdk');

const config = require('../config/config');
// AWS.config.update({region: "ap-south-1 ", endpoint: 'https://dynamodb.ap-south-1.amazonaws.com'});
AWS.config.update(config.getAWS_JSONCredentials());
const dynamodb = new AWS.DynamoDB();


const basicDynamoTableFunctions = {
    listTables: function () {
        const params = {};
        dynamodb.listTables(params, (err, data) => {
            if (err) console.log(err, err.stack); // an error occurred
            else console.log(data);           // successful response
        });
    }
};


async function startOfflineDynamoDB() {
    cmd.get(
        'chdir',
        (err, data, stderr) => {
            console.log('the current working dir is : ', data);
            let command = data.replace("\r\n", "") + "\\tools\\dynamo_offline\\server_start.bat";
            cmd.run(command);
        }
    );
}


const studentTable = {
    TABLE_NAME: "students",
    createStudentTable: async function () {
        const params = {
            TableName: studentTable.TABLE_NAME,
            AttributeDefinitions: [
                {
                    AttributeName: "student_enrollment",  // Primary key
                    AttributeType: "S"
                },

            ],
            KeySchema: [
                {
                    AttributeName: "student_enrollment",
                    KeyType: "HASH"
                },

            ],
            ProvisionedThroughput: {
                ReadCapacityUnits: 5,
                WriteCapacityUnits: 5
            }
        };

        dynamodb.createTable(params, (err, data) => {
            if (err) console.log(err, err.stack); // an error occurred
            else console.log(data);
        });

        console.log("The table are listed \n");
        basicDynamoTableFunctions.listTables();
    }
};


// startOfflineDynamoDB().then(basicDynamoTableFunctions.listTables()); // start dynamodb offline
// studentTable.createStudentTable().then(basicDynamoTableFunctions.listTables());