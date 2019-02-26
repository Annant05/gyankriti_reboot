//Section 1 - student_general
let dropdown_admission_year = null;
let dropdown_admission_standard = null;
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

// images displaying before uploading
let img_student = null;
let img_father = null;
let img_mother = null;

//submit button - save information
let button_toggle_modal = null;

// Image buttons
let button_student_image = null;
let input_student_image = null;

let button_father_image = null;
let input_father_image = null;

let button_mother_image = null;
let input_mother_image = null;

// buttons for actions in the modal

let button_modal_save_and_print = null;
let button_modal_save_only = null;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//*  some booleans to be used for form submission.   */

let is_question_disability_to_save = false;
let is_question_therapist_to_save = false;
let is_question_repeated_grade_to_save = false;
let is_question_suspended_to_save = false;
let is_question_illness_to_save = false;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* global variables */

let globalVariableStudentJson = null;

//* array of options    */
let options_array = null;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function initializeJquerySelectors() {
    console.log("initializing jquery selectors");

    //Section 1 - student_general
    dropdown_admission_year = $("#dropdown_admission_year");
    dropdown_admission_standard = $("#dropdown_admission_standard");
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

    // Images for uploading
    img_student = $('#img_student');
    img_father = $('#img_father');
    img_mother = $('#img_mother');


    //submit button - save information
    button_toggle_modal = $("#button_toggle_modal");

    // button to handle image uploads.
    button_student_image = $("#button_student_image");
    input_student_image = $("#input_student_image");

    button_father_image = $("#button_father_image");
    input_father_image = $("#input_father_image");

    button_mother_image = $("#button_mother_image");
    input_mother_image = $("#input_mother_image");

    // buttons for modal actions.
    button_modal_save_and_print = $("#button_modal_save_and_print");
    button_modal_save_only = $("#button_modal_save_only");

    // initialize options_array
    options_array = options_config.new_admission;

    console.log("initializing jquery selectors complete");
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Functions declaration and definition

function disableInputField(selector, isDisabled) {
    console.log(`disable/enable ${selector.attr('id')}`);

    if (isDisabled) {
        selector.prop("disabled", true);
    } else {
        selector.prop("disabled", false);
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

    append_options_to_dropdown(dropdown_admission_year, options_array.academic_session);
    append_options_to_dropdown(dropdown_admission_standard, options_array.admission_standard);
    append_options_to_dropdown(dropdown_gender, options_array.gender);

    append_options_to_dropdown(dropdown_nationality, options_array.nationality);
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


function showUploadedImage(imageInput, image_selector) {
    if (imageInput.files && imageInput.files[0]) {
        let reader = new FileReader();

        reader.onload = function (e) {
            image_selector.attr('src', e.target.result);
        };

        reader.readAsDataURL(imageInput.files[0]);
    }
}


function documentReady() {
    initializeJquerySelectors();
    initializeDropdown();

    $(':input').keypress(function () {
        $(this).next(':input').focus();
    });

    // disableDropdownField(field_religion_other, true);


    button_modal_save_and_print.click(saveAndPrint);

    button_modal_save_only.click(saveOnly);

    // button_toggle_modal.click(uploadImagesAndDataToServer);


    input_student_image.change(function () {
        showUploadedImage(this, img_student);
    });

    input_father_image.change(function () {
        showUploadedImage(this, img_father);
    });

    input_mother_image.change(function () {
        showUploadedImage(this, img_mother);
    });

    button_student_image.click(() => {
        input_student_image.trigger('click');
    });

    button_father_image.click(() => {
        input_father_image.trigger('click');
    });

    button_mother_image.click(() => {
        input_mother_image.trigger('click');
    });


    //* handle dropdown fields */
    dropdown_religion.change(() => {
        if (getValFromDropdown(dropdown_religion) === "Other") {
            disableInputField(field_religion_other, false);
        } else {
            disableInputField(field_religion_other, true);
        }
    });


    // display and hide table of previous schools

    // Generate table rows for previous schools
    dropdown_any_previous_schools.change(() => {
        table_previous_school.removeClass("display-none");
        let valDropdown = (dropdown_any_previous_schools.children("option").filter(":selected").val());
        if (valDropdown === 'choose' || valDropdown === 'No') {
            table_previous_school.addClass("display-none")
        } else {
            table_previous_school.removeClass("display-none");
            generateTable(table_body_previous_school, Number(valDropdown), "pre");
        }
    });


    // Generate table rows for siblings table
    dropdown_any_sibling.change(() => {
        table_sibling.removeClass("display-none");
        let valDropdown = (dropdown_any_sibling.children("option").filter(":selected").val());
        if (valDropdown === 'choose' || valDropdown === 'No') {
            table_sibling.addClass("display-none")
        } else {
            table_sibling.removeClass("display-none");
            generateTable(table_body_sibling, Number(valDropdown), "sib");
        }
    });

    //*handle radio button clicks and their fields to be disabled and enabled */

    //for question 1
    radio_question_disability_no.on("click", () => {
        disableInputField(field_question_disability, true);
        is_question_disability_to_save = false;
    });
    radio_question_disability_yes.on("click", () => {
        disableInputField(field_question_disability, false);
        is_question_disability_to_save = true;
    });


    //for question 2
    radio_question_therapist_no.on("click", () => {
        disableInputField(field_question_therapist, true);
        is_question_therapist_to_save = false;
    });
    radio_question_therapist_yes.on("click", () => {
        disableInputField(field_question_therapist, false);
        is_question_therapist_to_save = true;
    });


    //for question 3
    radio_question_repeated_grade_no.on("click", () => {
        disableInputField(field_question_repeated_grade, true);
        is_question_repeated_grade_to_save = false;
    });
    radio_question_repeated_grade_yes.on("click", () => {
        disableInputField(field_question_repeated_grade, false);
        is_question_repeated_grade_to_save = true;
    });


    // for question 4
    radio_question_suspended_no.on("click", () => {
        disableInputField(field_question_suspended, true);
        is_question_suspended_to_save = false;
    });
    radio_question_suspended_yes.on("click", () => {
        disableInputField(field_question_suspended, false);
        is_question_suspended_to_save = true;
    });


    //for question 5
    radio_question_illness_no.on("click", () => {
        disableInputField(field_question_illness, true);
        is_question_illness_to_save = false;
    });
    radio_question_illness_yes.on("click", () => {
        disableInputField(field_question_illness, false);
        is_question_illness_to_save = true;
    });

}


function getFormInputData() {


    function getRadio_QnA(radio_boolean, selector_field_question) {

        if (radio_boolean) {
            return {
                is_applicable: radio_boolean,
                reason: (selector_field_question.val()).trim()
            };
        } else {
            return {
                is_applicable: radio_boolean
            };
        }
    }


    function getDropdownWithOther(dropdown_selector, field_other_answer) {

        let valDropDown = getValFromDropdown(dropdown_selector);
        if (valDropDown === "Other") {
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

        if (valDropdown === 'No') {
            return {
                value: valDropdown,
                table_array: null
            }
        } else {
            console.log("No of rows to generate :" + Number(valDropdown));
            let tableData = [];

            for (let rowNo = 1; rowNo <= Number(valDropdown); rowNo++) {

                let array_element = {
                    school_name: ($(`#${id_prefix}_a${rowNo}`).val()).trim(),
                    city_and_state: ($(`#${id_prefix}_b${rowNo}`).val()).trim(),
                    year_of_admission: ($(`#${id_prefix}_c${rowNo}`).val()).trim(),
                    grades_completed: ($(`#${id_prefix}_d${rowNo}`).val()).trim(),
                    board_pattern: ($(`#${id_prefix}_e${rowNo}`).val()).trim()
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

        academic_session: getValFromDropdown(dropdown_admission_year),
        admission_standard: getValFromDropdown(dropdown_admission_standard),

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

        // Handle table for this dropdown
        any_previous_schools: getDataFromTableRowsIncludedInDropdown(dropdown_any_previous_schools, table_body_previous_school, "pre"),
        any_siblings: getDataFromTableRowsIncludedInDropdown(dropdown_any_sibling, table_body_sibling, "sib")

    };
}


function uploadImagesAndDataToServer() {


    function generateImageS3URL(file_name) {
        // This function will generate image in s3's url to be saved in the database.

        const S3_URL = `https://s3.ap-south-1.amazonaws.com/`;
        const BUCKET_NAME = `gyankriti2019/`;
        const S3_DIRECTORY_PREFIX = `images/`;

        console.log("generating url  : ", S3_URL + BUCKET_NAME + S3_DIRECTORY_PREFIX + file_name);
        return (S3_URL + BUCKET_NAME + S3_DIRECTORY_PREFIX + file_name);
    }


    function sendJsonDataToServerUsingAjax(newAdmissionJSON) {

        // function definition ended


        console.log("Click on submit detected");
        console.log("Logging form Values : \n" + JSON.stringify(newAdmissionJSON));

        globalVariableStudentJson = newAdmissionJSON;

        $.ajax({
            url: '/student/new-admission',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({new_admission_data: newAdmissionJSON}),
            success: function (response) {
                console.log(response.success);
                if (response.success) {

                    $.cookie('student_name', globalVariableStudentJson.student_first_name + " " + globalVariableStudentJson.student_last_name, {expires: 1});
                    $.cookie('student_aadhar', globalVariableStudentJson.student_aadhar, {expires: 1});
                    $.cookie('admission_standard', globalVariableStudentJson.admission_standard, {expires: 1});


                    // save to session storage
                    sessionStorage.setItem("new_admission_data", JSON.stringify(newAdmissionJSON));

                    console.log("Information saved to the database.");
                } else {
                    alert("There was some error in saving the information.")
                }
            }
        });

    }


    let modified_new_admission_data = getFormInputData();

    // created using=  year of birth + last 4 digits of aadhar card no of student
    const image_url_identifier_s3key = (modified_new_admission_data.student_aadhar).slice(-4) + "_" + (modified_new_admission_data.student_date_of_birth).slice(0, 4);

    let fd = new FormData();

    let student_image = input_student_image[0].files[0];
    let father_image = input_father_image[0].files[0];
    let mother_image = input_mother_image[0].files[0];


    console.log("File extension of student image is : " + (student_image.name).split('.').pop());
    console.log("File extension of father image is : " + (father_image.name).split('.').pop());
    console.log("File extension of mother image is : " + (mother_image.name).split('.').pop());

    const student_filename = image_url_identifier_s3key + `_student_img` + '.' + (student_image.name).split('.').pop();
    const father_filename = image_url_identifier_s3key + `_father_img` + '.' + (father_image.name).split('.').pop();
    const mother_filename = image_url_identifier_s3key + `_mother_img` + '.' + (mother_image.name).split('.').pop();

    modified_new_admission_data['student_image_url'] = generateImageS3URL(student_filename);
    modified_new_admission_data['father_image_url'] = generateImageS3URL(father_filename);
    modified_new_admission_data['mother_image_url'] = generateImageS3URL(mother_filename);

    fd.append('input_student_image', student_image, student_filename);
    fd.append('input_father_image', father_image, father_filename);
    fd.append('input_mother_image', mother_image, mother_filename);


    // generate image url with extension to the json data.


    console.log(student_filename);
    console.log(father_filename);
    console.log(mother_filename);


    $.ajax({
        url: '/student/upload-images',
        type: 'post',
        data: fd,
        contentType: false,
        processData: false,
        success: function (response) {
            if (response.success) {
                console.log("Image upload success");
                sendJsonDataToServerUsingAjax(modified_new_admission_data);
            } else {
                alert('file not uploaded');
            }
        }
    });

}


function saveAndPrint() {

    // save data to server
    uploadImagesAndDataToServer();

    // print The form
    // noinspection JSUnusedLocalSymbols
    window.onafterprint = function (e) {
        $(window).off('mousemove', window.onafterprint);
        console.log('Print Dialog Closed..');
    };

    window.print();

    setTimeout(function () {
        $(window).one('mousemove', window.onafterprint);
    }, 3);

    // redirect to next page
    redirectToGyankritiAdmissionPage();

}

function saveOnly() {
    uploadImagesAndDataToServer();
    redirectToGyankritiAdmissionPage()
}


function redirectToGyankritiAdmissionPage() {

    window.location.replace("/student/gyankriti-information");

}


$(documentReady);


