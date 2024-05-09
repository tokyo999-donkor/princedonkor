// JavaScript for website interactivity

// Function to display a pop-up alert when a navigation link is clicked
function showAlert() {
    alert("You clicked a navigation link!");
}

// Get all navigation links
var navLinks = document.querySelectorAll("nav a");

// Add a click event listener to each navigation link
navLinks.forEach(function(link) {
    link.addEventListener("click", showAlert);
});
