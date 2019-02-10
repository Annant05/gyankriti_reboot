function documentReady() {

    $("#display_button").click(function () {


        $.ajax({
            url: '/student/gyankriti-students',
            method: 'POST',
            contentType: 'application/json',
            // data: JSON.stringify({new_admission_data: getFormInputsData()}),
            success: (response) => {
                console.log("\n isSuccess receiving data from server : ", JSON.stringify(response.body.isSuccess));
                if (response.body.isSuccess) {
                    const JsonObj = response.body.studentsObject.Items[0];

                    console.log(JSON.stringify(JsonObj));

                    $('#student_img').attr('src', JsonObj.student_image_url);
                    $('#father_img').attr('src', JsonObj.father_image_url);
                    $('#mother_img').attr('src', JsonObj.mother_image_url);
                    // console.log(JSON.stringify(arrayOfStudnetsInfo));

                }
            }
        });


    });

}

$(documentReady);