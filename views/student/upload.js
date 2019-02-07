function documentReady() {

    $("#upload").click(function () {

        let fd = new FormData();
        let aadhar = '123465417859';

        let profiles = $('#profileImage')[0].files[0];
        let xfile = $('#xfile')[0].files[0];

        fd.append('profileImage', profiles, 'student_img_' + aadhar);
        fd.append('xfile', xfile, 'father_img_' + aadhar);


        $.ajax({
            url: '/student/upload',
            type: 'post',
            data: fd,
            contentType: false,
            processData: false,
            success: function (response) {
                if (response.success) {
                    alert("Image upload success") // Display image element
                } else {
                    alert('file not uploaded');
                }
            }
        });
    });

}

$(documentReady);