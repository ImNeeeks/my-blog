document.addEventListener("DOMContentLoaded", function() {
    const blogForm = document.getElementById("blog-form");
    if (!blogForm) {
        console.log("Form not found");
        return;
    }

    blogForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevents default form submission
        
        // Form input values
        const username = document.getElementById("username").value.trim();
        const title = document.getElementById("title").value.trim();
        const content = document.getElementById("content").value.trim();
	
        if (!username || !title || !content) {
            alert("Please fill out this field.");
            return;
        }

        const post = { username, title, content }; // Creates blog post from form input values
        const posts = JSON.parse(localStorage.getItem("posts")) || [];
        posts.push(post);
        localStorage.setItem("posts", JSON.stringify(posts));
        window.location.href = "blog.html"; // Redirect to blog.html
    });
});