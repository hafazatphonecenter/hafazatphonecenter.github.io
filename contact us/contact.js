
// part1

function toggleMenu() {
    const links = document.querySelector('.links');
    links.classList.toggle('active');
}

// part2

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Your form has been submitted successfully!");
});



