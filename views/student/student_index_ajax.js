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
    });

    setGyankritiStudentsVisibility();
}

function setGyankritiStudentsVisibility() {
    selector_main_content_container.children().remove();
    // On isVisible = true // gyankriti students table will be shown.
    if (isVisible) {
        $(body.page_gyankriti_student.HTML).appendTo(selector_main_content_container);
        document.title = body.page_gyankriti_student.TITLE;

    } else {
        $(body.page_new_admission.HTML).appendTo(selector_main_content_container);
        document.title = body.page_new_admission.TITLE;
    }
}

function changeContainer() {
    isVisible = !isVisible;
    setGyankritiStudentsVisibility();
}

