// Add event listener to the contactForm when it's submitted
document.getElementById("contactForm").addEventListener("submit", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Create a FormData object from the form
    var formData = new FormData(event.target);

    // Create an empty object to store form data
    var formDataObject = {};

    // Iterate through the FormData and convert it into an object
    formData.forEach(function (value, key) {
        formDataObject[key] = value;
    });

    // Send a POST request to a Google Apps Script endpoint with the form data
    fetch("https://script.google.com/macros/s/AKfycbwWXFnHeszPGuKqIaaOQhz90LOCdNJET1ReK8_PqBfofU4LGfJxwY9vFOT1sIVoPfoMqA/exec", {
        method: "POST",
        body: JSON.stringify(formDataObject)
    })
    .then(function (response) {
        if (response.ok) {
            // If the response is OK (status 200), show a success alert and reset the form
            alert("Data submitted successfully!");
            document.getElementById("contactForm").reset();
        } else {
            // If there was an error in the response, show an error alert
            alert("Error submitting data.");
        }
    });
});
