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

// modal and its buttons
let modal_send_sms = null;
let modal_send_sms_title = null;
let modal_textarea_sms = null;
let modal_button_send_sms = null;
let modal_button_use_previous_message = null;


let snackbar = null;
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

    // modal selectors
    modal_send_sms = $('#modal_send_sms');
    modal_send_sms_title = $('#modal_send_sms_title');

    modal_textarea_sms = $('#modal_textarea_sms');
    modal_textarea_sms.toggleClass("border-invalid", false);

    modal_button_send_sms = $('#modal_button_send_sms');
    modal_button_use_previous_message = $('#modal_button_use_previous_message');

    snackbar = $("#snackbar");

    snackbar.toggleClass("snackbar-show", false);
    snackbar.toggleClass("snackbar-failed", false);
    // options_array
    options_array = options_config.search;
    console.log("initializing jquery selectors complete");


    // $.cookie("previous_sms", '', {expires: (1 / 24)});
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
        showsnackbar("Search query is same as previous one.", false);
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
        stateSave: true,
        order: [[0, "asc"]],

        columnDefs: [
            {
                "targets": [7],
                "visible": false,
                "searchable": false
            },
            {
                "targets": [8],
                "visible": false
            },
            {
                "targets": [9],
                "visible": false
            },
            {
                "targets": [10],
                "visible": false
            }
        ]

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

    modal_button_use_previous_message.click(() => {
        let cookie_prev_sms = $.cookie("previous_sms");

        if (cookie_prev_sms !== undefined) {
            modal_textarea_sms.val(cookie_prev_sms);
            console.log("found prev cookie", cookie_prev_sms);

        } else {
            console.log('cookie does not exist');
        }

    });


    // modal_textarea_sms
    modal_button_send_sms.click(() => {

        const message = modal_textarea_sms.val();

        if (message !== '') {
            modal_textarea_sms.toggleClass('border-invalid', false);
            console.log(`message is : ${message}`);


            let rawArrayObject = datatable_results.rows('.selected').data();
            let message_recipients = [];

            for (let i = 0; i < rawArrayObject.length; i++) {
                // console.log(`row :  ${rawArrayObject[i]}`);
                message_recipients.push((rawArrayObject[i][7]), (rawArrayObject[i])[8]);
            }

            // set cookie so that we can use the same sms for for hour.
            $.cookie("previous_sms", message, {expires: 1 / 24});

            console.log(` recipients array : ${message_recipients}`)

            sendSmsToSelectedRows(message_recipients, message);

        } else {
            modal_textarea_sms.toggleClass('border-invalid', true);
            console.log("textarea is empty");

        }

        // sendSmsToSelectedRows(selected_rows_array, modal_textarea_sms.text());

    });


    // This button is just to show modal.

    menu_button_send_sms.click(() => {
        console.log("clicked on send sms button");

        let selectedRowsCount = datatable_results.rows('.selected').data().length;

        if (selectedRowsCount) {
            console.log(" selected rows  : ", JSON.stringify(selectedRowsCount));

            modal_send_sms_title.find('strong').text(selectedRowsCount);
            modal_send_sms.modal('show');

        } else {
            showsnackbar("No rows are selected in the table ", false);
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
            element.shift,

            //   this columns are hidden used only for mailing and sending sms to parents ,

            element.father_mobile_no,
            element.mother_mobile_no,
            element.father_email,
            element.mother_email


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
                    modal_send_sms.modal('hide');
                    showsnackbar("Messages sent Successfully! ", true);
                    console.log(`Messages sent Successfully!`);
                } else {
                    console.log("Error : Failed to send sms");
                    showsnackbar("Error : Failed to send sms", false);
                    // alert("There was some error sending sms.")
                }
            }
        });
    } else {
        showsnackbar("Make sure rows are selected", false);
    }

}


function showsnackbar(notify_message, state) {

    snackbar.toggleClass("snackbar-show", true);

    $("#snackbar_text").text(notify_message);

    if (state) {
        snackbar.toggleClass("snackbar-failed", false);
    } else {
        snackbar.toggleClass("snackbar-failed", true);
    }

    setTimeout(() => {
        snackbar.toggleClass("snackbar-show", false);
    }, 3000);


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