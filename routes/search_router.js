/* declaration of the required base classes of node.js start */

const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");  // used body-parser to get data from all the field in form
const fs = require('fs');
const path = require('path');

const dynamoStudent = require('../support_files/db_dynamo_search');
const fileDir = path.join(__dirname, '../views\\search\\');


/* END: Declaration node.js */

router.get('/', (req, res) => {
    console.log("\nGET: 'search/search_index'  Web-Page");
    res.render('search/search_index', {TITLE: "Gyankriti-Search"});

});


/*  END: get and post method block */


/*  module export block start  */
module.exports = router;
/*  END: Export block  */


