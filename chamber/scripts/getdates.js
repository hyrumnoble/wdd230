const lastModifiedDate = new Date(document.lastModified);
    const formattedDate = `${lastModifiedDate.getFullYear()}-${lastModifiedDate.getMonth() + 1}-${lastModifiedDate.getDate()}`;
    document.getElementById('last-modified-date').innerText = formattedDate;