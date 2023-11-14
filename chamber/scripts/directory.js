// scripts/directory.js

document.addEventListener("DOMContentLoaded", function () {
    const membersContainer = document.getElementById("members-container");
  
    // Load JSON data
    fetch("data/members.json")
      .then((response) => response.json())
      .then((data) => {
        // Display members based on the default view (grid)
        displayMembers(data.members, "grid");
  
        // Toggle between grid and list views
        const toggleButton = document.getElementById("toggle-view-button");
        toggleButton.addEventListener("click", function () {
          const currentView = membersContainer.classList.contains("grid-view")
            ? "list"
            : "grid";
          displayMembers(data.members, currentView);
        });
      });
  });
  
  function displayMembers(members, view) {
    const membersContainer = document.getElementById("members-container");
    membersContainer.innerHTML = "";
  
    members.forEach((member) => {
      const memberElement = createMemberElement(member, view);
      membersContainer.appendChild(memberElement);
    });
  
    // Add view-specific class to the container
    membersContainer.className = view === "grid" ? "grid-view" : "list-view";
  }
  
  function createMemberElement(member, view) {
    const memberElement = document.createElement(view === "grid" ? "div" : "li");
    memberElement.className = view === "grid" ? "member-card" : "member-list-item";
  
    // Populate member information
    memberElement.innerHTML = `
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>Phone: ${member.phone}</p>
      <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
      <img src="images/${member.image}" alt="${member.name} Image">
      <p>Membership Level: ${member.membershipLevel}</p>
      <p>${member.otherInfo}</p>
    `;
  
    return memberElement;
  }
  