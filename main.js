let dish = "";
// let clickedDish = "";
// let dishImage = "";
// let dishIntro = "";
// let dishDetails = "";

let month = "";
let day = "";


function enterBday(event) {
    // console.log("hello")
    event.preventDefault();
    const bday = document.getElementById('bday-input');

    console.log(bday.value)
    if (bday.length <= 0) return;
    month = parseInt(bday.value.substring(5, 7));
    day = parseInt(bday.value.substring(8, 10));
    findBday(month, day)
};

const form = document.querySelector('#bday-generator');
if (form) {
    // console.log('testing')
    form.addEventListener('submit', enterBday, false);
    // form.addEventListener('submit', () => { console.log('form submitted')})
} else {
    console.log('no form found')
}

function findBday(month, day) {
    // console.log(month, day)
    // console.log("Hello")
    if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
        dish = "Che";
    } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
        dish = "Broken rice";
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        dish = "Banh mi";
    } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
        dish = "Banh cuon";
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
        dish = "Bun bo hue";
    } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
        dish = "Bun cha";
    } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
        dish = "Nem lui";
    } else if ((month == 10 && day >= 23) || (month == 11 && day <= 22)) {
        dish = "Banh xeo";
    } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
        dish = "Pho";
    } else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
        dish = "Egg coffee";
    } else if ((month == 1 && day >= 20) || (month == 2 && day <= 19)) {
        dish = "Spring rolls";
    } else if ((month == 2 && day >= 20) || (month == 3 && day <= 20)) {
        dish = "Phin coffee";
    }
    // console.log("Hello")
    // const dishDetail = showDishDetail(dish)
    showDishDetail(dish)
    showClickedDish(dish)
};

function showDishDetail(dish) {
    const main_dish = dishData.filter(
        item => item.name === dish
    )[0]
    console.log(main_dish)
    document.getElementById("dish-img").src = main_dish.image;
    document.getElementById("dish-name").innerText = main_dish.name;
    document.getElementById("dish-intro").innerText = main_dish.intro;
    document.getElementById("description").innerText = main_dish.description;
}

const dishButton = document.getElementsByClassName('dish-button').getAttribute('alt');

function showClickedDish(dishButton) {
    const main_dish = dishData.filter(
        item => item.name === dishButton
    )[0]
    console.log(main_dish)
    document.getElementById("dish-img").src = main_dish.image;
    document.getElementById("dish-name").innerText = main_dish.name;
    document.getElementById("dish-intro").innerText = main_dish.intro;
    document.getElementById("description").innerText = main_dish.description;
}

if (dishButton) {
    dishButton.addEventListener('click', showDishDetail, false);
}

const dishData = [
    {
        name: "Pho",
        intro: "A soup dish consisting of broth, rice noodles, herbs, and sliced meat (usually beef)",
        description: "You are friendly and outgoing, known as 'the diplomat' in your friend group. You are good at debating and public speaking. You are a wonderful story teller - it's hard to get distracted when listening to you!",
        image: 'image-asset/pho.png',
    },
    {
        name: "Spring rolls",
        intro: "A refreshing appetizer made with shrimp, vegetables, herbs, and rice noodles wrapped in rice paper",
        description: "You have a great sense of humor and love making people laugh. Sometimes you are as innocent and carefree as a child - that's why people say you look younger than your age.",
        image: 'image-asset/spring-rolls.png',
    },
    {
        name: "Banh mi",
        intro: "A French baguette roll with pickled vegetables, cilantro and any assortment of meat, spread with mayonnaise and chili sauce",
        description: "You are give off the vibe of a campus celebrity! You are popular in your network for your chic fashion style. You dress well and care about appearance but also have admirable personality traits!",
        image: 'image-asset/banh-mi.png',
    },
    {
        name: "Bun cha",
        intro: "Rice vermicelli noodles grilled pork pieces/meatballs and a broth that is both a marinade for the meat and a dip",
        description: "You are quiet and a little shy when people first meet you. But once they get to know you, you become way more talkative and outgoing! You have a hidden charm that makes people want to stick around.",
        image: 'image-asset/bun-cha.png',
    },
    {
        name: "Banh cuon",
        intro: "Steamed rice rolls stuffed with pork and mushrooms, served with a fried shallot dip, sweet and sour fish sauce",
        description: "You are kind to everyone around you! You rarely express your anger or negative emotions. Despite love hanging out with friends, you still prefer enjoying your own company. You value self-love and often treat yourself. You seem to hide some of your secrets from your close friends.",
        image: 'image-asset/banh-cuon.png',
    },
    {
        name: "Nem lui",
        intro: "Grilled pork sausage or meatball on lemongrass skewers",
        description: "You prefer developing your existing relationships to broadening your network. You may not have a lot of friends but those you have are the best people! You are very caring and always be there for others. Your friends often describe you as their second mother.",
        image: 'image-asset/nem-lui.png',
    },
    {
        name: "Banh xeo",
        intro: "Bright yellow crispy crepe filled with shrimp, pork and vegetables",
        description: "You are an organized and goal-oriented person. You hardly ever procrastinate and always make effort to achieve what you want. That being said, you are not a boring person. Outside work, you also love spending time with your loved ones or on your hobbies.",
        image: 'image-asset/banh-xeo.png',
    },
    {
        name: "Broken rice",
        intro: "Soft and fluffy broken rice with marinated grilled pork chops, fried egg, pickled vegetables and dipping fish sauce",
        description: "You are smart and knowledgeable. You have a wanderlust spirit and travel a lot. People around you are always excited to listen to your unique stories and experiences.",
        image: 'image-asset/broken-rice.png',
    },
    {
        name: "Bun bo Hue",
        intro: "Rice vermicelli with a rich spicy broth, beef and pork slices, topped with leaves and herbs",
        description: "You are a home body, but you are not a potato couch or an introvert. You love being with your friends, but instead of hanging out, you prefer throwing a house party and asking them over. You are also great at cooking!",
        image: 'image-asset/bun-bo-hue.png',
    },
    {
        name: "Phin coffee",
        intro: "Coffee brewed with phin filter - a popular coffee brewing tool in Vietnam",
        description: "You have a healthy lifestyle! You exercise a lot and have a good diet. You value a self-care, both physically and mentally. You are the inspiration for other people to change for the better!",
        image: 'image-asset/phin-coffee.png',
    },
    {
        name: "Egg coffee",
        intro: "Robusta coffee with egg yolks, sugar, and condensed milk",
        description: "You are sweet and adorable, you show your love to other people by taking care of them. You love animals and nature, enjoy learning about them and being outdoors. If you have to choose between dogs and cats, it's definitely cats.",
        image: 'image-asset/egg-coffee.png',
    },
    {
        name: "Che",
        intro: "Sweet Vietnamese dessert (drink/pudding/soup) with a variety of ingredients (jelly, beans, coconut, fruits, etc)",
        description: "You are creative and never run out of ideas (a true artists!). You are confident and don't hesitate expressing yourself - but you're not arrogant. You always try to find the smartest and fastest way to get things done.",
        image: 'image-asset/che.png',
}];



// function findClickedDish() {
//     if (clickedDish = "che") {
//         dish = "che";
//     } else if (clickedDish = "com-tam") {
//         dish = "com-tam";
//     } else if (clickedDish = "banh-mi") {
//         dish = "banh-mi";
//     } else if (clickedDish = "banh-cuon") {
//         dish = "banh-cuon";
//     } else if (clickedDish = "bun-bo-hue") {
//         dish = "bun-bo-hue";
//     } else if (clickedDish = "bun-cha") {
//         dish = "bun-cha";
//     } else if (clickedDish = "nem-lui") {
//         dish = "nem-lui";
//     } else if (clickedDish = "banh-xeo") {
//         dish = "banh-xeo";
//     } else if (clickedDish = "pho") {
//         dish = "pho";
//     } else if (clickedDish = "egg-coffee") {
//         dish = "egg-coffee";
//     } else if (clickedDish = "goi-cuon") {
//         dish = "goi-cuon";
//     } else if (clickedDish = "phin-coffee") {
//         dish = "phin-coffee";
//     }
//     showDishDetail();
// };




// Lecture
// const color_data = [
//     {
//         name: 'red',
//         hex: '#ff0000',
//         sound: 'sound_1',
//     },
//     {
//         name: 'white',
//         hex: '#ffffff',
//         sound: 'sound_2',
//     },
//     {
//         name: 'blue',
//         hex: '#0000ff',
//         sound: 'sound_3',
//     },
// ]

// const audio_element = document.querySelector('#audio_player')
// const button_div = document.querySelector('.buttons')
// const select_element = document.getElementById('color')

// function update_ui(selected_color) {
//     console.log('selected color: ', selected_color)
//     const color_object = color_data.filter(
//         item => item.name === selected_color
//     )[0]
//     console.log(color_object)

//     document.body.style.backgroundColor = color_object.hex

//     audio_element.pause()
//     audio_element.currentTime = 0
//     audio_element.src = '/sounds/$'
// }

// function create_button(item) {
//     console.log(item)
//     const button = document.createElement('button')
//     const button_label = document.createTextNode(item.name)
//     button.className = item.name
//     button.addEventListener('click', () => {
//         // console.log(button.className)
//         update_ui(button.className)
//     })
//     button.appendChild(button_label)
// }

// function create_ui_element() {
//     color_data.forEach(item => {
//         create_button(item)
//     })
// }

// function init() {
//     create_ui_element();
// }

// window.addEventListener('load', init, false);