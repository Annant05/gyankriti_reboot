const dynamoSearch = require('../../support_files/db_dynamo_search');
const smsClient = require('../../support_files/sms_api');

export default (router) => {
		router.get('/', (req, res) => {
				console.log("\nGET: '/search'  Web-Page");
				res.render('search/search', {TITLE: "Gyankriti-Search"});
		
		});
		
		router.post('/', async (req, res) => {
				console.log("\nPOST: '/search' = post results using search config.");
		
				const search_config = req.body.search_config;
		
				try {
						console.log(JSON.stringify(search_config));
						console.log("search config received");
		
						dynamoSearch.getSearchResults(search_config, (data, isSuccess) => {
								// console.log(JSON.stringify(data.Items[0]));
								res.send({results_array: data.Items, success: isSuccess});
						});
		
				} catch (e) {
						console.log("exception e : " + e);
						res.send({success: false});
				}
		
		});
		
		
		router.post('/send-sms', async (req, res) => {
				console.log("\nPOST: 'search/send-sms' = sending sms ");
		
				const recipients_mobile_no_array = req.body.raw_recipients_array;
				const message = req.body.sms_message;
		
				try {
		
						console.log("sending sms");
		
						// console.log(`recipients  : ${JSON.stringify(raw_array[0])}`);
		
						console.log(`message : ${message}`);
		
						smsClient.sendSMS(recipients_mobile_no_array, message, (isSuccess) => {
								res.send({success: isSuccess});
						});
		
				} catch (e) {
						console.log("exception e : " + e);
						res.send({success: false});
				}
		
		});
}