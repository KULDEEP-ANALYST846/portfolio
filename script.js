// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Get all navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    // Add click event to each navigation link
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor behavior
            
            // Get the target section ID
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // If section exists, scroll to it
            if (targetSection) {
                const navbarHeight = 80; // Height of fixed navbar
                const targetPosition = targetSection.offsetTop - navbarHeight;
                
                // Smooth scroll to section
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
            
            // Close mobile menu if open
            const hamburger = document.querySelector('.hamburger');
            const navMenu = document.querySelector('.nav-menu');
            if (hamburger && navMenu) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            if (navMenu) {
                navMenu.classList.toggle('active');
            }
        });
    }
    
    // Navbar background change on scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
    
    // Contact form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message!');
            this.reset();
        });
    }
});

// Project data with detailed information and your predefined images
const projectDetails = {
    project1: {
        title: "Loan Defalut Analysis",
        description: "In this project, I designed an interactive Power BI dashboard to analyze loan default patterns and identify high-risk borrower groups. The reports explored key factors such as credit score, age, education, income, loan purpose, and debt-to-income (DTI) ratio to uncover insights into borrower behavior.Through data modeling, DAX calculations, and advanced visualizations, I highlighted trends in loan disbursement, default rates, and demographic impacts. The dashboard allows financial institutions to drill down into borrower profiles and assess the risk levels associated with different customer segments.",
        learnings: [
            "Data Visulization",
            "Data modeling", 
            "DAX",
            "Financial Analysis",
            // "Report Design",
            // "Sales Metrics",
            // "Dashboard Creation"
        ],
        skills: [ "PowerBI", "Data Analysis", "Business Intelligence"],
        objective:`
            <p>The goal of this project was to support data-driven lending decisions by providing a clear view of loan performance and default risks. By analyzing borrower demographics and financial metrics, the dashboard offers actionable insights such as:</p>
            
            <ul>
                <li>Identifying high default risk categories (e.g., large loans, poor credit scores, teens/young borrowers)</li>
                <li>Highlighting stable customer groups (e.g., senior citizens, borrowers with good credit)</li>
                <li>Enabling financial institutions to improve loan policies, reduce default rates, and enhance risk management strategies</li>
            </ul>
            
            <p>This project demonstrates how business intelligence tools like Power BI can transform raw financial data into valuable insights that guide credit risk management and strategic decision-making.</p>
        `,       
        images: [
            {
                src: "./images/LOAN OVERVIEW.png", // Add your actual image paths
                caption: "Loan Overview"
            },
            {
                src: "./images/DEFAULT OVERVIEW.png",
                caption: "Default Overview"
            },
            {
                src: "./images/FINANCIAL RISK MATRICS.png", 
                caption: "Customer Performance Metrics"
            },
            {
                src: "./images/APLLICANT DEMOGRAPHICS & FINANCIAL PROFILE.png", 
                caption: "APLLICANT DEMOGRAPHICS & FINANCIAL PROFILE"
            },
            {
                src: "./images/INSIGHTS.png", 
                caption: "INSIGHTS"
            }
        ],
        video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/Rpyp_Im8AFo?si=XKeN0dWLpqRv5EZm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` // Add your actual video ID
    },
    project2: {
        title: "Hotel Analysis - Python",
        description: `
                        <p>In this project, I analyzed the Occupancy rate, revenue, ratings, and bookings across different categories, segments and time periods.</p>
                        
                        <p><b>The steps I performed:</b></p>
                        <ul>
                            <li>Analyzed the datasets</li>
                            <li>Data Cleaning
                            <ul>
                                <li>Removing Outliers</li>
                                <li>Checking Null Values</li>
                            </ul>
                            </li>
                            <li>Data Transformation
                            <ul>
                                <li>Created Occupancy Rate Column</li>
                                <li>Change Data Types</li>
                                <li>Merge Datasets</li>
                            </ul>
                            </li>
                            <li>Insight Generation</li>
                        </ul><br>

                        <p><b>What I Analyzed:</b></p>
                        <ul>
                            <li>Occupancy Rate was higher for the 'Presidential' Hotels</li>
                            <li>Delhi has the Highest average Occupancy rate</li>
                            <li>Mumbai has the highest Revenue, followed by Bangalore, Hyderabad, and Delhi</li>
                            <li>Revenue is declining Month on Month</li>
                            <li>A large part of the Revenue was coming from Luxury hotels</li>
                            <li>The majority of revenue (40.9%) comes from 'others', followed by MakeMyTrip (19.8%), while other platforms contribute smaller shares</li>
                        </ul>
                        `,
        learnings: [
            "EDA",
            "Data Cleaning", 
            "Data Transformation",
            "Data Visualization using Pandas",
            
        ],
        skills: ["Python", "Pandas", "NumPy"],
        objective: `<p>Objective of this project is to Gain the Knowledge about the Hotel Industry and how to Analyse it.</p>
                    <p>In the future, I plan to work on more hotel industry-related projects to gain a deeper understanding of the industry and enhance my knowledge.</p>`,
        images: [
            {
                src: "./images/hotel.png",
                caption: "Hotel Analysis."
            }
            // {
            //     src: "project-images/atliq-dashboard-2.jpg", 
            //     caption: "Sales Performance Analysis"
            // }
        ],
        video: `
                <iframe width="560" height="315"
                        src="https://www.youtube.com/embed/QAwDlv9LeJw?si=0X0sqh2dSXKEA23Y"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                                gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>`
    },
    project3: {
        title: "Website Traffic and User Engagement Analysis", 
        description:`This project analyzes website user behavior and engagement across different days, hours, and traffic channels.
                    <h4>Problem Statement</h3>
                    <ul>
                        <li>How do hour, day, and user channel affect website engagement and session quality?
                        <li>Can we identify high-impact periods and channels for optimized marketing?
                    </ul>
                    <h4>Key Insights</h3>
                    <ul>
                        <li>Organic Social Channel drives the Highest Traffic
                        <li>Most of the Traffic arives at late evenings(8-12)
                        <li>Refferl Channel has the Highest Engagement Rate and Engagement Sessions.
                        <li>Engagement time and rates peak on weekdays
                        <li>Direct channel users have stronger conversion to engaged sessions
                    </ul>`,
        learnings: [
            "Website Ananlytics",
            "Pandas for Data Cleaning",
            "Matplotliv & Seaborn for Data Visualization",
            
        ],
        skills: ["Python", "Data Visualization", "Numpy","Pandas","Seaborn","Matplotlib"],
        objective: `To uncover patterns in website traffic and user engagement across different time frames and marketing channels, aiming to provide relevant and actionable insights that enhance user experience and inform data-driven marketing strategies.`,
        images: [
            {
                src: "./images/1.jpg",
                caption: "Page 1"
            },
            {
                src: "./images/2.jpg",
                caption: "Page 2"
            },
            {
                src: "./images/3.jpg",
                caption: "Page 3"
            },
            {
                src: "./images/4.jpg",
                caption: "Page 4"
            },
            {
                src: "./images/5.jpg",
                caption: "Page 5"
            }
        ],
        video:` <iframe width="560" height="315" src="https://www.youtube.com/embed/7FTI5ZxycW0?si=kbzkflSKUPPxo0S_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    },
    project4: {
        title: "ED-tech Platform Analysis",
        description: `<p>Everyone assumes that the most common courses are the most popular. But data tells the different story.</p>
                    <p>I build a Power bi Dashboard to go beyond the surface-level numbers and uncover the real drivers of success in Ed-tech world.</p>
                    <p></p>
                    <h4>Here's what Data tells:</h4>
                    <ul>
                        <li>📈 The Mismatch: Business courses are the most common but most of the viewers are from Data Analysis and Software development. This shows huge demand of Tech skills.
                        <li>⏳ The Duration Myth: Duration of the course doesn't affect the Rating of the Course. Rating depends upon the Quality of the Content.
                        <li>⭐ The Superstar Effect: Handful of courses and top-rated instructors are responsible for huge chunk of viewership.

                    </ul>`,
                    
                    
        learnings: [
            "Data Analysis",
            "DAX",
            "Data Visualization"
            
        ],
        skills: [ "PowerBI", "Data Visualization" ,"DAX","Data Cleaning"],
        objective: "To evaluate course performance and uncover actionable insights for optimizing an Ed-Tech platform's content strategy.",
        images: [
            {
                src: "./images/ED-tech2.png",
                caption: "ED-tech page 1."
            },
            {
                src: "./images/ED-tech.png",
                caption: "ED-tech page 2."
            }
        ],
        video: `
                <iframe width="560" height="315" src="https://www.youtube.com/embed/5VnjfaJzoXc?si=XREc8T8FmJf-3W-q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    },
    project5: {
        title: "ED-tech Platform Analysis",
        description: `This project analyzes website user behavior and engagement across different days, hours, and traffic channels.
                    <h4>Problem Statement</h3>
                    <ul>
                        <li>How do hour, day, and user channel affect website engagement and session quality?
                        <li>Can we identify high-impact periods and channels for optimized marketing?
                    </ul>
                    <h4>Key Insights</h3>
                    <ul>
                        <li>Organic Social Channel drives the Highest Traffic
                        <li>Most of the Traffic arives at late evenings(8-12)
                        <li>Refferl Channel has the Highest Engagement Rate and Engagement Sessions.
                        <li>Engagement time and rates peak on weekdays
                        <li>Direct channel users have stronger conversion to engaged sessions
                    </ul>`,
        learnings: [
            "Advanced SQL Queries",
            "Database Management",
            "Data Analysis",
            "Business Intelligence"
        ],
        skills: ["SQL", "MySQL", "Database Management"],
        objective: "Bridge the data gap for AtliQ Hardwares through advanced SQL analytics and reporting solutions.",
        images: [],
        video: null
    },
    project6: {
        title: "Expense Management System",
        description: "Developed a full-stack Expense Management System with Python, FastAPI, Streamlit, and MySQL, featuring expense visualization, API integration, and database management.",
        learnings: [
            "Full-Stack Development",
            "API Development",
            "Database Design",
            "Web Application Development"
        ],
        skills: ["Python", "FastAPI", "MySQL", "Streamlit"],
        objective: "Create a comprehensive expense management solution with modern web technologies.",
        images: [],
        video: null
    }
};

// Open project modal with your predefined content
function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const project = projectDetails[projectId];
    
    if (!project) return;
    
    // Update modal content
    document.getElementById('modalProjectTitle').textContent = project.title;
    document.getElementById('modalProjectDescription').innerHTML = `<p>${project.description}</p>`;
    
    // Update learnings
    const learningsList = document.getElementById('modalProjectLearnings');
    learningsList.innerHTML = project.learnings.map(learning => 
        `<li>${learning}</li>`
    ).join('');
    
    // Update skills
    const skillsContainer = document.getElementById('modalProjectSkills');
    skillsContainer.innerHTML = project.skills.map(skill => 
        `<span class="skill-tag" style="background: #667eea;">${skill}</span>`
    ).join('');
    
    // Update objective
    document.getElementById('modalProjectObjective').innerHTML = project.objective;
    
    // Load your predefined images
    const imageGallery = document.getElementById('imageGallery');
    if (projectId === 'project2') {          // ONLY project-2
    imageGallery.innerHTML = `
      <div class="project-image tall-shot">
          <img src="${project.images[0].src}"
               alt="${project.images[0].caption}"
               onclick="openTallShot('${project.images[0].src}')">
          <div class="project-image-caption">${project.images[0].caption}</div>
      </div>`;
    } else {                                 // all other projects
        imageGallery.innerHTML = project.images.map((img) => `
        <div class="project-image">
            <img src="${img.src}" alt="${img.caption}"
                onclick="openLightbox('${img.src}','${img.caption}')">
            <div class="project-image-caption">${img.caption}</div>
        </div>`).join('');
    }
    
    // Load your predefined video
    const videoContainer = document.getElementById('videoContainer');
   
            if (project.video) {
            videoContainer.innerHTML = project.video;      // ← nothing extra
            } else {
            videoContainer.innerHTML = `
                <div class="video-placeholder">
                <i class="fab fa-youtube"></i>
                <p>No video available for this project yet</p>
                </div>`;
            }
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close project modal
function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Image lightbox functionality
// Update the existing openLightbox function
function openLightbox(imageSrc, caption) {
    openImageGallery(imageSrc);
}


function closeLightbox() {
    document.getElementById('imageLightbox').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        closeProjectModal();
    }
}
// Add this to your existing script.js file

// Certification data - Add your actual certificate files here
const certificationData = {
    cert1: {
        title: "Python for Data Analytics - Simplilearn",
        image: "images/Python.png", // Add your certificate image
        pdf: "pdf/Python.pdf",   // Add your certificate PDF
        downloadName: "Kuldeep python for data analysis.pdf"
    },
    cert2: {
        title: "PowerBI for beginners",
        image: "images/PowerBI.png", // Add your certificate image
        pdf: "pdf/PowerBI.pdf",   // Add your certificate PDF
        downloadName: "kuldeep_PowerBI for beginners.pdf"
    }
    // Add more certifications as you earn them
};

// View certification in modal
function viewCertification(certId) {
    const cert = certificationData[certId];
    if (!cert) return;
    
    const modal = document.getElementById('certificateModal');
    const title = document.getElementById('certificateTitle');
    const viewer = document.getElementById('certificateViewer');
    const downloadBtn = document.getElementById('downloadBtn');
    
    // Set title
    title.textContent = cert.title;
    
    // Load certificate (prefer image, fallback to PDF)
    if (cert.image) {
        viewer.innerHTML = `<img src="${cert.image}" alt="${cert.title}">`;
    } else if (cert.pdf) {
        viewer.innerHTML = `<iframe src="${cert.pdf}" title="${cert.title}"></iframe>`;
    } else {
        viewer.innerHTML = `
            <div class="certificate-placeholder">
                <i class="fas fa-file-alt"></i>
                <p>Certificate not available for preview</p>
            </div>
        `;
    }
    
    // Set download button
    downloadBtn.onclick = function() {
        downloadCertification(certId);
    };
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Download certification
function downloadCertification(certId) {
    const cert = certificationData[certId];
    if (!cert) return;
    
    const downloadUrl = cert.pdf || cert.image;
    if (downloadUrl) {
        // Create temporary download link
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = cert.downloadName || 'certificate.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        alert('Certificate file not available for download.');
    }
}

// Close certificate modal
function closeCertificateModal() {
    const modal = document.getElementById('certificateModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('certificateModal');
    if (event.target === modal) {
        closeCertificateModal();
    }
});

// Image Gallery with Navigation - Add this to your script.js

// Global variables for image navigation
let galleryImages = [];
let currentImageIndex = 0;
let imageModal = null;

// Create image modal with navigation
function createImageModal() {
    if (imageModal) return imageModal;
    
    // Create modal container
    imageModal = document.createElement('div');
    imageModal.id = 'imageGalleryModal';
    imageModal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.9);
        display: none;
        justify-content: center;
        align-items: center;
        z-index: 3000;
        backdrop-filter: blur(5px);
    `;
    
    // Create image element
    const modalImage = document.createElement('img');
    modalImage.id = 'modalImage';
    modalImage.style.cssText = `
        max-width: 85vw;
        max-height: 85vh;
        border-radius: 15px;
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.8);
        object-fit: contain;
    `;
    
    // Create previous button
    const prevButton = document.createElement('button');
    prevButton.innerHTML = '&#10094;'; // Left arrow
    prevButton.style.cssText = `
        position: absolute;
        left: 50px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 3rem;
        color: white;
        background: rgba(255, 255, 255, 0.2);
        border: none;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    // Create next button
    const nextButton = document.createElement('button');
    nextButton.innerHTML = '&#10095;'; // Right arrow
    nextButton.style.cssText = `
        position: absolute;
        right: 50px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 3rem;
        color: white;
        background: rgba(255, 255, 255, 0.2);
        border: none;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    // Create close button
    const closeButton = document.createElement('button');
    closeButton.innerHTML = '&times;';
    closeButton.style.cssText = `
        position: absolute;
        top: 30px;
        right: 50px;
        font-size: 3rem;
        color: white;
        background: rgba(255, 255, 255, 0.2);
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    // Create image counter
    const imageCounter = document.createElement('div');
    imageCounter.id = 'imageCounter';
    imageCounter.style.cssText = `
        position: absolute;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        color: white;
        background: rgba(0, 0, 0, 0.6);
        padding: 8px 16px;
        border-radius: 20px;
        font-size: 1rem;
    `;
    
    // Add hover effects
    const addHoverEffect = (button) => {
        button.addEventListener('mouseenter', function() {
            this.style.background = 'rgba(255, 255, 255, 0.3)';
            this.style.transform = this.style.transform + ' scale(1.1)';
        });
        button.addEventListener('mouseleave', function() {
            this.style.background = 'rgba(255, 255, 255, 0.2)';
            this.style.transform = this.style.transform.replace(' scale(1.1)', '');
        });
    };
    
    addHoverEffect(prevButton);
    addHoverEffect(nextButton);
    addHoverEffect(closeButton);
    
    // Append elements to modal
    imageModal.appendChild(modalImage);
    imageModal.appendChild(prevButton);
    imageModal.appendChild(nextButton);
    imageModal.appendChild(closeButton);
    imageModal.appendChild(imageCounter);
    
    // Add event listeners
    prevButton.addEventListener('click', function(e) {
        e.stopPropagation();
        showPreviousImage();
    });
    
    nextButton.addEventListener('click', function(e) {
        e.stopPropagation();
        showNextImage();
    });
    
    closeButton.addEventListener('click', function(e) {
        e.stopPropagation();
        closeImageModal();
    });
    
    // Close modal when clicking outside image
    imageModal.addEventListener('click', function(e) {
        if (e.target === imageModal) {
            closeImageModal();
        }
    });
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (imageModal.style.display === 'flex') {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                showPreviousImage();
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                showNextImage();
            } else if (e.key === 'Escape') {
                e.preventDefault();
                closeImageModal();
            }
        }
    });
    
    document.body.appendChild(imageModal);
    return imageModal;
}

// Function to show image at specific index
function showImageAtIndex(index) {
    if (index < 0) index = galleryImages.length - 1;
    if (index >= galleryImages.length) index = 0;
    
    currentImageIndex = index;
    const modalImage = document.getElementById('modalImage');
    const imageCounter = document.getElementById('imageCounter');
    
    modalImage.src = galleryImages[currentImageIndex];
    imageCounter.textContent = `${currentImageIndex + 1} / ${galleryImages.length}`;
    
    imageModal.style.display = 'flex';
}

// Function to show previous image
function showPreviousImage() {
    showImageAtIndex(currentImageIndex - 1);
}

// Function to show next image
function showNextImage() {
    showImageAtIndex(currentImageIndex + 1);
}

// Function to close modal
function closeImageModal() {
    if (imageModal) {
        imageModal.style.display = 'none';
    }
}

// Initialize gallery when modal opens
function openImageGallery(clickedImageSrc) {
    createImageModal();
    
    // Get all images in the current project modal
    const projectModal = document.getElementById('projectModal');
    if (projectModal && projectModal.style.display !== 'none') {
        const images = projectModal.querySelectorAll('.image-gallery img, .project-image img');
        galleryImages = Array.from(images).map(img => img.src);
        
        // Find the index of clicked image
        currentImageIndex = galleryImages.findIndex(src => src === clickedImageSrc);
        if (currentImageIndex === -1) currentImageIndex = 0;
        
        showImageAtIndex(currentImageIndex);
    }
}

/* ---------- full-height screenshot viewer for Project 2 ---------- */
function openTallShot(src){
    let box = document.getElementById('tallShotBox');
    if(!box){
        box = document.createElement('div');
        box.id = 'tallShotBox';
        box.innerHTML = `
            <div class="ts-overlay" onclick="closeTallShot()"></div>

            <div class="ts-content">
                <button class="ts-close" onclick="closeTallShot()">&times;</button>
                <img id="tsImg" src="">
            </div>`;

        document.body.appendChild(box);
    }
    document.getElementById('tsImg').src = src;
    box.style.display = 'flex';
    document.body.style.overflow = 'hidden';   // lock page scroll
}

function closeTallShot(){
    const box = document.getElementById('tallShotBox');
    if(box) box.style.display = 'none';
    document.body.style.overflow = 'auto';
}
