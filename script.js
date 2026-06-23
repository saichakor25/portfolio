const text = "Web Developer | Python Developer | AIML Enthusiast";

let i = 0;

function typeWriter() {

    const typingElement = document.getElementById("typing");

    if (!typingElement) return;

    if (i < text.length) {

        typingElement.innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter, 80);
    }
}

window.onload = () => {

    typeWriter();

    ScrollReveal().reveal(
        '.hero, .about, .skills, .projects, .education, .internship, .certificates, .contact',
        {
            distance: '50px',
            duration: 1000,
            origin: 'bottom',
            interval: 200
        }
    );

};