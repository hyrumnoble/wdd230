
document.addEventListener('DOMContentLoaded', function () {
    const currentDay = new Date().getDay();
  
   
    if (currentDay >= 1 && currentDay <= 3) {
      const banner = document.getElementById('chamberBanner');
      banner.style.display = 'block';
    }
  });
  
  function closeBanner() {
    const banner = document.getElementById('chamberBanner');
    banner.style.display = 'none';
  }
  