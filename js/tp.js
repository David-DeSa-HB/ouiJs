

// Leaflet

var map = L.map('map').setView([45.75814521755047, 3.1268172588954934], 14);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([45.75814521755047, 3.1268172588954934]).addTo(map);

// image via JS

let img = document.createElement('img');
img.src ='https://cdn.pixabay.com/photo/2017/10/10/16/55/halloween-2837936_1280.png';
document.getElementById('picture').appendChild(img);


// ajout des destinations

const destinationList = ["Paris", "Berlin", "Londres"]


// let destinationForm = document.createElement('form');
// destinationForm.id = "destinationForm";
// document.getElementById('destinations').appendChild(form);
// div.append("Some text", form);

// let destinationLabel = document.createElement('label');
// destinationLabel.id = "destinationLabel";
// destinationLabel.for = "mydestination";
// document.getElementById('destinationForm').appendChild(destinationLabel);

// let destinationInput = document.createElement('input');
// destinationInput.id = "destinationInput";
// destinationInput.name = "destinationInput";
// destinationInput.type = "text";
// document.getElementById('destinationForm').appendChild(destinationInput);


destinationList.forEach((element) => createButton(element));

document.getElementById('destinationForm').addEventListener('submit', function(event) {
    const destination = document.getElementById("destination").value;
    event.preventDefault();
    if (!destination){
        alert("field required");
    } else if(!destinationList.includes(destination)){
        destinationList.push(destination);
        createButton(destination)
    } else {
        alert("already included");
    } 
    
});

document.getElementById("destinationButton").addEventListener('click', function(event) {
    const target = event.target;
    text = target.textContent || target.innerText;
    target.remove() 
    deleteButton(text)
    // console.log(text)
});

function createButton(element){
    const destinationButton = document.createElement('button');
    document.getElementById('destinationButton').appendChild(destinationButton);
    destinationButton.innerHTML = element;
}

function deleteButton(textElement){
    const destinationIndex = destinationList.indexOf(textElement);
    destinationList.splice(destinationIndex, 1)
    console.log(destinationList);
}
