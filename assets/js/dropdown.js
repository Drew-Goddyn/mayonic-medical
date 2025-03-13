document.addEventListener('DOMContentLoaded', function() {
  // Only on mobile screens
  const isMobile = () => window.innerWidth <= 600;
  
  // Add click event to dropdown links in mobile view
  function initMobileDropdowns() {
    if (!isMobile()) return;
    
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
      const link = dropdown.querySelector('.page-link');
      
      link.addEventListener('click', function(e) {
        // Only prevent default if we're in mobile view
        if (isMobile()) {
          e.preventDefault();
          dropdown.classList.toggle('active');
        }
      });
    });
  }
  
  // Initialize
  initMobileDropdowns();
  
  // Re-initialize on resize
  window.addEventListener('resize', function() {
    initMobileDropdowns();
  });
}); 