// define all the selector and global variables below
$(documentReady);

function documentReady() {
    const selector_student_fname = $("#inputstu_fname");
    const selector_student_lname = $("#inputstu_lname");
    const selector_student_dob = $("#inputstu_dob");

    const selector_student_city = $("#inputstu_city");
    const selector_student_residentialAddress = $("#inputstu_address");
    const selector_student_addressLine2 = $("#inputstu_addressline2");

    const selector_student_username = $("#inputstu_username");
    const selector_student_enrollment = $("#inputstu_enrollment");
    const selector_student_dateAdmission = $("#inputstu_doadmission");

    const selector_student_standard = $("#inputstu_standard");
    const selector_student_section = $("#inputstu_section");
    const selector_student_vanRoute = $("#inputstu_vanroute");
    const selector_student_email = $("#inputstu_email");

    const selector_father_name = $("#inputfather_name");
    const selector_father_email = $("#inputfather_email");
    const selector_father_mobile = $("#inputfather_mob");

    const selector_mother_name = $("#inputmother_name");
    const selector_mother_email = $("#inputmother_email");
    const selector_mother_mobile = $("#inputmother_mob");

    const selector_button_submit = $("#button_submit");


// Write function definitions below

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

//define Actions and function calls below
    selector_button_submit.click(sendDataUsingAjax);
}