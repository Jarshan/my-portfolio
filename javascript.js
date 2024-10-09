var typed = new Typed(".text", {
    strings: ["Software Engineer", "Full Stack Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})


function handleSubmit(event) {
    event.preventDefault(); // Prevent form from reloading the page

    // Get form data
    const name = document.querySelector('input[placeholder="Enter Your Name"]').value;
    const email = document.querySelector('input[placeholder="Enter Your Email"]').value;
    const subject = document.querySelector('input[placeholder="Enter Your Subject"]').value || 'No Subject';
    const message = document.querySelector('textarea[placeholder="Enter Your Message"]').value;

    // Create the mailto link
    const mailtoLink = `mailto:jarshanjauffar@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`
    )}`;

    // Open the mail client
    window.location.href = mailtoLink;
}