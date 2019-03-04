function documentReady() {

    $("#display_button").click(function () {


        $.ajax({
            url: '/student/student-info',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                identifier_key: ($("#input_aadhar").val()).trim()
            }),
            success: (response) => {
                console.log("\n isSuccess receiving data from server : ", JSON.stringify(response.body.isSuccess));
                if (response.body.isSuccess) {
                    const JsonObj = response.body.admissionObject;

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