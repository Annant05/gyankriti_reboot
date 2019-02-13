let output_student_name = null;
let input_gyankriti_enrollment = null;
let input_gyankriti_username = null;
let input_gyankriti_email = null;

let dropdown_standard = null;
let dropdown_section = null;
let dropdown_school_shift = null;

let dropdown_mode_transportation = null;
let dropdown_van_route = null;
let input_field_other = null;

let button_complete_admission_process = null;


function initializeJquerySelectors() {
    console.log("initializing jquery selectors");

    output_student_name = $("#output_student_name");

    input_gyankriti_enrollment = $("#input_gyankriti_enrollment");
    input_gyankriti_username = $("#input_gyankriti_username");
    input_gyankriti_email = $("#input_gyankriti_email");

    dropdown_standard = $("#dropdown_standard");
    dropdown_section = $("#dropdown_section");
    dropdown_school_shift = $("#dropdown_school_shift");

    dropdown_mode_transportation = $("#dropdown_mode_transportation");
    dropdown_van_route = $("#dropdown_van_route");
    input_field_other = $("#input_field_other");

    button_complete_admission_process = $("#button_complete_admission_process");

}

let options_array = {
    standard: ["JS1", "JS2", "S1", "S2", "S3", "S4", "S5"],
    section: ["A", "B", "C"],
    school_shift: ["1st : 8:30 ", "2nd : 9:30 ", "3rd : 10:30 "],
    mode_transportation: ["Van", "Bus", "Walk-in"],
    van_route: ["1A", "2A", "1B", "2B", "none"]
};


function getValFromDropdown(dropdown_selector) {
    let valueDropdownOption = dropdown_selector.children("option").filter(":selected").val();
    if (valueDropdownOption === 'choose') {
        console.log(dropdown_selector.attr('id') + " is not selected");
        return null;
    } else {
        console.log(dropdown_selector.attr('id') + " is :", valueDropdownOption);
        return valueDropdownOption.trim();
    }
}


function initializeDropdown() {
    console.log("initializing dropdown and adding options");

    function append_options_to_dropdown(dropdown_selector, options) {
        options.forEach(function (option) {
            dropdown_selector.append(
                `<option value="${((option.toString()))}">${option}</option>`);
        });
    }

    append_options_to_dropdown(dropdown_standard, options_array.standard);
    append_options_to_dropdown(dropdown_section, options_array.section);
    append_options_to_dropdown(dropdown_school_shift, options_array.school_shift);
    append_options_to_dropdown(dropdown_mode_transportation, options_array.mode_transportation);
    append_options_to_dropdown(dropdown_van_route, options_array.van_route);

}


function documentReady() {
    initializeJquerySelectors();
    initializeDropdown();
    output_student_name.val($.cookie("student_name"));


    button_complete_admission_process.click(sendJsonDataToServerUsingAjax);

}

function getFormInputData() {

    function getValFromTextBox(text_selector) {
        return (text_selector.val()).trim();
    }


    // console.log(val_student_information);
    return {

        student_name: $.cookie("student_name"),
        student_aadhar: $.cookie("student_aadhar"),

        gyankriti_enrollment: getValFromTextBox(input_gyankriti_enrollment),
        gyankriti_username: getValFromTextBox(input_gyankriti_username),
        gyankriti_email: getValFromTextBox(input_gyankriti_email),

        gyankriti_standard: getValFromDropdown(dropdown_standard),
        gyankriti_section: getValFromDropdown(dropdown_section),
        gyankriti_school_shift: getValFromDropdown(dropdown_school_shift),

        dropdown_mode_transportation: getValFromDropdown(dropdown_mode_transportation),
        dropdown_van_route: getValFromDropdown(dropdown_van_route)

    };
}


function sendJsonDataToServerUsingAjax() {

    // function definition ended
    let gyankritiJSON = getFormInputData();

    console.log("Click on submit detected");
    console.log("Logging form Values : \n" + JSON.stringify(gyankritiJSON));


    $.ajax({
        url: '/student/gyankriti-information',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({gyankriti_student_data: gyankritiJSON}),
        success: function (response) {
            console.log(response.success);
            if (response.success) {
                console.log("Information saved to the database.");
                redirectToGyankritiAdmissionPage();
            } else {
                alert("There was some error in saving the information.")
            }
        }

    });
}

function redirectToGyankritiAdmissionPage(newAdmissionJSON) {

    $.removeCookie('student_name');
    $.removeCookie('student_aadhar');

    window.location.replace("/student/gyankriti-students");
}


$(documentReady);

