// define all the selector and global variables below

// selectors of all the input fields;
// selectors for general student information.
let selector_student_fname;
let selector_student_lname;
let selector_student_city;
let selector_student_residentialAddress;
let selector_student_addressLine2;
let selector_student_dob;

//selector for data to be filled by gyankriti.
let selector_student_username;
let selector_student_enrollment;
let selector_student_dateAdmission;
let selector_student_email;

//selector for father's information
let selector_father_name;
let selector_father_email;
let selector_father_mobile;

//selector for mother's information
let selector_mother_name;
let selector_mother_email;
let selector_mother_mobile;

//selector for all the dropdowns.
let selector_student_gender;
let selector_student_standard;
let selector_student_section;
let selector_student_vanRoute;
let selector_student_vanShift;
let selector_student_feeStructure;

//selector for buttons.
let selector_button_submit;

let isNoFieldEmpty;
let isNoDropdownUnselected;

// Write function definitions below
function documentReady() {
    selector_student_fname = $("#inputstu_fname");
    selector_student_lname = $("#inputstu_lname");
    selector_student_dob = $("#inputstu_dob");
    selector_student_city = $("#inputstu_city");
    selector_student_residentialAddress = $("#inputstu_address");
    selector_student_addressLine2 = $("#inputstu_addressline2");
    selector_student_username = $("#inputstu_username");
    selector_student_enrollment = $("#inputstu_enrollment");
    selector_student_dateAdmission = $("#inputstu_doadmission");
    selector_student_email = $("#inputstu_email");
    selector_father_name = $("#inputfather_name");
    selector_father_email = $("#inputfather_email");
    selector_father_mobile = $("#inputfather_mob");
    selector_mother_name = $("#inputmother_name");
    selector_mother_email = $("#inputmother_email");
    selector_mother_mobile = $("#inputmother_mob");

    selector_student_standard = $("#inputstu_standard");
    selector_student_section = $("#inputstu_section");
    selector_student_vanRoute = $("#inputstu_vanroute");
    selector_student_vanShift = $("#inputstu_vanshift");
    selector_student_gender = $("#inputstu_gender");
    selector_student_feeStructure = $("#inputstu_feestructure");


    selector_button_submit = $("#button_submit");
    console.log("Selector initialized");

    function getFormInputsData() {
        isNoFieldEmpty = true;
        isNoDropdownUnselected = true;


        function getValFromDropdown(dropdown_selector) {
            let valueDropdownOption = dropdown_selector.children("option").filter(":selected").val();
            if (valueDropdownOption === 'select') {
                isNoDropdownUnselected = false;
                // alert("Please check : dropdown value is unselected : " + dropdown_selector.toString());
            } else {
                return valueDropdownOption;
            }
        }

        function getValFromInputText(input_selector) {
            let valueInputText = input_selector.val();
            if (valueInputText === '') {
                isNoFieldEmpty = false;
                // alert("Please check : input box value is empty : " + input_selector.toString())
            } else {
                return valueInputText;
            }
        }

        // noinspection UnnecessaryLocalVariableJS
        const val_formInputData = {
            student_enrollment: getValFromInputText(selector_student_enrollment),   // This is the HASH  key.
            student_lname: getValFromInputText(selector_student_lname),
            student_fname: getValFromInputText(selector_student_fname),
            student_dob: getValFromInputText(selector_student_dob),
            student_city: getValFromInputText(selector_student_city),
            student_residentialAddress: getValFromInputText(selector_student_residentialAddress),
            student_addressLine2: getValFromInputText(selector_student_addressLine2),
            student_username: getValFromInputText(selector_student_username),
            student_dateAdmission: getValFromInputText(selector_student_dateAdmission),
            student_email: getValFromInputText(selector_student_email),
            father_name: getValFromInputText(selector_father_name),
            father_email: getValFromInputText(selector_father_email),
            father_mobile: getValFromInputText(selector_father_mobile),
            mother_name: getValFromInputText(selector_mother_name),
            mother_email: getValFromInputText(selector_mother_email),
            mother_mobile: getValFromInputText(selector_mother_mobile),

            student_gender: getValFromDropdown(selector_student_gender),
            student_standard: getValFromDropdown(selector_student_standard),
            student_section: getValFromDropdown(selector_student_section),
            student_vanRoute: getValFromDropdown(selector_student_vanRoute),
            student_vanShift: getValFromDropdown(selector_student_vanShift),
            student_feeStructure: getValFromDropdown(selector_student_feeStructure)

        };

        return val_formInputData;
    }


    function sendDataUsingAjax() {

        console.log("Click on submit detected");
        console.log("Logging Values : \n" + (JSON.stringify(getFormInputsData())));

        //TODO: Handle and output when data is successfully sent to the server:
        if (isNoFieldEmpty && isNoDropdownUnselected) {
            $.ajax({
                url: '/student/new_admission',
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({new_admission_data: getFormInputsData()}),
                success: function (response) {
                    console.log(response.success);
                }
            });
        } else {
            if (!isNoDropdownUnselected) {
                alert("Please check : Dropdown value is unselected : ");
            } else if (!isNoFieldEmpty) {
                alert("Please check : Input box value is empty : ");
            } else {
                alert("Please check : Something Else is empty :  ");

            }
        }

    }

    selector_button_submit.click(sendDataUsingAjax);

}

$(documentReady);

//define Actions and function calls below

// function nextTab(tabId) {
//     let tabSelector = '#new_admission_tabs a[href="' + tabId + '"]';
//     console.log(tabSelector);
//     $(tabSelector).tab('show');
// }
//
// function previousTab(tabId) {
//     let tabSelector = '#new_admission_tabs a[href="' + tabId + '"]';
//     console.log(tabSelector);
//     $(tabSelector).tab('show');
// }