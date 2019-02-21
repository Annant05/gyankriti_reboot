let dropdown_query = null;
let dropdown_standard = null;
let dropdown_section = null;
let dropdown_route = null;
let dropdown_shift = null;

let button_search = null;

let table_selector = null;
let datatable_results = null;

let results_table_container = null;
// let isNoDropDownEmpty = false;

let options_array = null;


function initializeJquerySelectors() {

    console.log("initializing jquery selectors");

    dropdown_query = $("#dropdown_query ");
    dropdown_standard = $("#dropdown_standard ");
    dropdown_section = $("#dropdown_section ");
    dropdown_route = $("#dropdown_route ");
    dropdown_shift = $("#dropdown_shift ");
    button_search = $("#button_search ");

    table_selector = $('#students_table');

    results_table_container = $('#results_table_container');


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


// function getValuesSelectedFromDropdown(dropdown_selector) {
//     let valueDropdownOptions = [];
//
//     $(`#${dropdown_selector.attr('id')} option:selected`).each(function () {
//         valueDropdownOptions.push($(this).val());
//     });
//
//     if (valueDropdownOptions.length) {
//         isNoDropDownEmpty = true;
//         return valueDropdownOptions;
//     } else {
//         console.log(dropdown_selector.attr('id') + " is not selected");
//         isNoDropDownEmpty = false;
//     }
//
// }


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

    $.ajax({
        url: '/search',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({search_config: search_config}),
        success: function (response) {
            console.log(response.success);
            if (response.success) {
                console.log(JSON.stringify(response.results_array[0]));
                console.log("Data recieved from the server");
                addRowsToDataTable(response.results_array);
            } else {
                alert("There was some error in saving the information.")
            }
        }
    });

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
    let selector_students_table_body = $('#students_table tbody');
    selector_students_table_body.on('click', 'tr', function () {
        $(this).toggleClass('selected');
    });

    $('#button').on('click', function () {
        alert(table.rows('.selected').data().length + ' row(s) selected');
    });

    datatable_results = table_selector.DataTable({
        // lengthChange: false,
        // buttons: ['copy', 'excel', 'pdf', 'colvis'],
        scrollX: true,
        paging: true,
        ordering: true,
        responsive: true,
        order: [[0, "asc"]]
    });

    // datatable_results.buttons().container()
    //     .appendTo(results_table_container, datatable_results.table().container())
    // ;
}

function addRowsToDataTable(results_array) {
    console.log("\nexecuting datatable_functions();");

    // clear old results
    datatable_results.clear().draw();

    let count = results_array.length - 1;

    console.log("adding rows from 1 to : ", count + 1);

    function asyncWhileLoop() {
        if (count !== -1) {

            let aRow = results_array[count--];

            console.log("adding rows to the datatable");

            datatable_results.row.add([
                aRow.gyankriti_enrollment,
                `${aRow.first_name} ${aRow.last_name}`,
                aRow.gyankriti_email,
                aRow.standard,
                aRow.section,
                aRow.route,
                aRow.shift
            ]).draw(true);
        }
        requestAnimationFrame(asyncWhileLoop);
    }

    // load and add new results
    if (results_array !== null) {
        requestAnimationFrame(asyncWhileLoop);

    } else {
        console.log("no data received from server.");
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