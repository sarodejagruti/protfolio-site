 document.addEventListener('DOMContentLoaded', function () {
            // Mobile menu toggle
            const menuToggle = document.querySelector('.menu-toggle');
            const navLinks = document.querySelector('.nav-links');

            menuToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });

            // Smooth scrolling and active link highlighting
            const sections = document.querySelectorAll('section');
            const navLinksAll = document.querySelectorAll('.nav-links a');

            window.addEventListener('scroll', () => {
                let current = '';
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    if (pageYOffset >= sectionTop - sectionHeight / 3) {
                        current = section.getAttribute('id');
                    }
                });

                navLinksAll.forEach(link => {
                    link.classList.remove('active');
                    if (link.href.includes(current)) {
                        link.classList.add('active');
                    }
                });
            });

            // Set current year in footer
            const yearSpan = document.querySelector('footer p');
            const currentYear = new Date().getFullYear();
            yearSpan.innerHTML = `&copy; ${currentYear} Jagruti. All Rights Reserved.`;
        });