// Add this to your JavaScript file
document.addEventListener('DOMContentLoaded', function () {
    // Get the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const currentDay = new Date().getDay();
  
    // Check if it's Monday, Tuesday, or Wednesday
    if (currentDay >= 1 && currentDay <= 3) {
      const banner = document.getElementById('chamberBanner');
      banner.style.display = 'block';
    }
  });
  
  function closeBanner() {
    const banner = document.getElementById('chamberBanner');
    banner.style.display = 'none';
  }
  