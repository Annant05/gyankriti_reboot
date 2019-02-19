let dropdown_query = null;
let dropdown_grade = null;
let dropdown_section = null;
let dropdown_route = null;
let dropdown_shift = null;

let button_search = null;

let isNoDropDownEmpty = false;


let tempJSON = [
    {
        "father_name": "Father Name",
        "mother_email": "jhvhv@gjnj.com",
        "time_of_admission": "1550060402",
        "permanent_address": "vbh",
        "student_nationality": "Indian",
        "mother_mobile_no": "6843843843",
        "student_date_of_birth": "2019-02-07",
        "present_address": "606, Divine Greens, Near Nipania Village, Indore",
        "present_pincode": "452010",
        "emergency_contact": "9780655565",
        "any_previous_schools": {
            "table_array": null,
            "value": "No"
        },
        "present_state": "Madhya Pradesh",
        "child_lives_with": "Both Parents",
        "mother_aadhar": "878787878787",
        "father_samagra_ssmid": "8338384384384",
        "present_city": "Indore",
        "permanent_pincode": "454444",
        "student_caste": "SC",
        "illness": {
            "is_applicable": false
        },
        "disability": {
            "is_applicable": false
        },
        "father_aadhar": "786843848348",
        "academic_session": "2018",
        "therapist": {
            "is_applicable": false
        },
        "father_email": "ajbd@gkndgl.,com",
        "student_religion": {
            "value": "Christian"
        },
        "father_education_qualification": "ljdbfka",
        "mother_education_qualification": "kdsudsfkag",
        "admission_class": "S1",
        "mother_samagra_ssmid": "8787878787",
        "any_siblings": {
            "table_array": null,
            "value": "No"
        },
        "suspended": {
            "is_applicable": false
        },
        "student_gender": "Male",
        "admission_status": "completed",
        "repeated_grade": {
            "is_applicable": false
        },
        "student_samagra_ssmid": "4534534534534534",
        "father_occupation": "lkjb,kbv",
        "student_aadhar": "235345347534",
        "mother_name": "Mother name",
        "father_mobile_no": "4383843838",
        "father_name_of_organization": "lkjb,jb,kvj",
        "student_image_url": "https://s3.ap-south-1.amazonaws.com/gyankriti2019/images/7534_2019_student_img.png",
        "permanent_state": "Other",
        "student_first_name": "Student",
        "student_last_name": "Name",
        "the_parents_are": "Married",
        "father_image_url": "https://s3.ap-south-1.amazonaws.com/gyankriti2019/images/7534_2019_father_img.jpg",
        "mother_image_url": "https://s3.ap-south-1.amazonaws.com/gyankriti2019/images/7534_2019_mother_img.jpg",
        "adopted_child": "No",
        "permanent_city": "Other",
        "mother_occupation": "ughkugkygff",
        "mother_name_of_organization": "kgkgkugk"
    },
    {
        "father_name": "Father name",
        "time_of_admission": "1550148634",
        "mother_email": "email2@email.com",
        "permanent_address": "Vallabh Bhavan",
        "student_nationality": "Indian",
        "mother_mobile_no": "2804260055",
        "student_date_of_birth": "2007-02-15",
        "present_address": "606, Divine Greens, Near Nipania Village, Indore",
        "present_pincode": "452010",
        "emergency_contact": "9828285668",
        "any_previous_schools": {
            "table_array": [
                {
                    "board_pattern": "Eewdf",
                    "school_name": "Jdidnf",
                    "grades_completed": "3",
                    "city_and_state": "Gffde",
                    "year_of_admission": "2016"
                },
                {
                    "board_pattern": "Sbsbdb",
                    "school_name": "Wifnf",
                    "grades_completed": "4",
                    "city_and_state": "Wnnwfn",
                    "year_of_admission": "2019"
                }
            ],
            "value": "2"
        },
        "present_state": "Madhya Pradesh",
        "mother_aadhar": "172066106555",
        "child_lives_with": "Both Parents",
        "present_city": "Indore",
        "father_samagra_ssmid": "218858710",
        "permanent_pincode": "454446",
        "student_caste": "GENERAL",
        "illness": {
            "reason": "Another relevant information here",
            "is_applicable": true
        },
        "disability": {
            "is_applicable": false
        },
        "father_aadhar": "130056018620",
        "academic_session": "2019",
        "therapist": {
            "is_applicable": false
        },
        "father_email": "email1@email.com",
        "student_religion": {
            "value": "Hindu"
        },
        "father_education_qualification": "12th",
        "mother_education_qualification": "Qual1",
        "mother_samagra_ssmid": "528062186",
        "admission_class": "JS2",
        "any_siblings": {
            "table_array": [
                {
                    "board_pattern": "3rd",
                    "school_name": "Some sibling",
                    "grades_completed": "Vvv",
                    "city_and_state": "13",
                    "year_of_admission": "Male"
                }
            ],
            "value": "1"
        },
        "suspended": {
            "is_applicable": false
        },
        "student_gender": "Male",
        "admission_status": "pending",
        "repeated_grade": {
            "reason": "Some relevant information here.",
            "is_applicable": true
        },
        "student_samagra_ssmid": "228863178",
        "student_aadhar": "128899627899",
        "father_occupation": "Hello",
        "mother_name": "Mother name",
        "father_mobile_no": "2178548555",
        "father_name_of_organization": "Company 1",
        "student_image_url": "https://s3.ap-south-1.amazonaws.com/gyankriti2019/images/7899_2007_student_img.jpg",
        "permanent_state": "Madhya Pradesh",
        "student_first_name": "Test",
        "student_last_name": "Student 1",
        "the_parents_are": "Married",
        "father_image_url": "https://s3.ap-south-1.amazonaws.com/gyankriti2019/images/7899_2007_father_img.png",
        "mother_image_url": "https://s3.ap-south-1.amazonaws.com/gyankriti2019/images/7899_2007_mother_img.jpg",
        "adopted_child": "No",
        "permanent_city": "Other",
        "mother_occupation": "Ocup2",
        "mother_name_of_organization": "Company 2"
    },
    {
        "father_name": "Annant Gupta",
        "mother_email": "sdsdsdgsdggs",
        "time_of_admission": "1550151594",
        "permanent_address": "Vbh",
        "student_nationality": "Indian",
        "mother_mobile_no": "5465464545",
        "student_date_of_birth": "2019-02-07",
        "present_address": "606, Divine Greens, Near Nipania Village, Indore",
        "present_pincode": "452010",
        "emergency_contact": "4445645645",
        "any_previous_schools": {
            "table_array": null,
            "value": "No"
        },
        "present_state": "Madhya Pradesh",
        "child_lives_with": "Both Parents",
        "mother_aadhar": "757546546456",
        "father_samagra_ssmid": "545454545",
        "present_city": "Indore",
        "permanent_pincode": "454446",
        "student_caste": "GENERAL",
        "illness": {
            "is_applicable": false
        },
        "disability": {
            "is_applicable": false
        },
        "father_aadhar": "745454544545",
        "academic_session": "2019",
        "therapist": {
            "is_applicable": false
        },
        "father_email": "annantguptaneema@gmail.com",
        "student_religion": {
            "value": "Hindu"
        },
        "father_education_qualification": "sfsds",
        "mother_education_qualification": "sfsdsdgdsfgd",
        "admission_class": "JS2",
        "mother_samagra_ssmid": "645646456",
        "any_siblings": {
            "table_array": null,
            "value": "No"
        },
        "suspended": {
            "is_applicable": false
        },
        "student_gender": "Male",
        "admission_status": "completed",
        "repeated_grade": {
            "is_applicable": false
        },
        "student_samagra_ssmid": "687687682",
        "father_occupation": "dsfsdsdf",
        "student_aadhar": "876876897757",
        "mother_name": "asfasfasfsadfa",
        "father_mobile_no": "09806247089",
        "father_name_of_organization": "AITR",
        "student_image_url": "https://s3.ap-south-1.amazonaws.com/gyankriti2019/images/7757_2019_student_img.png",
        "permanent_state": "Madhya Pradesh",
        "student_first_name": "Aygjy",
        "student_last_name": "jygjyg",
        "the_parents_are": "Married",
        "father_image_url": "https://s3.ap-south-1.amazonaws.com/gyankriti2019/images/7757_2019_father_img.png",
        "mother_image_url": "https://s3.ap-south-1.amazonaws.com/gyankriti2019/images/7757_2019_mother_img.png",
        "adopted_child": "No",
        "permanent_city": "Other",
        "mother_occupation": "fhdfh",
        "mother_name_of_organization": "dfhdfgh"
    },
    {
        "father_name": "Ashwin Gupta",
        "mother_email": "Jagrati@gmail.com",
        "time_of_admission": "1550048034",
        "permanent_address": "Vallabh Bhavan",
        "student_nationality": "Indian",
        "mother_mobile_no": "8482233669",
        "student_date_of_birth": "1997-09-05",
        "present_address": "606, Divine Greens, Near Nipania Village, Indore",
        "present_pincode": "452010",
        "emergency_contact": "9874123655",
        "any_previous_schools": {
            "table_array": null,
            "value": "No"
        },
        "present_state": "Madhya Pradesh",
        "child_lives_with": "Both Parents",
        "mother_aadhar": "844384384388",
        "father_samagra_ssmid": "98468468",
        "present_city": "Indore",
        "permanent_pincode": "454446",
        "student_caste": "GENERAL",
        "illness": {
            "is_applicable": false
        },
        "disability": {
            "is_applicable": false
        },
        "father_aadhar": "985236666655",
        "academic_session": "2019",
        "therapist": {
            "is_applicable": false
        },
        "father_email": "Ashwin@gmail.com",
        "student_religion": {
            "value": "Hindu"
        },
        "father_education_qualification": "12th",
        "mother_education_qualification": "Graduate",
        "admission_class": "JS1",
        "mother_samagra_ssmid": "848468468468484",
        "any_siblings": {
            "table_array": null,
            "value": "No"
        },
        "suspended": {
            "is_applicable": false
        },
        "student_gender": "Male",
        "admission_status": "completed",
        "repeated_grade": {
            "is_applicable": false
        },
        "student_samagra_ssmid": "846848468",
        "father_occupation": "Businessmen",
        "student_aadhar": "452328885222",
        "mother_name": "Jagrati Gupta",
        "father_mobile_no": "9997844222",
        "father_name_of_organization": "Gopal Tyres",
        "student_image_url": "https://s3.ap-south-1.amazonaws.com/gyankriti2019/images/5222_1997_student_img.jpg",
        "permanent_state": "Madhya Pradesh",
        "student_first_name": "Annant",
        "student_last_name": "Gupta",
        "the_parents_are": "Married",
        "father_image_url": "https://s3.ap-south-1.amazonaws.com/gyankriti2019/images/5222_1997_father_img.png",
        "mother_image_url": "https://s3.ap-south-1.amazonaws.com/gyankriti2019/images/5222_1997_mother_img.jpg",
        "adopted_child": "No",
        "permanent_city": "Indore",
        "mother_occupation": "Home minister",
        "mother_name_of_organization": "Vallabh Bhavan"
    }
];


let options_array = {
    query: ['Students', 'Transport'],
    grade: ['JS1', 'JS2', 'PS1', 'PS2', 'PS3', 'PS4'],
    section: ['A', 'B', 'C', 'D'],
    route: ['1', '2', '3', '4', '5', 'Walk-in'],
    shift: ['A', 'B', 'C', 'D']
};


function initializeJquerySelectors() {

    console.log("initializing jquery selectors");

    dropdown_query = $("#dropdown_query ");
    dropdown_grade = $("#dropdown_grade ");
    dropdown_section = $("#dropdown_section ");
    dropdown_route = $("#dropdown_route ");
    dropdown_shift = $("#dropdown_shift ");
    button_search = $("#button_search ");


    console.log("initializing jquery selectors complete");
}


function initializeDropdown() {
    console.log("initializing dropdown and adding options");

    function append_options_to_dropdown(dropdown_selector, options) {
        options.forEach(function (option) {
            dropdown_selector.append(
                `<option value="${((option.toString()))}">${option}</option>`);
        });
    }

    append_options_to_dropdown(dropdown_query, options_array.query);
    append_options_to_dropdown(dropdown_grade, options_array.grade);
    append_options_to_dropdown(dropdown_section, options_array.section);
    append_options_to_dropdown(dropdown_route, options_array.route);
    append_options_to_dropdown(dropdown_shift, options_array.shift);


    // make sure this line always executes at the end
    $('select').selectpicker();


}

function getValuesSelectedFromDropdown(dropdown_selector) {
    let valueDropdownOptions = [];

    $(`#${dropdown_selector.attr('id')} option:selected`).each(function () {
        valueDropdownOptions.push($(this).val());
    });

    if (valueDropdownOptions.length) {
        isNoDropDownEmpty = true;
        return valueDropdownOptions;
    } else {
        console.log(dropdown_selector.attr('id') + " is not selected");
        isNoDropDownEmpty = false;
    }

}

function getSearchConfigJSON() {

    let query_val = getValuesSelectedFromDropdown(dropdown_query);

    let searchConfig = {
        query: query_val,
        route: getValuesSelectedFromDropdown(dropdown_route),
        shift: getValuesSelectedFromDropdown(dropdown_shift)
    };

    if (query_val[0] === options_array.query[0]) {
        searchConfig['grade'] = getValuesSelectedFromDropdown(dropdown_grade);
        searchConfig['section'] = getValuesSelectedFromDropdown(dropdown_section);
    }

    console.log(JSON.stringify(searchConfig));
    console.log('isNoDropDownEmpty : ', isNoDropDownEmpty);


    return searchConfig;
}


function executeSearchOnServer() {
    console.log("button clicked");

    const search_config = getSearchConfigJSON();

    if (isNoDropDownEmpty) {

        $.ajax({
            url: '/search',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({search_config: search_config}),
            success: function (response) {
                console.log(response.success);
                if (response.success) {
                    console.log("Information saved to the database.");
                } else {
                    alert("There was some error in saving the information.")
                }
            }
        });

    } else {
        console.log("Some dropdown are not selected");
    }
}


function disableInputField(selector, isDisabled) {
    console.log("some field isDisabled :", isDisabled);

    if (isDisabled) { // if true it will be disabled;
        selector.selectpicker('deselectAll');
        selector.prop("disabled", true);
    } else { // if false it will be enabled;
        selector.prop("disabled", false);
    }

    selector.selectpicker("refresh");
}

function initializeDatatable() {
    let selector_students_table_body = $('#students_table tbody');
    selector_students_table_body.on('click', 'tr', function () {
        $(this).toggleClass('selected');
    });

    $('#button').on('click', function () {
        alert(table.rows('.selected').data().length + ' row(s) selected');
    });


    addRowsToDataTable(tempJSON);
}

function addRowsToDataTable(arrayOfStudents) {
    console.log("\nexecuting datatable_functions();");
    let datatable_students = $('#students_table').DataTable({
        "scrollY": '50vh',
        "scrollX": true,
        "paging": true,
        "ordering": true,
        "responsive": true,
        "order": [[0, "asc"]]
    });

    if (arrayOfStudents !== null) {
        arrayOfStudents.forEach((student) => {
            console.log("adding rows to the datatable");
            datatable_students.row.add([
                student.student_aadhar,
                (student.student_first_name + " " + student.student_last_name),
                student.student_date_of_birth,
                student.academic_session,
                student.admission_class,
                student.admission_status
            ]).draw(true);

        });
    } else {
        console.log("no data received from server.");
    }
}

function documentReady() {
    initializeJquerySelectors();
    initializeDropdown();
    initializeDatatable();

    button_search.click(executeSearchOnServer);

    dropdown_query.change(() => {
        let option = (getValuesSelectedFromDropdown(dropdown_query))[0];

        if (option === 'Students') {
            disableInputField(dropdown_grade, false);
            disableInputField(dropdown_section, false);
        } else {
            disableInputField(dropdown_grade, true);
            disableInputField(dropdown_section, true);
        }

    });


    // append_options_to_dropdown(temp_selector, options_array.search_by);

}


$(documentReady);