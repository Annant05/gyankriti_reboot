function submitForm() {
    var name = document.getElementsByName('name');
    var age = document.getElementsByName('age');
    var email = document.getElementsByName('email');
    var address = document.getElementsByName('address');
    var phone = document.getElementsByName('phone');

    if (name.match(/^[a-zA-Z]+$/)) {
        document.getElementsByName('name').innerHTML = name;
    } else {
        document.getElementsByName('name').innerHTML = "Invalid";
    }

    if (age.match(/^[0-9]+$/) && age <= 65 && age >= 25) {
        document.getElementsByName('age').innerHTML = age;
    } else {
        document.getElementsByName('age').innerHTML = "Invalid";
    }


    if (email.match(/^[a-zA-Z]+$/)) {
        document.getElementsByName('email').innerHTML = name;
    } else {
        document.getElementsByName('email').innerHTML = "Invalid";
    }

    if (address.match(/^[a-zA-Z]+$/)) {
        document.getElementsByName('address').innerHTML = name;
    } else {
        document.getElementsByName('address').innerHTML = "Invalid";
    }

    if (phone.match(/^[0-9]+$/) && phone.length === 10) {
        document.getElementsByName('name').innerHTML = name;
    } else {
        document.getElementsByName('name').innerHTML = "Invalid";
    }


}

