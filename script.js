/*
================================================================
script.js — Portfolio JavaScript
================================================================
You do NOT need to change anything in this file.
It works automatically.

WHAT IT DOES:
1. Mobile hamburger menu
2. Navbar shadow on scroll
3. Scroll reveal animations
4. Skill bar fill animations
5. Active nav link highlight
================================================================
*/


// 1. MOBILE MENU
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});


// 2. NAVBAR SCROLL EFFECT
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
});


// 3. SCROLL REVEAL
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, i * 80);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


// 4. SKILL BAR ANIMATION
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.skill-fill').forEach(bar => {
                setTimeout(() => {
                    bar.style.width = bar.getAttribute('data-width') + '%';
                }, 200);
            });
        }
    });
}, { threshold: 0.2 });

const skillsSection = document.getElementById('skills');
if (skillsSection) skillObserver.observe(skillsSection);


// 5. ACTIVE NAV HIGHLIGHT
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    sections.forEach(section => {
        const top    = section.offsetTop - 120;
        const height = section.offsetHeight;
        const id     = section.getAttribute('id');
        const link   = document.querySelector(`.nav-links a[href="#${id}"]`);

        if (link) {
            if (scrollY >= top && scrollY < top + height) {
                document.querySelectorAll('.nav-links a').forEach(l => l.style.color = '');
                link.style.color = 'var(--blue)';
            }
        }
    });
});
