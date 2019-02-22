let dropdown_query = null;
let dropdown_standard = null;
let dropdown_section = null;
let dropdown_route = null;
let dropdown_shift = null;

let button_search = null;
let button_select_all = null;

let table_results = null;
let body_table_results = null;

let datatable_results = null;


// menu action buttons
let menu_button_send_sms = null;

///////////////////////////////////////
//* global variables */

let options_array = null;
let previous_search_config = null;


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function initializeJquerySelectors() {

    console.log("initializing jquery selectors");

    dropdown_query = $("#dropdown_query ");
    dropdown_standard = $("#dropdown_standard ");
    dropdown_section = $("#dropdown_section ");
    dropdown_route = $("#dropdown_route ");
    dropdown_shift = $("#dropdown_shift ");

    button_search = $("#button_search ");
    button_select_all = $("#button_select_all");

    table_results = $('#table_results');
    body_table_results = $('#table_results tbody');

    menu_button_send_sms = $('#menu_button_send_sms');

    // options_array
    options_array = options_config.search;
    console.log("initializing jquery selectors complete");
}


function initializeDropdown() {
    console.log("initializing dropdown and adding options");


    function append_options_to_dropdown(dropdown_selector, options) {
        options.forEach(function (option) {
            dropdown_selector.append(
                `<option value="${((option.toString()))}">${option}</option>`);
        });
    }

    append_options_to_dropdown(dropdown_query, options_array.query);
    append_options_to_dropdown(dropdown_standard, options_array.standard);
    append_options_to_dropdown(dropdown_section, options_array.section);
    append_options_to_dropdown(dropdown_route, options_array.route);
    append_options_to_dropdown(dropdown_shift, options_array.shift);


    // make sure this line always executes at the end
    $('select').selectpicker();

}


function getValFromDropdown(dropdown_selector) {
    let valueDropdownOption = dropdown_selector.children("option").filter(":selected").val();

    console.log(dropdown_selector.attr('id') + " is :", valueDropdownOption);

    return valueDropdownOption.trim();
}


function getSearchConfigJSON() {

    let query_val = getValFromDropdown(dropdown_query);

    let searchConfig = {
        query: query_val,
        route: getValFromDropdown(dropdown_route),
        shift: getValFromDropdown(dropdown_shift)
    };

    if (query_val === options_array.query[0]) {
        searchConfig['standard'] = getValFromDropdown(dropdown_standard);
        searchConfig['section'] = getValFromDropdown(dropdown_section);
    }

    console.log(JSON.stringify(searchConfig));

    // console.log('isNoDropDownEmpty : ', isNoDropDownEmpty);

    return searchConfig;
}


function executeSearchOnServer() {
    console.log("button clicked");

    const search_config = getSearchConfigJSON();

    if (previous_search_config !== JSON.stringify(search_config)) {

        $.ajax({
            url: '/search',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({search_config: search_config}),
            success: function (response) {
                console.log(response.success);
                if (response.success) {

                    previous_search_config = JSON.stringify(search_config);

                    console.log(JSON.stringify(response.results_array[0]));
                    console.log("Data recieved from the server");
                    addRowsToDataTable(response.results_array);
                } else {
                    alert("There was some error in saving the information.")
                }
            }
        });
    } else {
        console.log(`search config has not changed`);
    }

}


function disableInputField(selector, isDisabled) {
    console.log("some field isDisabled :", isDisabled);

    if (isDisabled) { // if true it will be disabled;
        selector.selectpicker('deselectAll');
        selector.prop("disabled", true);
    } else { // if false it will be enabled;
        selector.prop("disabled", false);
    }

    selector.selectpicker("refresh");
}


function initializeDatatable() {

    datatable_results = table_results.DataTable({
        // lengthChange: false,
        // buttons: ['copy', 'excel', 'pdf', 'colvis'],
        scrollX: true,
        paging: true,
        ordering: true,
        responsive: true,
        order: [[0, "asc"]],

    });


    body_table_results.on('click', 'tr', function () {
        $(this).toggleClass('selected');
    });


    button_select_all.click(() => {
        console.log("clicked button select all");

        const val = button_select_all.val();

        if (datatable_results.rows().data().length) {

            if (val === "select") {
                datatable_results.rows().select();
                button_select_all.val("deselect").text("Deselect All");
            } else {
                datatable_results.rows().deselect();
                button_select_all.val("select").text("Select All");
            }
        } else {
            console.log("No rows in the table ");
        }

    });


    menu_button_send_sms.click(() => {
        console.log("clicked on send sms button");

        console.log(datatable_results.rows().data().length);

        let rowsJson = datatable_results.rows('.selected').data();

        if (rowsJson.length) {
            console.log(" selected rows  : ", JSON.stringify(rowsJson[0]));
            let array_to_send = [];

            for (let i = 0; i < rowsJson.length; i++) {
                console.log(`row :  ${rowsJson[i]}`);
                array_to_send.push(rowsJson[i]);
            }

            sendSmsToSelectedRows(array_to_send, "My name is Annant Gupta.");
        } else {
            console.log("No rows are selected in the table ");
        }

    });

}


function asyncForEachLoop(array) {

    console.log(`Looping over ${array.length} rows asynchronously`);

    let count = array.length - 1;


    function asyncWhileLoop() {
        if (count !== -1) {
            doTheFollowingLoopStatementsOnEachElement(array[count--]);
        }
        requestAnimationFrame(asyncWhileLoop);
    }

    function doTheFollowingLoopStatementsOnEachElement(element) {

        datatable_results.row.add([
            element.gyankriti_enrollment,
            `${element.first_name} ${element.last_name}`,
            element.gyankriti_email,
            element.standard,
            element.section,
            element.route,
            element.shift
        ]).draw(true);

    }

    // load and add new results
    if (array !== null) {
        console.log("adding data to the table");
        requestAnimationFrame(asyncWhileLoop);
    } else {
        console.log("passed Array is empty/null.");
    }
}


function addRowsToDataTable(results_array) {
    console.log("\nexecuting datatable_functions();");

    // clear old results
    datatable_results.clear().draw();

    // This will help when table is cleared but the button is deselect all;
    button_select_all.val("select").text("Select All");

    //
    asyncForEachLoop(results_array);
}


function sendSmsToSelectedRows(selected_array, sms_message) {

    console.log("sending sms array to server");

    if (selected_array !== null && sms_message !== "") {

        $.ajax({
            url: '/search/send-sms',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({sms_message: sms_message, raw_recipients_array: selected_array}),
            success: function (response) {
                console.log(response.success);
                if (response.success) {
                    console.log(`Sms sent to ${response.sent_count} cellphones`);
                } else {
                    alert("There was some error sending sms.")
                }
            }
        });
    } else {
        console.log(`search config has not changed`);
    }

}


function documentReady() {
    initializeJquerySelectors();
    initializeDropdown();
    initializeDatatable();

    button_search.click(executeSearchOnServer);

    dropdown_query.change(() => {
        let option = getValFromDropdown(dropdown_query);

        if (option === 'Students') {
            disableInputField(dropdown_standard, false);
            disableInputField(dropdown_section, false);
        } else {
            disableInputField(dropdown_standard, true);
            disableInputField(dropdown_section, true);
        }

    });


    // append_options_to_dropdown(temp_selector, options_array.search_by);

}


$(documentReady);