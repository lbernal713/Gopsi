document.addEventListener("DOMContentLoaded", function() {
    const teams = [
      { name: "Los Angeles Lakers", lineup: ["LeBron James", "Anthony Davis", "Russell Westbrook", "Carmelo Anthony", "Dwight Howard"] },
      { name: "Golden State Warriors", lineup: ["Stephen Curry", "Klay Thompson", "Andrew Wiggins", "Draymond Green", "James Wiseman"] },
      // Add more teams here...
    ];
  
    const teamContainer = document.getElementById("teamContainer");
  
    teams.forEach(team => {
      const card = document.createElement("div");
      card.classList.add("col-md-6", "col-lg-4");
  
      const cardBody = document.createElement("div");
      cardBody.classList.add("card", "shadow");
  
      const cardTitle = document.createElement("h5");
      cardTitle.classList.add("card-title", "mt-3");
      cardTitle.textContent = team.name;
  
      const cardText = document.createElement("div");
      cardText.classList.add("card-body");
  
      const lineupTitle = document.createElement("h6");
      lineupTitle.classList.add("card-subtitle", "mb-2", "text-muted");
      lineupTitle.textContent = "Lineup";
  
      const lineupList = document.createElement("ul");
      lineupList.classList.add("list-group", "list-group-flush");
  
      team.lineup.forEach(player => {
        const playerItem = document.createElement("li");
        playerItem.classList.add("list-group-item", "player");
        playerItem.textContent = player;
        lineupList.appendChild(playerItem);
      });
  
      cardText.appendChild(lineupTitle);
      cardText.appendChild(lineupList);
  
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);
  
      card.appendChild(cardBody);
  
      teamContainer.appendChild(card);
    });
  });
  