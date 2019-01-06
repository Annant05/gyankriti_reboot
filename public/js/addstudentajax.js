const student_fname = $("#inputstu_fname");
const student_lname = $("#inputstu_lname");
const student_dob = $("#inputstu_dob");
const student_gender = $("input[name=inputstu_gender]:checked");        // testing needed

const student_city = $("#inputstu_city");
const student_residentialAddress = $("#inputstu_address");
const student_addressLine2 = $("#inputstu_addressline2");

const student_username = $("#inputstu_username");
const student_enrollment = $("#inputstu_enrollment");
const student_dateAdmission = $("#inputstu_doadmission");

const student_standard = $("#inputstu_standard");
const student_section = $("#inputstu_section");
const student_vanRoute = $("#inputstu_vanroute");
const student_email = $("#inputstu_email");

const father_name = $("#inputfather_name");
const father_email = $("#inputfather_email");
const father_mobile = $("#inputfather_mob");

const mother_name = $("#inputmother_name");
const mother_email = $("#inputmother_email");
const mother_mobile = $("#inputmother_mob");


const button_submit = $("#button_submit");

button_submit.click(sendData);

function sendData() {

    console.log("Click Detected");

    const val_student_fname = student_fname.val();
    const val_student_lname = student_lname.val();
    const val_student_dob = student_dob.val();
    const val_student_gender = student_gender.val();

    const val_student_city = student_city.val();
    const val_student_residentialAddress = student_residentialAddress.val();
    const val_student_addressLine2 = student_addressLine2.val();

    const val_student_username = student_username.val();
    const val_student_enrollment = student_enrollment.val();
    const val_student_dateAdmission = student_dateAdmission.val();

    const val_student_standard = student_standard.val();
    const val_student_section = student_section.val();
    const val_student_vanRoute = student_vanRoute.val();

    const val_student_email = student_email.val();

    const val_father_name = father_name.val();
    const val_father_email = father_email.val();
    const val_father_mobile = father_mobile.val();

    const val_mother_name = mother_name.val();
    const val_mother_email = mother_email.val();
    const val_mother_mobile = mother_mobile.val();
    const val_button_submit = button_submit.val();


    console.log("Logging Values");

    console.log("val_student_fname :" + val_student_fname + " \n ");
    console.log("val_student_lname :" + val_student_lname + " \n ");
    console.log("val_student_dob :" + val_student_dob + " \n ");
    console.log("val_student_gender :" + val_student_gender + " \n ");
    console.log("val_student_city :" + val_student_city + " \n ");
    console.log("val_student_residentialAddress :" + val_student_residentialAddress + " \n ");
    console.log("val_student_addressLine2 :" + val_student_addressLine2 + " \n ");
    console.log("val_student_username :" + val_student_username + " \n ");
    console.log("val_student_enrollment :" + val_student_enrollment + " \n ");
    console.log("val_student_dateAdmission :" + val_student_dateAdmission + " \n ");
    console.log("val_student_standard :" + val_student_standard + " \n ");
    console.log("val_student_section :" + val_student_section + " \n ");
    console.log("val_student_vanRoute :" + val_student_vanRoute + " \n ");
    console.log("val_student_email :" + val_student_email + " \n ");
    console.log("val_father_name :" + val_father_name + " \n ");
    console.log("val_father_email :" + val_father_email + " \n ");
    console.log("val_father_mobile :" + val_father_mobile + " \n ");
    console.log("val_mother_name :" + val_mother_name + " \n ");
    console.log("val_mother_email :" + val_mother_email + " \n ");
    console.log("val_mother_mobile :" + val_mother_mobile + " \n ");
    console.log("val_button_submit :" + val_button_submit + " \n ");

}