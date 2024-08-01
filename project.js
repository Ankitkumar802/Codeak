// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Change navbar background color and apply shadow on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Add smooth scroll effect to the navbar on mobile
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
            bsCollapse.hide();
        }
    });
});












// Define project data
const projects = [
    {
        title: 'Jarvis',
        description: 'Advanced AI-like application for automating tasks using voice commands.',
        imgSrc: 'https://th.bing.com/th?id=OIP.qCEToCInizTQLA0bxa9gxAHaNK&w=187&h=333&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
        downloadLink: 'jarvis.zip',
        details: 'Jarvis is a sophisticated AI-like application that allows users to perform various tasks such as opening Notepad, sending emails, searching Wikipedia, and more through voice commands.'
    },
    
    {
        title: 'Library Management',
        description: 'A sophisticated library management system with advanced features.',
        imgSrc: 'https://th.bing.com/th?id=OIP.qCEToCInizTQLA0bxa9gxAHaNK&w=187&h=333&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
        downloadLink: 'library-management.zip',
        details: 'This project provides a robust system for managing a library, including features for book checkouts, returns, and inventory management. Users can upload books in various formats and track their status efficiently.'
    },
    
    {
        title: 'Project 3',
        description: 'Description for Project 3.',
        imgSrc: 'https://th.bing.com/th?id=OIP.qCEToCInizTQLA0bxa9gxAHaNK&w=187&h=333&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
        downloadLink: 'project3.zip',
        details: 'Detailed information about Project 3 goes here. It includes more insights and specifics about the project functionality and objectives.'
    },
    
    {
        title: 'Project 4',
        description: 'Description for Project 4.',
        imgSrc: 'https://th.bing.com/th?id=OIP.qCEToCInizTQLA0bxa9gxAHaNK&w=187&h=333&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
        downloadLink: 'project4.zip',
        details: 'Detailed information about Project 4 goes here. It includes more insights and specifics about the project functionality and objectives.'
    },
    
    // Add more projects here
];



// Function to generate project cards
function generateProjectCards() {
    const container = document.getElementById('projects-container');
    container.innerHTML = '';

    projects.forEach((project, index) => {
        const cardHTML = `
            <div class="col-md-4 mb-4">
                <div class="card project-card">
                    <img src="${project.imgSrc}" class="card-img-top" alt="${project.title} Thumbnail">
                    <div class="card-body">
                        <h5 class="card-title">${project.title}</h5>
                        <p class="card-text">${project.description}</p>
                        <a href="${project.downloadLink}" class="btn btn-primary" download>Download Project</a>
                        <button class="btn btn-secondary mt-2" data-bs-toggle="modal" data-bs-target="#projectDetailsModal" onclick="showProjectDetails(${index})">View Details</button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

// Function to show project details in the modal
function showProjectDetails(index) {
    const project = projects[index];
    document.getElementById('projectDetailsModalLabel').innerText = project.title;
    document.getElementById('project-description').innerText = project.details;
}

// Initial call to generate project cards
generateProjectCards();
