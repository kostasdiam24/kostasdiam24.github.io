document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector(".form");
    var confirmationMessage = document.getElementById("confirmation-message");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        var formData = new FormData(form);
        fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.success) {
                // Show the confirmation message
                confirmationMessage.style.display = "block";
                // Optionally, reset the form
                form.reset();
            } else {
                // Handle the case where submission fails
                console.error(data.error);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});




document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector(".form");
    var confirmationMessage = document.getElementById("confirmation-message");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        var formData = new FormData(form);
        fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Log the response to see what it contains
            console.log("Response:", data);
            if (data.ok) {
                // Show the confirmation message
                confirmationMessage.style.display = "block";
                // Optionally, reset the form
                form.reset();
            } else {
                // Handle the case where submission fails
                console.error("Error:", data.error);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});











/*
document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector(".form");
    var confirmationMessage = document.getElementById("confirmation-message");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        var formData = new FormData(form);
        fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.success) {
                // Show the confirmation message
                confirmationMessage.style.display = "block";
                // Optionally, reset the form
                form.reset();
            } else {
                // Handle the case where submission fails
                console.error(data.error);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});




      document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector(".form");
    form.addEventListener("submit", function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();
        
        // Show a loading spinner or message
        // (Optional: Provide user feedback)
        
        // Submit the form asynchronously
        var formData = new FormData(form);
        fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response from Formspree
            console.log(data);
            // Optionally, show a success message or redirect the user
        })
        .catch(error => {
            // Handle any errors
            console.error('Error:', error);
            // Optionally, show an error message to the user
        });
    });
});

*/