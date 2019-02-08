function documentReady() {

    $("#display_button").click(function () {
        const s3url = `https://s3.ap-south-1.amazonaws.com/`;
        const BUCKET_NAME = `gyankriti2019/`;
        const prefix = `images/`;
        const aadhar = $("#input_aadhar").val();

        const student_suffix = `_student_img.jpg`;
        const father_suffix = `_father_img.jpg`;
        const mother_suffix = `_mother_img.jpg`;


        function getImageS3URL(suffix) {
            console.log("generating url  : " ,s3url + BUCKET_NAME + prefix + aadhar + suffix );
            return (s3url + BUCKET_NAME + prefix + aadhar + suffix);
        }


        $('#student_img').attr('src', getImageS3URL(student_suffix));
        $('#father_img').attr('src', getImageS3URL(father_suffix));
        $('#mother_img').attr('src', getImageS3URL(mother_suffix));


    });

}

$(documentReady);