let dish = "";
let clickedDish = "";
let dishImage = "";
let dishIntro = "";
let dishDetails = "";

let month = "";
let day = "";

function enterBday() {
    const bday = getElementById('bday-input').value;
    if (bday.length <= 0) return;
    month = parseInt(bday.substring(2, 3));
    day = parseInt(bday.substring(0, 1));
    findBday(month, day)
};

function findBday(month, day) {
    if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
        dish = "che";
    } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
        dish = "com-tam";
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        dish = "banh-mi";
    } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
        dish = "banh-cuon";
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
        dish = "bun-bo-hue";
    } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
        dish = "bun-cha";
    } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
        dish = "nem-lui";
    } else if ((month == 10 && day >= 23) || (month == 11 && day <= 22)) {
        dish = "banh-xeo";
    } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
        dish = "pho";
    } else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
        dish = "egg-coffee";
    } else if ((month == 1 && day >= 20) || (month == 2 && day <= 19)) {
        dish = "goi-cuon";
    } else if ((month == 2 && day >= 20) || (month == 3 && day <= 20)) {
        dish = "phin-coffee";
    }
    showDishDetail(dish);
};

function showDishDetail(dish) {
    // loop through dishData and find the match
}

const dishData = [
    {
        name: 'Pho',
        intro: 'A soup dish consisting of broth, rice noodles, herbs, and sliced meat (usually beef)',
        description: 'You are friendly and outgoing, known as "the diplomat" in your friend group. You are good at debating and public speaking. You are a wonderful story teller - it's hard to get distracted when listening to you!',
        image: 'pho.png',
    },
    {
        name: 
    }
]

function findClickedDish() {
    if (clickedDish = "che") {
        dish = "che";
    } else if (clickedDish = "com-tam") {
        dish = "com-tam";
    } else if (clickedDish = "banh-mi") {
        dish = "banh-mi";
    } else if (clickedDish = "banh-cuon") {
        dish = "banh-cuon";
    } else if (clickedDish = "bun-bo-hue") {
        dish = "bun-bo-hue";
    } else if (clickedDish = "bun-cha") {
        dish = "bun-cha";
    } else if (clickedDish = "nem-lui") {
        dish = "nem-lui";
    } else if (clickedDish = "banh-xeo") {
        dish = "banh-xeo";
    } else if (clickedDish = "pho") {
        dish = "pho";
    } else if (clickedDish = "egg-coffee") {
        dish = "egg-coffee";
    } else if (clickedDish = "goi-cuon") {
        dish = "goi-cuon";
    } else if (clickedDish = "phin-coffee") {
        dish = "phin-coffee";
    }
    showDishDetail();
};