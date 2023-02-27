let dish = "";
let clickedDish = "";
let dishImage = "";
let dishDetails = "";

let month = "";
let day = "";

function enterBday() {
    const bday = getElementById('bday-input').value;
    if (bday.length <= 0) return;
    month = parseInt(bday.substring(2, 3));
    day = parseInt(bday.substring(0, 1));
}

function findBday() {
    
}