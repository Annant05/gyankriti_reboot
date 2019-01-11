const selector_main_content_container = $("#main_content_container");

let body;
let isVisible = true;
$(documentReady);

async function documentReady() {


    await $.ajax({
        url: '/student/containers',
        method: 'GET',
        contentType: 'application/json',
        // data: JSON.stringify({new_admission_data: getFormInputsData()}),
        success: (response) => {
            body = response.body;
            // console.log(JSON.stringify(response.body.page_gyankriti_student.HTML));
        }
    }).done(addContainers);

    function addContainers() {
        $(body.page_gyankriti_student.HTML).appendTo(selector_main_content_container);
        $(body.page_new_admission.HTML).appendTo(selector_main_content_container);
    }

    $("#admission_form_container").toggleClass("invisible");
    setGyankritiStudentsVisibility();

}

function setGyankritiStudentsVisibility() {

    // On isVisible = true // gyankriti students table will be shown.
    if (isVisible) {
        document.title = body.page_gyankriti_student.TITLE;
        $("#gyankriti_students_container").toggleClass("invisible");
        $("#admission_form_container").toggleClass("invisible");

    } else {
        document.title = body.page_new_admission.TITLE;
        $("#gyankriti_students_container").toggleClass("invisible");
        $("#admission_form_container").toggleClass("invisible");

    }
}

function changeContainer() {
    isVisible = !isVisible;
    setGyankritiStudentsVisibility();
}

