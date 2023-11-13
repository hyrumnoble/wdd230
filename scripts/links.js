// scripts/links.js

const baseURL = "https://hyrumnoble.github.io/wdd230/";
const linksURL = `${baseURL}data/links.json`;

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data);
}

function displayLinks(weeks) {
  const linksContainer = document.getElementById('links-container');

  weeks.lessons.forEach((week) => {
    const weekNumber = week.lesson;
    const links = week.links;

    const weekContainer = document.createElement('div');
    weekContainer.classList.add('week');

    const weekHeading = document.createElement('h2');
    weekHeading.textContent = `Week ${weekNumber}`;

    const linksList = document.createElement('ul');

    links.forEach((link) => {
      const listItem = document.createElement('li');
      const linkElement = document.createElement('a');
      linkElement.href = `${baseURL}${link.url}`;
      linkElement.textContent = link.title;

      listItem.appendChild(linkElement);
      linksList.appendChild(listItem);
    });

    weekContainer.appendChild(weekHeading);
    weekContainer.appendChild(linksList);
    linksContainer.appendChild(weekContainer);
  });
}

getLinks();
