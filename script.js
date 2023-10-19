// Get references to the form elements
const textForm = document.getElementById("textForm");
const textInput = document.getElementById("textInput");
const saveButton = document.getElementById("saveButton");

// for testing:
var currentDate = new Date();
//var yesterday = new Date(currentDate);
//yesterday.setDate(currentDate.getDate() - 1);

let entries = [];

// Check if the array already exists in local storage
if (localStorage.getItem("entries")) {
    // If it exists, load the array from local storage
    entries = JSON.parse(localStorage.getItem("entries"));
}

// Add an event listener to the Save button
saveButton.addEventListener("click", function () {
    // Get the text input value
    const inputText = textInput.value;

    // Check if the input is not empty
    if (inputText.trim() !== "") {
        // Store the text in local storage with a specific key
        //        localStorage.setItem("userText", inputText);

        // Add a new entry to the array
        //   const newEntry = "New entry text"; // Replace with your new entry
        newEntry = {
            "name": inputText,
            "timestamp": currentDate,  // Use a valid timestamp in ISO 8601 format
        }

        entries.push(newEntry);

        // Save the updated array to local storage
        localStorage.setItem("entries", JSON.stringify(entries));
        // Optionally, provide user feedback
        //  alert("Text saved to local storage!");

        // Clear the input field
        textInput.value = "";
    }
});

// Check if the text is already stored in local storage
if (localStorage.getItem("entries")) {
    // Retrieve the stored text
    var myList = document.getElementById("listpresents");


    const storedText = localStorage.getItem("entries");

    // Display the text on the page
    //   alert("Stored text: " + storedText);
}



document.addEventListener("DOMContentLoaded", function () {
    var myList = document.getElementById("listpresents");

    // Get the current date
    var currentDate = new Date();

    // Calculate the timestamp for yesterday
    var yesterday = new Date(currentDate);
    yesterday.setDate(currentDate.getDate() - 1);

    // Loop through the JSON data and create list items for entries from yesterday
    entries.forEach(function (item) {
        var entryTimestamp = new Date(item.timestamp);

        // Check if the entry's timestamp is from yesterday
        if (entryTimestamp.getDate() === yesterday.getDate()) {
            var li = document.createElement("li");
            li.textContent = item.name //+ ': ' + item.timestamp;
            myList.appendChild(li);
        }

        // Loop through the JSON data and create list items
        //    entries.forEach(function (item) {
        //      var li = document.createElement("li");
        //    li.textContent = item.name + ': ' + item.timestamp;
        //  myList.appendChild(li);
    });
});

