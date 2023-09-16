
function updateCurrentYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
  }
  
  function updateLastModifiedDate() {
    const lastModifiedElement = document.getElementById('lastModified');
    const lastModifiedDate = document.lastModified;
    lastModifiedElement.textContent = `Last modified: ${lastModifiedDate}`;
  }
  
  updateCurrentYear();
  updateLastModifiedDate();
  