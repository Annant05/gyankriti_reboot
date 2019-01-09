$(documentReady);

const selector_student_table_main_body = $('#table_main_body');

function documentReady() {
    // DOM Ready - do your stuff
    $('#students_table').DataTable({
        "scrollY": '50vh',
        "scrollX": true,
        "paging": true,
        "ordering": true,
        "order": [[1, "asc"]]
    });


    let table_examples = $('#students_table tbody');
    table_examples.on('click', 'tr', function () {
        $(this).toggleClass('selected');
    });

    table_examples.on('mouseenter', 'td', function () {
        const colIdx = table.cell(this).index().column;

        $(table.cells().nodes()).removeClass('highlight');
        $(table.column(colIdx).nodes()).addClass('highlight');
    });

    $('#button').on('click', function () {
        alert(table.rows('.selected').data().length + ' row(s) selected');
    });

    $.ajax({
        url: '/student/current_students',
        method: 'POST',
        contentType: 'application/json',
        // data: JSON.stringify({new_admission_data: getFormInputsData()}),
        success: (response) => (handleResponse(response))
    });


//end of document ready
}


function handleResponse(response) {
    console.log("\n isSuccess : ", JSON.stringify(response.body.isSuccess));
    if (response.body.isSuccess) {
        const arrayOfStudnetsInfo = response.body.studentsObject.Items;
        // console.log(JSON.stringify(arrayOfStudnetsInfo));


        arrayOfStudnetsInfo.forEach((student) => {
            console.log(student);
            let appendRow =
                `<tr>
                        <td>    ${student.student_enrollment}  </td>
                        <td>    ${student.student_fname + " " + student.student_lname}</td>
                        <td>    ${student.student_standard}    </td>
                        <td>    ${student.student_section}     </td>
                        <td>    ${student.student_vanRoute}    </td>
                        <td>    ${student.student_email}       </td>
                </tr>`;

            selector_student_table_main_body.append(appendRow);
        })
    }

}
