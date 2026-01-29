// Navigation Modal JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navModal = document.getElementById('nav-modal');
    const navModalClose = document.getElementById('nav-modal-close');
    const navModalOverlay = document.getElementById('nav-modal-overlay');
    const navLinks = document.querySelectorAll('.giant-nav-link');

    // Open modal
    menuToggle.addEventListener('click', function() {
        navModal.classList.add('active');
        menuToggle.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent body scroll
    });

    // Close modal functions
    function closeModal() {
        navModal.classList.remove('active');
        menuToggle.classList.remove('active');
        document.body.style.overflow = ''; // Restore body scroll
    }

    // Close modal on close button click
    navModalClose.addEventListener('click', closeModal);

    // Close modal on overlay click
    navModalOverlay.addEventListener('click', closeModal);

    // Close modal on navigation link click
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeModal();
        });
    });

    // Close modal on Escape key press
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navModal.classList.contains('active')) {
            closeModal();
        }
    });
});
