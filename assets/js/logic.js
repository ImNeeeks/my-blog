const darkModeToggle = document.querySelector("#dark-mode-toggle");
const displayImg = document.querySelector(".display-img");
const backButton = document.getElementById("back");

// Function that enables dark mode
const enableDarkMode = () => {
    document.body.classList.add("darkMode");
    localStorage.setItem("darkMode", "enabled");
    
}

// Function that disables dark mode
const disableDarkMode = () => {
    document.body.classList.remove("darkMode");
    localStorage.removeItem("darkMode");
    
}

// Event listener for dark mode toggle
darkModeToggle.addEventListener("click", () => {
    const darkModeEnabled = localStorage.getItem("darkMode") === "enabled";
    if (!darkModeEnabled) {
        enableDarkMode();
        darkModeToggle.classList.add("bxs-star");
    } else {
        disableDarkMode();
        darkModeToggle.classList.remove("bxs-star");
    }
});

// If blog.html is the current page, show back button
const currentPage = window.location.pathname.split("/").pop();
if (currentPage === "blog.html") {
    backButton.style.display = "block";
}

// Event listener for back button
if (backButton) {
backButton.addEventListener("click", () => {
    window.location.href = "index.html";
})
}