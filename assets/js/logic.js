const darkModeToggle = document.querySelector("#dark-mode-toggle");
const displayImg = document.querySelector(".display-img");
const backButton = document.getElementById("back");

const enableDarkMode = () => {
    document.body.classList.add("darkMode");
    localStorage.setItem("darkMode", "enabled");
    
}

const disableDarkMode = () => {
    document.body.classList.remove("darkMode");
    localStorage.removeItem("darkMode");
    
}

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

const currentPage = window.location.pathname.split("/").pop();
if (currentPage === "blog.html") {
    backButton.style.display = "block";
}

if (backButton) {
backButton.addEventListener("click", () => {
    window.location.href = "index.html";
})
}