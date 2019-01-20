//Section 1 - student_general
let dropdown_academic_session = null;
let dropdown_admission_class = null;
let input_student_first_name = null;
let input_student_last_name = null;
let input_student_aadhar = null;
let input_student_samagra_ssmid = null;
let field_date_of_birth = null;
let dropdown_gender = null;

// student_general 2
let dropdown_nationality = null;
let dropdown_religion = null;
let dropdown_caste = null;
let field_religion_other = null;

// present_address
let input_present_address = null;
let dropdown_present_state = null;
let dropdown_present_city = null;
let input_present_pincode = null;

//permanent address
let input_permanent_address = null;
let dropdown_permanent_state = null;
let dropdown_permanent_city = null;
let input_permanent_pincode = null;

//about_parents
let dropdown_the_parents_are = null;
let dropdown_child_lives_with = null;
let dropdown_adopted_child = null;

//education history
let dropdown_any_previous_schools = null;
let table_previous_school = null;
let table_body_previous_school = null;

//radio questions
//question 1 - disability
let radio_question_disability = null;
let radio_question_disability_yes = null;
let radio_question_disability_no = null;
let field_question_disability = null;

//question 2 - therapist
let radio_question_therapist = null;
let radio_question_therapist_yes = null;
let radio_question_therapist_no = null;
let field_question_therapist = null;

//question 3 - repeated grade
let radio_question_repeated_grade = null;
let radio_question_repeated_grade_yes = null;
let radio_question_repeated_grade_no = null;
let field_question_repeated_grade = null;

//question 4 - suspended
let radio_question_suspended = null;
let radio_question_suspended_yes = null;
let radio_question_suspended_no = null;
let field_question_suspended = null;

//question 5 - illness
let radio_question_illness = null;
let radio_question_illness_yes = null;
let radio_question_illness_no = null;
let field_question_illness = null;

//father details
let input_father_name = null;
let input_father_email = null;
let input_father_aadhar = null;
let input_father_samagra_ssmid = null;
let input_father_education_qualification = null;
let input_father_mobile_no = null;
let input_father_occupation = null;
let input_father_name_of_organization = null;

//mother details
let input_mother_name = null;
let input_mother_email = null;
let input_mother_aadhar = null;
let input_mother_samagra_ssmid = null;
let input_mother_education_qualification = null;
let input_mother_mobile_no = null;
let input_mother_occupation = null;
let input_mother_name_of_organization = null;

// emergency contact and sibling
let input_emergency_contact = null;

// Sibling table
let dropdown_any_sibling = null;
let table_sibling = null;
let table_body_sibling = null;

//submit button - save information
let button_save_information = null;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//*  some booleans to be used for form submission.   */

let is_question_disability_to_save = false;
let is_question_therapist_to_save = false;
let is_question_repeated_grade_to_save = false;
let is_question_suspended_to_save = false;
let is_question_illness_to_save = false;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function initializeJquerySelectors() {
    console.log("initializing jquery selectors");

    //Section 1 - student_general
    dropdown_academic_session = $("#dropdown_academic_session");
    dropdown_admission_class = $("#dropdown_admission_class");
    input_student_first_name = $("#input_student_first_name");
    input_student_last_name = $("#input_student_last_name");
    input_student_aadhar = $("#input_student_aadhar");
    input_student_samagra_ssmid = $("#input_student_samagra_ssmid");
    field_date_of_birth = $("#field_date_of_birth");
    dropdown_gender = $("#dropdown_gender");

    // student_general 2
    dropdown_nationality = $("#dropdown_nationality");
    dropdown_religion = $("#dropdown_religion");
    dropdown_caste = $("#dropdown_caste");
    field_religion_other = $("#field_religion_other");

    // present_address
    input_present_address = $("#input_present_address");
    dropdown_present_state = $("#dropdown_present_state");
    dropdown_present_city = $("#dropdown_present_city");
    input_present_pincode = $("#input_present_pincode");

    //permanent address
    input_permanent_address = $("#input_permanent_address");
    dropdown_permanent_state = $("#dropdown_permanent_state");
    dropdown_permanent_city = $("#dropdown_permanent_city");
    input_permanent_pincode = $("#input_permanent_pincode");

    //about_parents
    dropdown_the_parents_are = $("#dropdown_the_parents_are");
    dropdown_child_lives_with = $("#dropdown_child_lives_with");
    dropdown_adopted_child = $("#dropdown_adopted_child");

    //education history
    dropdown_any_previous_schools = $("#dropdown_any_previous_schools");
    table_previous_school = $("#table_previous_school");
    table_body_previous_school = $("#table_body_previous_school");

    //radio questions
    //question 1 - disability
    radio_question_disability = $("#radio_question_disability");
    radio_question_disability_yes = $("#radio_question_disability_yes");
    radio_question_disability_no = $("#radio_question_disability_no");
    field_question_disability = $("#field_question_disability");

    //question 2 - therapist
    radio_question_therapist = $("#radio_question_therapist");
    radio_question_therapist_yes = $("#radio_question_therapist_yes");
    radio_question_therapist_no = $("#radio_question_therapist_no");
    field_question_therapist = $("#field_question_therapist");

    //question 3 - repeated grade
    radio_question_repeated_grade = $("#radio_question_repeated_grade");
    radio_question_repeated_grade_yes = $("#radio_question_repeated_grade_yes");
    radio_question_repeated_grade_no = $("#radio_question_repeated_grade_no");
    field_question_repeated_grade = $("#field_question_repeated_grade");

    //question 4 - suspended
    radio_question_suspended = $("#radio_question_suspended");
    radio_question_suspended_yes = $("#radio_question_suspended_yes");
    radio_question_suspended_no = $("#radio_question_suspended_no");
    field_question_suspended = $("#field_question_suspended");

    //question 5 - illness
    radio_question_illness = $("#radio_question_illness");
    radio_question_illness_yes = $("#radio_question_illness_yes");
    radio_question_illness_no = $("#radio_question_illness_no");
    field_question_illness = $("#field_question_illness");

    //father details
    input_father_name = $("#input_father_name");
    input_father_email = $("#input_father_email");
    input_father_aadhar = $("#input_father_aadhar");
    input_father_samagra_ssmid = $("#input_father_samagra_ssmid");
    input_father_education_qualification = $("#input_father_education_qualification");
    input_father_mobile_no = $("#input_father_mobile_no");
    input_father_occupation = $("#input_father_occupation");
    input_father_name_of_organization = $("#input_father_name_of_organization");

    //mother details
    input_mother_name = $("#input_mother_name");
    input_mother_email = $("#input_mother_email");
    input_mother_aadhar = $("#input_mother_aadhar");
    input_mother_samagra_ssmid = $("#input_mother_samagra_ssmid");
    input_mother_education_qualification = $("#input_mother_education_qualification");
    input_mother_mobile_no = $("#input_mother_mobile_no");
    input_mother_occupation = $("#input_mother_occupation");
    input_mother_name_of_organization = $("#input_mother_name_of_organization");

    // emergency contact and sibling
    input_emergency_contact = $("#input_emergency_contact");

    // Sibling table
    dropdown_any_sibling = $("#dropdown_any_sibling");
    table_sibling = $("#table_sibling");
    table_body_sibling = $("#table_body_sibling");

    //submit button - save information
    button_save_information = $("#button_save_information");
    // initializeDropdown();

    console.log("initializing jquery selectors complete");
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* array of options    */
let options_array = {
    academic_session: [2019, 2018, 2016, 2015],
    admission_class: ["JS1", "JS2", "S1", "S2", "S3", "S4", "S5"],
    gender: ["Male", "Female", "Transgender"],

    nationality: ["Indian", "Other"],
    caste: ["SC", "ST", "OBC", "GENERAL"],
    religion: ["Buddhist", "Christian", "Jain", "Hindu", "Islam", "Sikh", "Other"],

    state: ["Madhya Pradesh", "Other"],
    city: ["Indore", "Other"],

    parents_are: ["Married", "Divorced", "Separated", "Widowed"],
    child_lives_with: ["Both Parents", "Father", "Mother", "Guardian"],
    adopted_child: ["Yes", "No"],
    previous_schools: ["No", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],

    any_siblings: ["No", 1, 2, 3, 4]

};


// Functions declaration and definition

function isInputFieldDisabled(selector, isDisabled) {
    console.log("some field isDisabled :", isDisabled);

    if (isDisabled) {
        selector.attr("disabled", "");
    } else {
        selector.removeAttr("disabled")
    }

}


function getValFromDropdown(dropdown_selector) {
    let valueDropdownOption = dropdown_selector.children("option").filter(":selected").val();
    if (valueDropdownOption === 'choose') {
        console.log(dropdown_selector.attr('id') + " is not selected");
        return null;
    } else {
        console.log(dropdown_selector.attr('id') + " is :", valueDropdownOption);
        return valueDropdownOption;
    }
}


function generateTable(table_body_selector, noOfRows, id_prefix) {

    table_body_selector.children().remove();
    console.log("No of rows to generate :" + noOfRows);

    for (let rowNo = 1; rowNo <= noOfRows; rowNo++) {
        let tablebody = `<tr>
            <td class="text-center"> ${rowNo} </td>
            <td>    <input id="${id_prefix}_a${rowNo}" class="width-available" type="text"  />    </td>
            <td>    <input id="${id_prefix}_b${rowNo}" class="width-available" type="text"  />    </td>
            <td>    <input id="${id_prefix}_c${rowNo}" class="width-available" type="text"  />    </td>
            <td>    <input id="${id_prefix}_d${rowNo}" class="width-available" type="text"  />    </td>
            <td>    <input id="${id_prefix}_e${rowNo}" class="width-available" type="text"  />    </td>
        </tr>`;
        table_body_selector.append(tablebody);
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

    append_options_to_dropdown(dropdown_academic_session, options_array.academic_session);
    append_options_to_dropdown(dropdown_admission_class, options_array.admission_class);
    append_options_to_dropdown(dropdown_gender, options_array.gender);

    append_options_to_dropdown0(dropdown_nationality, options_array.nationality);
    append_options_to_dropdown(dropdown_caste, options_array.caste);
    append_options_to_dropdown(dropdown_religion, options_array.religion);

    append_options_to_dropdown(dropdown_present_state, options_array.state);
    append_options_to_dropdown(dropdown_present_city, options_array.city);

    append_options_to_dropdown(dropdown_permanent_state, options_array.state);
    append_options_to_dropdown(dropdown_permanent_city, options_array.city);

    append_options_to_dropdown(dropdown_the_parents_are, options_array.parents_are);
    append_options_to_dropdown(dropdown_child_lives_with, options_array.child_lives_with);
    append_options_to_dropdown(dropdown_adopted_child, options_array.adopted_child);
    append_options_to_dropdown(dropdown_any_previous_schools, options_array.previous_schools);

    append_options_to_dropdown(dropdown_any_sibling, options_array.any_siblings);

}


function documentReady() {
    initializeJquerySelectors();
    initializeDropdown();
    // isInputFieldDisabled(field_religion_other, true);


    button_save_information.click(sendDataToServerUsingAjax);

    //* handle dropdown fields */
    dropdown_religion.change(() => {
        if (getValFromDropdown(dropdown_religion) === "other") {
            isInputFieldDisabled(field_religion_other, false);
        } else {
            isInputFieldDisabled(field_religion_other, true);
        }
    });


    // display and hide table of previous schools

    // Generate table rows for previous schools
    dropdown_any_previous_schools.change(() => {
        table_previous_school.removeClass("display-none");
        let valDropdown = getValFromDropdown(dropdown_any_previous_schools);
        if (valDropdown === 'choose' || valDropdown === 'no') {
            table_previous_school.addClass("display-none")
        } else {
            table_previous_school.removeClass("display-none");
            generateTable(table_body_previous_school, Number(valDropdown), "pre");
        }
    });


    // Generate table rows for siblings table
    dropdown_any_sibling.change(() => {
        table_sibling.removeClass("display-none");
        let valDropdown = getValFromDropdown(dropdown_any_sibling);
        if (valDropdown === 'choose' || valDropdown === 'no') {
            table_sibling.addClass("display-none")
        } else {
            table_sibling.removeClass("display-none");
            generateTable(table_body_sibling, Number(valDropdown), "sib");
        }
    });

    //*handle radio button clicks and their fields to be disabled and enabled */

    //for question 1
    radio_question_disability_no.on("click", () => {
        isInputFieldDisabled(field_question_disability, true);
        is_question_disability_to_save = false;
    });
    radio_question_disability_yes.on("click", () => {
        isInputFieldDisabled(field_question_disability, false);
        is_question_disability_to_save = true;
    });


    //for question 2
    radio_question_therapist_no.on("click", () => {
        isInputFieldDisabled(field_question_therapist, true);
        is_question_therapist_to_save = false;
    });
    radio_question_therapist_yes.on("click", () => {
        isInputFieldDisabled(field_question_therapist, false);
        is_question_therapist_to_save = true;
    });


    //for question 3
    radio_question_repeated_grade_no.on("click", () => {
        isInputFieldDisabled(field_question_repeated_grade, true);
        is_question_repeated_grade_to_save = false;
    });
    radio_question_repeated_grade_yes.on("click", () => {
        isInputFieldDisabled(field_question_repeated_grade, false);
        is_question_repeated_grade_to_save = true;
    });


    // for question 4
    radio_question_suspended_no.on("click", () => {
        isInputFieldDisabled(field_question_suspended, true);
        is_question_suspended_to_save = false;
    });
    radio_question_suspended_yes.on("click", () => {
        isInputFieldDisabled(field_question_suspended, false);
        is_question_suspended_to_save = true;
    });


    //for question 5
    radio_question_illness_no.on("click", () => {
        isInputFieldDisabled(field_question_illness, true);
        is_question_illness_to_save = false;
    });
    radio_question_illness_yes.on("click", () => {
        isInputFieldDisabled(field_question_illness, false);
        is_question_illness_to_save = true;
    });

}


function getFormInputData() {


    function getValFromTextBox(text_selector) {
        return text_selector.val();
    }


    function getRadio_QnA(radio_boolean, selector_field_question) {

        if (radio_boolean) {
            return {
                is_applicable: radio_boolean,
                reason: selector_field_question.val()
            };
        } else {
            return {
                is_applicable: radio_boolean
            };
        }
    }


    function getDropdownWithOther(dropdown_selector, field_other_answer) {

        let valDropDown = getValFromDropdown(dropdown_selector);
        if (valDropDown === "other") {
            return {
                value: valDropDown,
                value_other: (field_other_answer.val()).trim()
            };
        } else {
            return {
                value: valDropDown
            };
        }
    }


    function getDataFromTableRowsIncludedInDropdown(dropdown_selector, table_body_selector, id_prefix) {

        let valDropdown = getValFromDropdown(dropdown_selector);

        if (valDropdown === "no") {
            return {
                value: valDropdown,
                table_array: null
            }
        } else {
            console.log("No of rows to generate :" + Number(valDropdown));
            let tableData = [];

            for (let rowNo = 1; rowNo <= Number(valDropdown); rowNo++) {

                let array_element = {
                    school_name: ($(`#${id_prefix}_a${rowNo}`).val()),
                    city_and_state: ($(`#${id_prefix}_b${rowNo}`).val()),
                    year_of_admission: ($(`#${id_prefix}_c${rowNo}`).val()),
                    grades_completed: ($(`#${id_prefix}_d${rowNo}`).val()),
                    board_pattern: ($(`#${id_prefix}_e${rowNo}`).val())
                };

                tableData.push(array_element);
            }

            console.log((JSON.stringify(tableData)));
            return {
                value: valDropdown,
                table_array: tableData
            };
        }

    }


    // console.log(val_student_information);
    return {

        academic_session: getValFromDropdown(dropdown_academic_session),
        admission_class: getValFromDropdown(dropdown_admission_class),

        student_first_name: getValFromTextBox(input_student_first_name),
        student_last_name: getValFromTextBox(input_student_last_name),
        student_aadhar: getValFromTextBox(input_student_aadhar),
        student_samagra_ssmid: getValFromTextBox(input_student_samagra_ssmid),
        student_date_of_birth: getValFromTextBox(field_date_of_birth),
        student_gender: getValFromDropdown(dropdown_gender),

        student_nationality: getValFromDropdown(dropdown_nationality),
        student_caste: getValFromDropdown(dropdown_caste),

        present_address: getValFromTextBox(input_present_address),
        present_state: getValFromDropdown(dropdown_present_state),
        present_city: getValFromDropdown(dropdown_present_city),
        present_pincode: getValFromTextBox(input_present_pincode),

        permanent_address: getValFromTextBox(input_permanent_address),
        permanent_state: getValFromDropdown(dropdown_permanent_state),
        permanent_city: getValFromDropdown(dropdown_permanent_city),
        permanent_pincode: getValFromTextBox(input_permanent_pincode),

        the_parents_are: getValFromDropdown(dropdown_the_parents_are),
        child_lives_with: getValFromDropdown(dropdown_child_lives_with),
        adopted_child: getValFromDropdown(dropdown_adopted_child),

        father_name: getValFromTextBox(input_father_name),
        father_email: getValFromTextBox(input_father_email),
        father_aadhar: getValFromTextBox(input_father_aadhar),
        father_samagra_ssmid: getValFromTextBox(input_father_samagra_ssmid),
        father_education_qualification: getValFromTextBox(input_father_education_qualification),
        father_mobile_no: getValFromTextBox(input_father_mobile_no),
        father_occupation: getValFromTextBox(input_father_occupation),
        father_name_of_organization: getValFromTextBox(input_father_name_of_organization),

        mother_name: getValFromTextBox(input_mother_name),
        mother_email: getValFromTextBox(input_mother_email),
        mother_aadhar: getValFromTextBox(input_mother_aadhar),
        mother_samagra_ssmid: getValFromTextBox(input_mother_samagra_ssmid),
        mother_education_qualification: getValFromTextBox(input_mother_education_qualification),
        mother_mobile_no: getValFromTextBox(input_mother_mobile_no),
        mother_occupation: getValFromTextBox(input_mother_occupation),
        mother_name_of_organization: getValFromTextBox(input_mother_name_of_organization),

        emergency_contact: getValFromTextBox(input_emergency_contact),

        // below are all the special fields
        // radio questions with answers.
        disability: getRadio_QnA(is_question_disability_to_save, field_question_disability),
        therapist: getRadio_QnA(is_question_therapist_to_save, field_question_therapist),
        repeated_grade: getRadio_QnA(is_question_repeated_grade_to_save, field_question_repeated_grade),
        suspended: getRadio_QnA(is_question_suspended_to_save, field_question_suspended),
        illness: getRadio_QnA(is_question_illness_to_save, field_question_illness),

        // Handle other field in dropdown. This is specific for religion dropdown as of now.
        student_religion: getDropdownWithOther(dropdown_religion, field_religion_other),

        // Handle table for this dropdowns
        any_previous_schools: getDataFromTableRowsIncludedInDropdown(dropdown_any_previous_schools, table_body_previous_school, "pre"),
        any_siblings: getDataFromTableRowsIncludedInDropdown(dropdown_any_sibling, table_body_sibling, "sib")

    };
}


function sendDataToServerUsingAjax() {


    console.log("Click on submit detected");
    console.log("Logging Values : \n" + (JSON.stringify(getFormInputData())));

    $.ajax({
        url: '/student/new-admission',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({new_admission_data: getFormInputData()}),
        success: function (response) {
            console.log(response.success);
        }
    });

    //TODO: Handle and output when data is successfully sent to the server:
    // if (isNoFieldEmpty && isNoDropdownUnselected) {

    // } else {
    //     if (!isNoDropdownUnselected) {
    //         alert("Please check : Dropdown value is unselected : ");
    //     } else if (!isNoFieldEmpty) {
    //         alert("Please check : Input box value is empty : ");
    //     } else {
    //         alert("Please check : Something Else is empty :  ");
    //     }
    // }

}

$(documentReady);


