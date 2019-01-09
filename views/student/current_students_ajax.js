$(documentReady);

// const selector_student_table_main_body = $('#table_main_body');

// let

function documentReady() {
    // DOM Ready - do your stuff

    let selector_students_table_body = $('#students_table tbody');
    selector_students_table_body.on('click', 'tr', function () {
        $(this).toggleClass('selected');
    });

    $('#button').on('click', function () {
        alert(table.rows('.selected').data().length + ' row(s) selected');
    });

    $.ajax({
        url: '/student/current_students',
        method: 'POST',
        contentType: 'application/json',
        // data: JSON.stringify({new_admission_data: getFormInputsData()}),
        success: (response) => {
            console.log("\n isSuccess : ", JSON.stringify(response.body.isSuccess));
            if (response.body.isSuccess) {
                const arrayOfStudnetsInfo = response.body.studentsObject.Items;
                // console.log(JSON.stringify(arrayOfStudnetsInfo));
                datatable_functions(arrayOfStudnetsInfo);
            }
        }
    });

//end of document ready
}


async function datatable_functions(arrayOfStudents) {

    let datatable_students = $('#students_table').DataTable({
        "scrollY": '50vh',
        "scrollX": true,
        "paging": true,
        "ordering": true,
        "order": [[0, "asc"]]
    });

    await arrayOfStudents.forEach((student) => {
        console.log(student);
        datatable_students.row.add([

            student.student_enrollment,
            (student.student_fname + " " + student.student_lname),
            student.student_standard,
            student.student_section,
            student.student_vanRoute,
            student.student_email
        ]).draw(true);

    });
}



