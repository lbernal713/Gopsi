// Object contrusctor for NBA player
 
// const nbaPlayer = new Object();

// nbaPlayer.firstName = "LeBron";
// nbaPlayer.lastName = "James"

const nbaPlayer = {
    firstName: "LeBron",
    lastName: "James"
}

const nbaTeam = {
    teamName: "Lakers",
    teamCity: "Los Angeles",
    teamStateAbv: "CA"
}

const displayNbaTeam  = function(){
    alert(nbaTeam.teamName + " " + nbaTeam.teamCity + ", " + nbaTeam.teamStateAbv);
}
displayNbaTeam();

nbaPlayer.salary = 1000000;

// const nbaPlayerDribble = function () {
//     console.log(nbaPlayer);
//     alert("I am a NBA player");
// };

//nbaPlayerDribble();

const nbaPlayerPass = function (nbaPlayer) {
    console.log(nbaPlayer);
    // alert("I am NBA player " + nbaPlayer.firstName + " " + nbaPlayer.lastName);
    alert("I am NBA player " + nbaPlayer.firstName + " " + nbaPlayer.lastName + " " + nbaPlayer.salary);
};

//function being called with the nbaPlayer
//nbaPlayerPass(nbaPlayer);

// Access the player info div
const playerInfoDiv = document.getElementsByClassName("player-info");

// Update the player info div with the player info
playerInfoDiv.innerHTML = `<p>First Name: ${nbaPlayer.firstName}</p>
                            <p>Last Name: ${nbaPlayer.lastName}</p>
                            <p>Salary: ${nbaPlayer.salary}</p>`;

var value = element.getElementsByClassName("player-info");

console.log(value);




