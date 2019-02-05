function documentReady() {

    $("#upload").click(function () {

        let fd = new FormData();

        let files = $('#profileImage')[0].files[0];

        fd.append('profileImage', files);

        $.ajax({
            url: '/student/upload_test',
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