console.log("report.js loaded");

// ========================================
// GET FORMS
// ========================================

const lostForm = document.getElementById("lostItemForm");
const foundForm = document.getElementById("foundItemForm");

console.log("Lost Form:", lostForm);
console.log("Found Form:", foundForm);

// ========================================
// HANDLE FORM SUBMISSION
// ========================================

function handleFormSubmit(form, type) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        console.log("Form Submitted");

        const newItem = {

            type: type,

            itemName: document.getElementById("itemName").value.trim(),

            category: document.getElementById("category").value,

            description: document.getElementById("description").value.trim(),

            location: document.getElementById("location").value.trim(),

            date: document.getElementById("date").value,

            image: "",

            name: document.getElementById("name").value.trim(),

            email: document.getElementById("email").value.trim(),

            phone: document.getElementById("phone").value.trim()

        };

        const imageInput = document.getElementById("image");

        if (imageInput && imageInput.files.length > 0) {

            const reader = new FileReader();

            reader.onload = function () {

                newItem.image = reader.result;

                saveNewItem(newItem);

            };

            reader.readAsDataURL(imageInput.files[0]);

        } else {

            saveNewItem(newItem);

        }

    });

}

// ========================================
// SAVE ITEM TO BACKEND
// ========================================

function saveNewItem(newItem) {

    console.log("Inside saveNewItem()");
    console.log(newItem);
fetch("https://lost-and-found-items-ygfn.onrender.com/api/items", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(newItem)

    })

    .then(function(response) {

        console.log("Status:", response.status);

        return response.json();

    })

    .then(function(data) {

        console.log("Server Response:", data);

        if (data.success) {

            alert("Item submitted successfully!");

            window.location.href = "items.html";

        } else {

            alert(data.message);

        }

    })

    .catch(function(error) {

        console.error("Fetch Error:", error);

        alert("Cannot connect to backend server.");

    });

}

// ========================================
// ACTIVATE FORMS
// ========================================

if (lostForm) {

    handleFormSubmit(lostForm, "lost");

}

if (foundForm) {

    handleFormSubmit(foundForm, "found");

}