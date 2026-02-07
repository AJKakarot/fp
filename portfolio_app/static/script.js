//  AOS.init({
//             duration: 800,
//             easing: 'ease-in-out',
//             once: true
//         });

//         document.querySelector('.menu-toggle').addEventListener('click', function() {
//             document.querySelector('.nav ul').classList.toggle('active');
//         });

//         document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//             anchor.addEventListener('click', function(e) {
//                 e.preventDefault();
//                 document.querySelector(this.getAttribute('href')).scrollIntoView({
//                     behavior: 'smooth'
//                 });
                
//                 document.querySelector('.nav ul').classList.remove('active');
//             });
//         });
        
//         const skillBars = document.querySelectorAll('.skill-progress');
        
//         function animateSkillBars() {
//             skillBars.forEach(bar => {
//                 const width = bar.style.width;
//                 bar.style.width = '0';
//                 setTimeout(() => {
//                     bar.style.width = width;
//                 }, 100);
//             });
//         }

//         const skillsSection = document.querySelector('.skills');
//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     animateSkillBars();
//                     observer.unobserve(entry.target);
//                 }
//             });
//         }, { threshold: 0.2 });
//         observer.observe(skillsSection);


 AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
        window.addEventListener('load', function() {
            const spinner = document.querySelector('.loading-spinner');
            spinner.style.opacity = '0';
            setTimeout(() => {
                spinner.style.display = 'none';
            }, 500);
        });

        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = themeToggle.querySelector('i');
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        const currentTheme = localStorage.getItem('theme') || 
                            (prefersDarkScheme.matches ? 'dark' : 'light');
        
        if (currentTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
        
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            
            if (currentTheme === 'dark') {
                document.documentElement.removeAttribute('data-theme');
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
                localStorage.setItem('theme', 'light');
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
                localStorage.setItem('theme', 'dark');
            }
        });

        // Mobile Menu Toggle
        const menuToggle = document.getElementById('menuToggle');
        const navMenu = document.getElementById('navMenu');
        
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.innerHTML = navMenu.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('#navMenu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });

        window.addEventListener('scroll', () => {
            const scrollProgress = document.getElementById('scrollProgress');
            const scrollTop = document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollPercent = (scrollTop / scrollHeight) * 100;
            scrollProgress.style.width = scrollPercent + '%';
        });
        const backToTop = document.getElementById('backToTop');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });
        
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Custom Cursor
        const cursor = document.getElementById('cursor');
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
        
        document.addEventListener('mousedown', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
        });
        
        document.addEventListener('mouseup', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        });
        
        document.addEventListener('mouseenter', () => {
            cursor.style.opacity = '1';
        });
        
        document.addEventListener('mouseleave', () => {
            cursor.style.opacity = '0';
        });
        const filterBtns = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const filterValue = btn.getAttribute('data-filter');
                projectCards.forEach(card => {
                    if (filterValue === 'all' || card.classList.contains(filterValue)) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 100);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
        window.addEventListener('scroll', () => {
            const header = document.querySelector('.header');
            if (window.scrollY > 50) {
                header.classList.add('glass');
            } else {
                header.classList.remove('glass');
            }
        });
        var typed = new Typed('#element', {
            strings: [
                '<i>Full-stack developer skilled in responsive design, JavaScript, Django and clean code. Focused on performance, security, and seamless UX. Strong problem-solver who collaborates efficiently and keeps learning.</i>',
                '<i>Web developer building fast, secure, and mobile-friendly sites. Passionate about clean architecture, user experience, and teamwork. Committed to delivering high-quality projects on time, every time</i>',
                '<i>Web developer blending code and creativity to build dynamic, user-centric experiences. Proficient in modern frameworks, performance tuning, and intuitive design. Thrives on turning complex challenges into elegant solutions.</i>',
                '<i>Adaptive developer passionate about cutting-edge tech (AI, PWAs, Web3). Crafts scalable, accessible websites with clean code. Lifelong learner focused on innovation and impactful digital experiences.</i>'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
            backDelay: 2000,
            showCursor: false
        });
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('contactForm');
            if (form) {
                const inputs = form.querySelectorAll('input, textarea, select');
                inputs.forEach(input => {
                    if (!input.classList.contains('btn')) {
                        input.classList.add('form-control');
                    }
                });
                form.addEventListener('submit', function(e) {
                    const name = form.querySelector('input[name="name"]');
                    const email = form.querySelector('input[name="email"]');
                    const message = form.querySelector('textarea[name="message"]');
                    
                    let isValid = true;
                    document.querySelectorAll('.errorlist').forEach(el => el.style.display = 'none');
                    
                    if (!name.value.trim()) {
                        showError(name, 'Please enter your name');
                        isValid = false;
                    }
                    
                    if (!email.value.trim() || !isValidEmail(email.value)) {
                        showError(email, 'Please enter a valid email address');
                        isValid = false;
                    }
                    
                    if (!message.value.trim()) {
                        showError(message, 'Please enter your message');
                        isValid = false;
                    }
                    
                    if (!isValid) {
                        e.preventDefault();
                    } else {
                        // Show success message (in real scenario, this would be after server response)
                        setTimeout(() => {
                            const successMessage = document.getElementById('successMessage');
                            successMessage.style.display = 'block';
                            form.reset();
                            
                            // Hide success message after 5 seconds
                            setTimeout(() => {
                                successMessage.style.display = 'none';
                            }, 5000);
                        }, 1000);
                    }
                });
                
                // Helper function to validate email
                function isValidEmail(email) {
                    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    return re.test(email);
                }
                
    
                function showError(input, message) {
                    let errorDiv = input.parentElement.querySelector('.errorlist');
                    if (!errorDiv) {
                        errorDiv = document.createElement('div');
                        errorDiv.className = 'errorlist';
                        input.parentElement.appendChild(errorDiv);
                    }
                    errorDiv.textContent = message;
                    errorDiv.style.display = 'block';
                    
                    // Highlight the input
                    input.style.borderColor = '#f44336';
                    input.style.boxShadow = '0 0 0 3px rgba(244, 67, 54, 0.1)';
                    input.addEventListener('input', function() {
                        input.style.borderColor = '';
                        input.style.boxShadow = '';
                        errorDiv.style.display = 'none';
                    });
                }
            }
        });