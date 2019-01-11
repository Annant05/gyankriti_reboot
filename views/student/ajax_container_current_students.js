$(documentReady);

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
            console.log("\n isSuccess receiving data from server : ", JSON.stringify(response.body.isSuccess));
            if (response.body.isSuccess) {
                const arrayOfStudnetsInfo = response.body.studentsObject.Items;
                // console.log(JSON.stringify(arrayOfStudnetsInfo));
                datatable_functions(arrayOfStudnetsInfo);
            }
        }
    });
    // datatable_functions(null);

}


async function datatable_functions(arrayOfStudents) {
    console.log("\nexecuting datatable_functions();");
    let datatable_students = $('#students_table').DataTable({
        "scrollY": '50vh',
        "scrollX": true,
        "paging": true,
        "ordering": true,
        "order": [[0, "asc"]]
    });

    if (arrayOfStudents !== null) {
        await arrayOfStudents.forEach((student) => {
            console.log("adding rows to the datatable");
            datatable_students.row.add([
                student.student_enrollment,
                (student.student_fname + " " + student.student_lname),
                student.student_standard,
                student.student_section,
                student.student_vanRoute,
                student.student_email
            ]).draw(true);

        });
    } else {
        console.log("no data received from server.");
    }
}



