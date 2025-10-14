document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navBar = document.querySelector('.nav-bar');
    const navItems = document.querySelectorAll('.nav-item');

    // Menu toggle functionality
    menuToggle.addEventListener('click', function() {
        navBar.classList.toggle('active');
        
        // Animate menu icon
        const icon = menuToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Navigation item click handling - Remove this section
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Remove active class from all items
            navItems.forEach(navItem => {
                navItem.classList.remove('active');
            });
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Don't prevent default - let the link work normally
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navBar.contains(event.target);
        const isClickOnToggle = menuToggle.contains(event.target);

        if (!isClickInsideNav && !isClickOnToggle && navBar.classList.contains('active')) {
            navBar.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }
    });
});

// Update the existing click handler
// Remove this section
/*
document.addEventListener('DOMContentLoaded', function() {
    const floatContainer = document.querySelector('.float');
    const floatImg = document.querySelector('.float_img');
    const aboutSection = document.querySelector('.footer-section-about');
    
    floatContainer.addEventListener('click', function() {
        floatImg.classList.toggle('slide');
        aboutSection.classList.toggle('slide-in');
        
        // Reset animation after 3 seconds
        setTimeout(() => {
            floatImg.classList.remove('slide');
            aboutSection.classList.remove('slide-in');
        }, 3000);
    });
});
*/


// Initialize EmailJS with your public key
(function() {
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual EmailJS public key
})();

function sendEmail(e) {
    e.preventDefault();

    // Show loading state
    const submitBtn = document.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Get form data
    const templateParams = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
        to_email: 'wechanix@gmail.com'
    };

    // Send email using EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function(response) {
            // Show success message
            alert('Message sent successfully!');
            
            // Reset form
            document.getElementById('contactForm').reset();
            
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, function(error) {
            // Show error message
            alert('Failed to send message. Please try again.');
            console.error('EmailJS error:', error);
            
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });
}


document.addEventListener('DOMContentLoaded', function() {
    // Remove the existing click event listeners for nav items
    const navItems = document.querySelectorAll('.nav-item');
    
    // Get the current page path
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop() || 'index.html';
    
    // Set active class based on current page
    navItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href && (href === currentPage || href === './' + currentPage)) {
            // Remove active class from all items first
            navItems.forEach(navItem => navItem.classList.remove('active'));
            // Add active class to current page's nav item
            item.classList.add('active');
        }
    });

    // For the Services dropdown
    if (['golang.html', 'reactjs.html', 'flutter.html', 'services.html'].includes(currentPage)) {
        const servicesBtn = document.querySelector('.dropbtn');
        if (servicesBtn) {
            navItems.forEach(navItem => navItem.classList.remove('active'));
            servicesBtn.classList.add('active');
        }
    }
});


// Initialize EmailJS with your public key
(function() {
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual EmailJS public key
})();

function sendEmail(e) {
    e.preventDefault();

    // Show loading state
    const submitBtn = document.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Get form data
    const templateParams = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
        to_email: 'wechanix@gmail.com'
    };

    // Send email using EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function(response) {
            // Show success message
            alert('Message sent successfully!');
            
            // Reset form
            document.getElementById('contactForm').reset();
            
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, function(error) {
            // Show error message
            alert('Failed to send message. Please try again.');
            console.error('EmailJS error:', error);
            
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });
}