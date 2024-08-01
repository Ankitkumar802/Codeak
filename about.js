document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                const hash = this.hash;
                document.querySelector(hash).scrollIntoView({
                    behavior: 'smooth'
                });
                history.pushState(null, null, hash);
            }
        });
    });

    // Scrollspy functionality
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav .nav-link');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.6
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                document.querySelector('nav a.nav-link.active')?.classList.remove('active');
                document.querySelector(`nav a.nav-link[href="#${id}"]`).classList.add('active');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Function to trigger download
    function downloadFile(url, fileName) {
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;

        // For some browsers, especially on mobile devices, we may need to use `setTimeout` to trigger the download
        setTimeout(() => {
            link.click();
            link.remove();
        }, 100);
    }

    // Add event listener for download buttons
    document.querySelectorAll('.download-btn').forEach(button => {
        button.addEventListener('click', function() {
            const url = this.getAttribute('data-url');
            const fileName = this.getAttribute('data-file-name');
            downloadFile(url, fileName);
        });
    });
});



// for submit

