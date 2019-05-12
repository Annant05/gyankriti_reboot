// The following constant has credentials for the AWS.
const awsCredentialConfig = {
    region: "ap-south-1"
    // The endpoint should point to the local or remote computer where DynamoDB (downloadable) is running.
    // endpoint: 'http://localhost:8000',
    // endpoint: 'https://dynamodb.ap-south-1.amazonaws.com',
    /*
      accessKeyId and secretAccessKey defaults can be used while using the downloadable version of DynamoDB.
      For security reasons, do not store AWS Credentials in your files. Use Amazon Cognito instead.
    */
    // Fill in keys if not using " IAM role "
    // accessKeyId: "",
    // secretAccessKey: ""
};

const msg91_config = {
    MSG91_API_KEY: '262954AXfHV7Gd5c67b754', /* Make sure it is valid and active */
    SENDER_ID: 'GYNKRT'  /*  Must be six characters only  */
};

module.exports = {
    SERVER_PORT: 80,
    TABLE_GYANKRITI_ADMISSIONS: "gyankriti_admissions",
    TABLE_GYANKRITI_STUDENTS: "gyankriti_students",
    BUCKET_NAME: "gyankriti2019",

    getAWS_JSONCredentials: () => {
        return awsCredentialConfig;
    },

    getMSG91_config: () => {
        return msg91_config;
    }

};

