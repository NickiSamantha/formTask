document.querySelector('.idForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let idNumber = document.querySelector('.idNumber').value;
    let resultDiv = document.querySelector('.result');

    function isValidIdNumber(id) {
        return /^\d{13}$/.test(id);
    }

    if (idNumber.length === 13 && isValidIdNumber(idNumber)) {
        let year = idNumber.substring(0, 2);
        let month = idNumber.substring(2, 4);
        let day = idNumber.substring(4, 6);
        let genderCode = idNumber.substring(6, 7);
        let gender = parseInt(genderCode) < 5 ? 'Female' : 'Male';
        if (parseInt(year) < 20) {
            year = '20' + year;
        } else {
            year = '19' + year;
        }
        let result = "Date of Birth: " + day + "/" + month + "/" + year + "<br>Gender: " + gender;

        resultDiv.innerHTML = result;
    } else {
        resultDiv.innerHTML = "Invalid ID number. Please enter a valid 13-digit number.";
    }
});
