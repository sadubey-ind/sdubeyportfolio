document.addEventListener("DOMContentLoaded", function() {
    fetchGitHubRepos();

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Form submitted!');
        // Add form submission logic here
    });
});

function fetchGitHubRepos() {
    const repoList = document.getElementById('project-list');
    const repos = [
        { name: "Project 1", url: "https://github.com/sauravdube/project1" },
        { name: "Project 2", url: "https://github.com/sauravdube/project2" }
    ];
    repos.forEach(repo => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = repo.url;
        link.target = "_blank";
        link.textContent = repo.name;
        listItem.appendChild(link);
        repoList.appendChild(listItem);
    });
}
