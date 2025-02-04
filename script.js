document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });

    const typingElement = document.querySelector('.typing');
    const texts = ["Graphic Designer", "Web Developer"];
    let index = 0;
    let charIndex = 0;
    let currentText = '';
    let isDeleting = false;

    function type() {
        if (isDeleting) {
            currentText = texts[index].substring(0, charIndex--);
        } else {
            currentText = texts[index].substring(0, charIndex++);
        }

        typingElement.textContent = currentText;

        if (!isDeleting && charIndex === texts[index].length) {
            setTimeout(() => isDeleting = true, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % texts.length;
        }

        setTimeout(type, isDeleting ? 100 : 200);
    }

    type();
});