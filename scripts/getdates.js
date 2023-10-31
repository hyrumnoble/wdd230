document.addEventListener('DOMContentLoaded', function() {
  function updateCurrentYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
  }

  function updateLastModifiedDate() {
    const lastModifiedElement = document.getElementById('lastModified');
    const lastModifiedDate = document.lastModified;
    lastModifiedElement.textContent = `Last modified: ${lastModifiedDate}`;
  }

  function incrementVisitCount() {
    let visitCount = localStorage.getItem('pageVisits');
    visitCount = visitCount ? parseInt(visitCount) + 1 : 1;
    localStorage.setItem('pageVisits', visitCount);
    document.getElementById('visitCount').textContent = visitCount;
  }
  
  window.onload = function () {
    if (localStorage.getItem('pageVisits')) {
      incrementVisitCount();
    } else {
      localStorage.setItem('pageVisits', 1);
    }
  }

  updateCurrentYear();
  updateLastModifiedDate(); 
});