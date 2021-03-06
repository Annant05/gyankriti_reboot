const options_config = {

    new_admission: {
        academic_session: [2019, 2018, 2016, 2015],
        admission_standard: ['JS1', 'JS2', 'PS1', 'PS2', 'PS3', 'PS4'],
        gender: ["Male", "Female", "Trans-gender"],

        nationality: ["Indian", "Other"],
        caste: ["SC", "ST", "OBC", "GENERAL"],
        religion: ["Buddhist", "Christian", "Jain", "Hindu", "Islam", "Sikh", "Other"],

        state: ["Madhya Pradesh", "Other"],
        city: ["Indore", "Other"],

        parents_are: ["Married", "Divorced", "Separated", "Widowed"],
        child_lives_with: ["Both Parents", "Father", "Mother", "Guardian"],
        adopted_child: ["No", "Yes"],
        previous_schools: ["No", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],

        any_siblings: ["No", 1, 2, 3, 4]

    },

    gyankriti_information: {
        standard: ['JS1', 'JS2', 'PS1', 'PS2', 'PS3', 'PS4'],
        section: ['A', 'B', 'C', 'D'],
        route: ['1', '2', '3', '4', '5', '6', 'Walk-in'],
        shift: ['A', 'B', 'C', 'D'],

        admission_fee: {
            'JS1': 5000,
            'JS2': 6000,
            'PS1': 7000,
            'PS2': 8000,
            'PS3': 9000,
            'PS4': 10000
        },

        bus_facility: ["No", "Yes"],
        bus_fee: {
            'JS1': 1000,
            'JS2': 2000,
            'PS1': 3000,
            'PS2': 4000,
            'PS3': 5000,
            'PS4': 6000
        },

        mess_facility: ["No", "Yes"],
        mess_fee: {
            'JS1': 500,
            'JS2': 600,
            'PS1': 700,
            'PS2': 800,
            'PS3': 900,
            'PS4': 1000
        }
    },

    search: {
        query: ['Students', 'Transport'],
        standard: ['All', 'JS1', 'JS2', 'PS1', 'PS2', 'PS3', 'PS4'],
        section: ['All', 'A', 'B', 'C', 'D'],
        route: ['All', '1', '2', '3', '4', '5', 'Walk-in'],
        shift: ['All', 'A', 'B', 'C', 'D']
    }

};

// options to create aws url for image;
const AWS_options = {

    S3_URL: `https://s3.ap-south-1.amazonaws.com/`,
    BUCKET_NAME: `gyankriti2019/`,
    S3_DIRECTORY_PREFIX: `images/`

};


function append_options_to_dropdown(dropdown_selector, options) {
    options.forEach(function (option) {
        dropdown_selector.append(
            `<option value="${((option.toString()))}">${option}</option>`);
    });
}

function getValFromDropdown(dropdown_selector) {
    let valueDropdownOption = dropdown_selector.children("option").filter(":selected").val();
    if (valueDropdownOption === 'choose') {
        console.log(dropdown_selector.attr('id') + " is not selected");
        return null;
    } else {
        console.log(dropdown_selector.attr('id') + " is :", valueDropdownOption);
        return valueDropdownOption.trim();
    }
}

function getValFromTextBox(text_selector) {
    return (text_selector.val()).trim();
}


