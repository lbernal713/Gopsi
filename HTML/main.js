// Object contrusctor for NBA player
 
// const nbaPlayer = new Object();

// nbaPlayer.firstName = "LeBron";
// nbaPlayer.lastName = "James"

//nbaPlayer object declaration
const nbaPlayer = {
    firstName: "LeBron",
    lastName: "James"
}

const nbaTeam = {
    teamName: "Lakers",
    teamCity: "Los Angeles",
    teamStateAbv: "CA"
}

// const displayNbaTeam  = function(){
//     alert(nbaTeam.teamName + " " + nbaTeam.teamCity + ", " + nbaTeam.teamStateAbv);
// }
// displayNbaTeam();

nbaPlayer.salary = 1000000;

// const nbaPlayerDribble = function () {
// console.log(nbaPlayer);
//     alert("I am a NBA player");
// };

//nbaPlayerDribble();

// const nbaPlayerPass = function (nbaPlayer) {
//     console.log(nbaPlayer);
//     // alert("I am NBA player " + nbaPlayer.firstName + " " + nbaPlayer.lastName);
//     alert("I am NBA player " + nbaPlayer.firstName + " " + nbaPlayer.lastName + " " + nbaPlayer.salary);
// };

//function being called with the nbaPlayer
//nbaPlayerPass(nbaPlayer);

// Access the player info div
const playerInfoDiv = document.getElementById("player-info");
// console.log(playerInfoDiv);
// Update the player info div with the player info
if(playerInfoDiv != null){
    playerInfoDiv.innerHTML = `<p>First Name: ${nbaPlayer.firstName}</p>                            <p>Last Name: ${nbaPlayer.lastName}</p>                            <p>Salary: ${nbaPlayer.salary}</p>`;
}


var x = "the letter x";
var y = "the letter y";

y = x;

// console.log(y);

var name = "Luis";
var age = 26;

// alert(`Real Knagga in the building ${name} ${age}`);
// console.log(`console.log real knagga${name} ${age}`);

const summation = function(x,y){
    console.log(x+y);
};

var sixty = 60;
var eight = 8;

// summation(60,8);


const greet = function(name){
    alert(`Hello, welcome ${name}!`);
};
// greet(name);

// Declaring an Array
const fruits = ["apple", "banana","orange","blueberries"];
// console.log(fruits);

// console.log(`The first fruit of the list is ${fruits[0]} and the last fruit is ${fruits[fruits.length-1]}`);

var numbersaye = [3,4,5,7];
var sum = 0;

for (let x =0; x<numbersaye.length; x++){
    sum = sum + numbersaye[x];
}

// console.log(sum);

const oddchecker = function(sum){
    if(sum%2 == 0){
        console.log(`The number ${sum} is even`)
    }
    else 
        console.log(`The number ${sum} is odd`)
    }

// oddchecker(sum);

function multipleof5(sum){
    if(sum%5==0){
        console.log("This number is a multiple of 5");
    }
    else
        console.log("This number is not a multiple of 5")
}
// multipleof5(5);
// multipleof5(15);
// multipleof5(sum);

//DOM Manipulations
const fruitdiv = document.getElementById("fruits-list")
if(fruitdiv!=null){
    fruitdiv.innerHTML = `<ol>
    <li>
    ${fruits[0]}
    First Fruit
    </li>
    <li>
    ${fruits[1]}
    Second Fruit
    </li>
    <li>
    ${fruits[2]}
    Third Fruit
    </li>
</ol>`
};

// function updatetext() {
//     const blogpost = document.getElementById("blog-post");
//     console.log(blogpost);
//     if (blogpost !== null) {
//         document.addEventListener("DOMContentLoaded", (event) => {
//             console.log("DOM fully loaded and parsed");
//             });
//     }
// }

function updatetext() {
    const blogpost = document.getElementById("blog-post");
    console.log(blogpost);
    if (blogpost !== null) {
        blogdiv = document.createElement("p");
        blogdiv.textContent = "This is a new paragraph";
        document.body.appendChild(blogdiv);
    }
}

const a = 5;
const b = 2;

function substract(a,b){
    console.log(a-b)
}

substract(a,b)

// adding alert when element is clicked
// document.getElementById("blog-update-button").addEventListener("click", function() {
//     alert("Button clicked!");
// });

// document.getElementById("input_num1").addEventListener("click",function(){
//     alert("input text box clicked")
// })
