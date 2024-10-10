document.addEventListener("DOMContentLoaded", function () {
    let navLinks = document.querySelectorAll('.navbar a');

    window.addEventListener('scroll', function () {
       

        let scrollPosition = window.scrollY;

        navLinks.forEach(link => {
            let section = document.querySelector(link.getAttribute('href'));

            if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                current = link.getAttribute('href').substring(1);
            }
        });

        
    });
});
