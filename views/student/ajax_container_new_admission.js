// define all the selector and global variables below
let selector_student_fname;
let selector_student_lname;
let selector_student_dob;
let selector_student_city;
let selector_student_residentialAddress;
let selector_student_addressLine2;
let selector_student_username;
let selector_student_enrollment;
let selector_student_dateAdmission;
let selector_student_standard;
let selector_student_section;
let selector_student_vanRoute;
let selector_student_email;
let selector_father_name;
let selector_father_email;
let selector_father_mobile;
let selector_mother_name;
let selector_mother_email;
let selector_mother_mobile;
let selector_button_submit;


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
    selector_student_standard = $("#inputstu_standard");
    selector_student_section = $("#inputstu_section");
    selector_student_vanRoute = $("#inputstu_vanroute");
    selector_student_email = $("#inputstu_email");
    selector_father_name = $("#inputfather_name");
    selector_father_email = $("#inputfather_email");
    selector_father_mobile = $("#inputfather_mob");
    selector_mother_name = $("#inputmother_name");
    selector_mother_email = $("#inputmother_email");
    selector_mother_mobile = $("#inputmother_mob");
    selector_button_submit = $("#button_submit");
    console.log("Selector initialized");

    function getFormInputsData() {


        function getGender() {
            const selector_gender_radio = $("input[name='inputstu_gender']:checked");
            return selector_gender_radio.val();
        }

        // noinspection UnnecessaryLocalVariableJS
        const val_formInputData = {
            student_enrollment: selector_student_enrollment.val(),   // This is the HASH  key.
            student_lname: selector_student_lname.val(),
            student_fname: selector_student_fname.val(),
            student_dob: selector_student_dob.val(),
            student_city: selector_student_city.val(),
            student_residentialAddress: selector_student_residentialAddress.val(),
            student_addressLine2: selector_student_addressLine2.val(),
            student_username: selector_student_username.val(),
            student_dateAdmission: selector_student_dateAdmission.val(),
            student_standard: selector_student_standard.val(),
            student_section: selector_student_section.val(),
            student_vanRoute: selector_student_vanRoute.val(),
            student_email: selector_student_email.val(),
            father_name: selector_father_name.val(),
            father_email: selector_father_email.val(),
            father_mobile: selector_father_mobile.val(),
            mother_name: selector_mother_name.val(),
            mother_email: selector_mother_email.val(),
            mother_mobile: selector_mother_mobile.val(),
            student_gender: getGender()

        };

        return val_formInputData;
    }


// TODO:  Temporary function till bootstrap validator and proper validation is applied.
    function isInputFieldsNotEmpty() {
        let isNotEmpty = true;
        const formData = getFormInputsData();
        Object.keys(formData).forEach(function (key) {
            // console.log(key + ": " + formData[key]);
            if (formData[key] === "") isNotEmpty = true;
        });

        if (formData.student_gender === undefined) isNotEmpty = false;
        console.log("isInputFieldsNotEmpty() return value :  " + isNotEmpty);
        return isNotEmpty;
    }


    function sendDataUsingAjax() {

        console.log("Click Detected");
        console.log("Logging Values : /n" + JSON.stringify(getFormInputsData()));

        //TODO: Handle and output when data is successfully sent to the server:
        if (isInputFieldsNotEmpty())
            $.ajax({
                url: '/student/new_admission',
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({new_admission_data: getFormInputsData()}),
                success: function (response) {
                    console.log(response.success);
                }
            });
        else {
            alert("Please Check : Some field(s) are empty");
        }
    }

    selector_button_submit.click(sendDataUsingAjax);

}

$(documentReady);

//define Actions and function calls below

function nextTab(tabId) {
    let tabSelector = '#new_admission_tabs a[href="' + tabId + '"]';
    console.log(tabSelector);
    $(tabSelector).tab('show');
}

function previousTab(tabId) {
    let tabSelector = '#new_admission_tabs a[href="' + tabId + '"]';
    console.log(tabSelector);
    $(tabSelector).tab('show');
}