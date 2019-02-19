let dropdown_query = null;
let dropdown_grade = null;
let dropdown_section = null;
let dropdown_route = null;
let dropdown_shift = null;

let button_search = null;


let query_mode = null;

let options_array = {
    query: ['Students', 'Transport'],
    grade: ['JS1', 'JS2', 'PS1', 'PS2', 'PS3', 'PS4'],
    section: ['A', 'B', 'C', 'D'],
    route: ['1', '2', '3', '4', '5', 'Walk-in'],
    shift: ['A', 'B', 'C', 'D']
};


function initializeJquerySelectors() {

    console.log("initializing jquery selectors");

    dropdown_query = $("#dropdown_query ");
    dropdown_grade = $("#dropdown_grade ");
    dropdown_section = $("#dropdown_section ");
    dropdown_route = $("#dropdown_route ");
    dropdown_shift = $("#dropdown_shift ");
    button_search = $("#button_search ");


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
    append_options_to_dropdown(dropdown_grade, options_array.grade);
    append_options_to_dropdown(dropdown_section, options_array.section);
    append_options_to_dropdown(dropdown_route, options_array.route);
    append_options_to_dropdown(dropdown_shift, options_array.shift);


    // make sure this line always executes at the end
    $('select').selectpicker();


}

function getValuesSelectedFromDropdown(dropdown_selector) {
    let valueDropdownOptions = [];

    $(`#${dropdown_selector.attr('id')} option:selected`).each(function () {
        valueDropdownOptions.push($(this).val());
    });

    console.log(JSON.stringify(valueDropdownOptions));
    return valueDropdownOptions;
}


function executeSearch() {
    getValuesSelectedFromDropdown(dropdown_query);
    getValuesSelectedFromDropdown(dropdown_grade);

    console.log("button clicked");
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


function documentReady() {
    initializeJquerySelectors();
    initializeDropdown();

    button_search.click(executeSearch);

    dropdown_query.change(() => {
        let option = (getValuesSelectedFromDropdown(dropdown_query))[0];

        if (option === 'Students') {
            disableInputField(dropdown_grade, false);
            disableInputField(dropdown_section, false);
        } else {
            disableInputField(dropdown_grade, true);
            disableInputField(dropdown_section, true);
        }

    });


    // append_options_to_dropdown(temp_selector, options_array.search_by);

}


$(documentReady);