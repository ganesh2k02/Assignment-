function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var mobile = document.forms["contactForm"]["mobile"].value;
    var country = document.forms["contactForm"]["country"].value;
    var gender = document.querySelector('input[name="gender"]:checked');
    
    var nameErr = document.getElementById("nameErr");
    var emailErr = document.getElementById("emailErr");
    var mobileErr = document.getElementById("mobileErr");
    var countryErr = document.getElementById("countryErr");
    var genderErr = document.getElementById("genderErr");
    
    var valid = true;
    
    // Name validation
    if (!/^[a-zA-Z\s]+$/.test(name)) {
        nameErr.innerHTML = "Please enter only alphabets for full name.";
        valid = false;
    } else {
        nameErr.innerHTML = "";
    }
    
    // Email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
        emailErr.innerHTML = "Please enter a valid email address.";
        valid = false;
    } else {
        emailErr.innerHTML = "";
    }
    
    // Mobile validation
    if (!/^\d{10}$/.test(mobile)) {
        mobileErr.innerHTML = "Please enter a 10-digit mobile number.";
        valid = false;
    } else {
        mobileErr.innerHTML = "";
    }
    
    // Country validation
    if (country == "Select") {
        countryErr.innerHTML = "Please select a country.";
        valid = false;
    } else {
        countryErr.innerHTML = "";
    }
    
    // Gender validation
    if (!gender) {
        genderErr.innerHTML = "Please select your gender.";
        valid = false;
    } else {
        genderErr.innerHTML = "";
    }
    
    return valid;
}
