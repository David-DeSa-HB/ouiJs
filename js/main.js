function warning() {
    if (confirm("Attention cette action est irrémédiable. Voulez-vous continuer ?")) {
        alert("Action confirmée.");
    } else {
        alert("Action annulée.");
    }
}

const table = document.getElementById("table")

const flipButton = document.getElementById("flip")
const unflipButton = document.getElementById("unflip")

function flip() {
    table.innerHTML = "(╯°□°)╯︵ ┻━┻";
    flipButton.hidden = true;
    unflipButton.hidden = false;
}

function unflip() {
    table.innerHTML = "┬─┬ノ( º _ ºノ)";
    flipButton.hidden = false;
    unflipButton.hidden = true;
}

flipButton.addEventListener("click", flip);
unflipButton.addEventListener("click", unflip);


const name = document.getElementById("name").value;
const email = document.getElementById("email").value;

document.getElementById('myForm').addEventListener('submit', function(event) {

    if (!name||!email){
        alert("fields required");
        event.prenventDefault();
    } else{
        alert("its all ok");
    }
});
console.log(document.getElementById("name").value)
console.log(name)

var truc = "toto"
var truc = "titi"
console.log(truc);

// let machin ="tutu"
// let machin = "tata"
// console.log(machin);

const user = {
    name: "john",
    age: 33,
    pseudo: "mon super pseudo",
    mail: "mail@test.com"
}

console.log(user.name, user.age)

console.log(typeof user.age)


document.getElementById('numGuess').addEventListener('submit', function(event) {
const myNum = parseInt(document.getElementById("myNum").value);
const num = 5
for (let i = 0; i <= myNum; i++) {
    console.log("The number is " + i);
}
    if (myNum===num){
        alert("bien joué fréro");
    } else if (myNum>num){
        alert("trop haut");
    } else alert("trop bas");
});

const myButton = document.getElementById("showButton")
const myMsg = document.getElementById("msg")
let msgCondtion = true

function addMsg() {
    if (msgCondtion) {
        myMsg.innerHTML = "J'affiche du texte"
        msgCondtion = false
        flipButton.hidden = false;
        return msgCondtion
    } else { 
        myMsg.innerHTML = "Rien à voir, circulez";
        msgCondtion = true
        return msgCondtion
    }
}

myButton.addEventListener("click", addMsg);

const myTitle = document.getElementById("myTitle")
var refreshIntervalId = setInterval(fname, 1000);

function changeBG(event, bgCondtion = false) {
    if ((event.key==" "|| event.code=="space") && bgCondtion == false){
        setInterval(() => {
            document.body.classList.add("red");
            myTitle.classList.add("white");
            bgCondtion = true;
            this.changeBGTimeout = active;
        }, 1500)
    } else {
            document.body.classList.remove("red");
            myTitle.classList.remove("white");
            bgCondtion = false;
            clearInterval(refreshIntervalId);
        }
}

document.addEventListener("keydown", (event) => changeBG(event));

var refreshIntervalId = setInterval(fname, 10000);

/* later */
clearInterval(refreshIntervalId);

const fruits = ["pêche", "pomme", "poire"]
fruits.push("mangue");
fruits.unshift;
console.log(fruits);