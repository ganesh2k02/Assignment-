function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function validateForm() {
    var name = document.contactForm.name.value.trim();
    var email = document.contactForm.email.value.trim();
    var mobile = document.contactForm.mobile.value.trim();
    var country = document.contactForm.country.value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var hobbies = document.querySelectorAll('input[name="hobbies[]"]:checked');

    // Reset error messages
    document.querySelectorAll('.error').forEach(function(element) {
        element.innerHTML = "";
    });

    var nameErr = emailErr = mobileErr = countryErr = genderErr = false;

    // Validate name
    if (name === "") {
        printError("nameErr", "Please enter your name");
        nameErr = true;
    }

    // Validate email
    if (email === "") {
        printError("emailErr", "Please enter your email");
        emailErr = true;
    }

    // Validate mobile number
    if (mobile === "") {
        printError("mobileErr", "Please enter your mobile number");
        mobileErr = true;
    }

    // Validate country
    if (country === "Select") {
        printError("countryErr", "Please select your country");
        countryErr = true;
    }

    // Validate gender
    if (!gender) {
        printError("genderErr", "Please select your gender");
        genderErr = true;
    }

    // Validate hobbies
    if (hobbies.length === 0) {
        printError("hobbiesErr", "Please select at least one hobby");
    }

    // If there are any errors, return false to prevent form submission
    if (nameErr || emailErr || mobileErr || countryErr || genderErr || hobbies.length === 0) {
        return false;
    }

    // If all fields are valid, display the entered details in an alert
    var preview = "You have entered the following details:\n" +
        "Full Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Mobile Number: " + mobile + "\n" +
        "Country: " + country + "\n" +
        "Gender: " + gender.value + "\n" +
        "Hobbies: ";
    for (var i = 0; i < hobbies.length; i++) {
        preview += hobbies[i].value + ", ";
    }
    preview = preview.slice(0, -2); // Remove the trailing comma and space

    alert(preview);
    return true;
}
