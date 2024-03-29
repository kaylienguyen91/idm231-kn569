//@ts-check

let dish = "";
let month = "";
let day = "";

const dishImage = document.getElementById("dish-img");
const dishName = document.getElementById("dish-name");
const dishIntro = document.getElementById("dish-intro");
const dishDescrip = document.getElementById("description");

function enterBday(event) {
    event.preventDefault();
    const bday = document.getElementById('bday-input');

    if (bday.value.length <= 0) return;
    month = parseInt(Number(bday.value.substring(5, 7)));
    day = parseInt(Number(bday.value.substring(8, 10)));
    findBday(month, day)
};

const form = document.querySelector('#bday-generator');
if (form) {
    form.addEventListener('submit', enterBday, false);
} else {
    console.log('no form found')
}

function findBday(month, day) {
    if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
        dish = "Che";
    } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
        dish = "Broken rice";
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        dish = "Banh mi";
    } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
        dish = "Banh cuon";
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
        dish = "Bun bo Hue";
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
    showDishDetail(dish)
};

function showDishDetail(dish) {
    const mainDish = dishData.filter(
        item => item.name === dish
    )[0]
    console.log(mainDish)
    dishImage.src = mainDish.image;
    dishName.innerText = mainDish.name;
    dishIntro.innerText = mainDish.intro;
    dishDescrip.innerText = mainDish.description;

    playsound(mainDish.sound);
}

function playsound(sound) {
    const audioElement = document.getElementById('audioplayer');
    audioElement.pause();
    audioElement.currentTime = 0;
    audioElement.src = sound;
    audioElement.play();
}

const dishButton = document.getElementsByClassName('dish-button');

for (const button of dishButton) {
    button.addEventListener('click', () => {
        showClickedDish(button); 
    }, false);
}


function showClickedDish(button) {
    const food = button.id;
    const mainDish = dishData.filter(
        item => item.id === food
    )[0]
    console.log(mainDish)
    dishImage.src = mainDish.image;
    dishName.innerText = mainDish.name;
    dishIntro.innerText = mainDish.intro;
    dishDescrip.innerText = mainDish.description;

    playsound(mainDish.sound);
}

const helpButton = document.getElementById('help-button');

if (helpButton) {
    helpButton.addEventListener('click', () => {
        dishImage.src = 'image-asset/icon-maindish.png';
        dishName.innerText = 'Instruction';
        dishName.style.paddingTop = '1.2rem';
        dishIntro.innerText = 'Welcome to Vietnamese Cuisine Generator!';
        dishDescrip.innerText = 'Enter your birthday above to discover which Vietnamese dish you are! You can also click on buttons on the side to read about other dishes and corresponding characters.';
    }, false);
}

const dishData = [
    {
        name: "Pho",
        intro: "A soup dish consisting of broth, rice noodles, herbs, and sliced meat (usually beef)",
        description: "You are friendly and outgoing, known as 'the diplomat' in your friend group. You are good at debating and public speaking. You are a wonderful story teller - it's hard to get distracted when listening to you!",
        image: 'image-asset/pho.png',
        sound: 'sounds/pho.wav',
        id: "pho",
    },
    {
        name: "Spring rolls",
        intro: "A refreshing appetizer made with shrimp, vegetables, herbs, and rice noodles wrapped in rice paper",
        description: "You have a great sense of humor and love making people laugh. Sometimes you are as innocent and carefree as a child - that's why people say you look younger than your age.",
        image: 'image-asset/spring-rolls.png',
        sound: 'sounds/spring-rolls.wav',
        id: "spring-rolls",
    },
    {
        name: "Banh mi",
        intro: "A French baguette roll with pickled vegetables, cilantro and any assortment of meat, spread with mayonnaise and chili sauce",
        description: "You are give off the vibe of a campus celebrity! You are popular in your network for your chic fashion style. You dress well and care about appearance but also have admirable personality traits!",
        image: 'image-asset/banh-mi.png',
        sound: 'sounds/banh-mi.wav',
        id: "banh-mi",
    },
    {
        name: "Bun cha",
        intro: "Rice vermicelli noodles with grilled pork pieces/meatballs and a broth that is both a marinade for the meat and a dip",
        description: "You are quiet and a little shy when people first meet you. But once they get to know you, you become way more talkative and outgoing! You have a hidden charm that makes people want to stick around.",
        image: 'image-asset/bun-cha.png',
        sound: 'sounds/bun-cha.wav',
        id: "bun-cha",
    },
    {
        name: "Banh cuon",
        intro: "Steamed rice rolls stuffed with pork and mushrooms, served with a fried shallot dip, sweet and sour fish sauce",
        description: "You are kind to everyone around you! You rarely express your anger or negative emotions. Despite love hanging out with friends, you still prefer enjoying your own company. You value self-love and often treat yourself. You seem to hide some of your secrets from your close friends.",
        image: 'image-asset/banh-cuon.png',
        sound: 'sounds/banh-cuon.wav',
        id: "banh-cuon",
    },
    {
        name: "Nem lui",
        intro: "Grilled pork sausage or meatball on lemongrass skewers",
        description: "You prefer developing your existing relationships to broadening your network. You may not have a lot of friends but those you have are the best people! You are very caring and always be there for others. Your friends often describe you as their second mother.",
        image: 'image-asset/nem-lui.png',
        sound: 'sounds/nem-lui.wav',
        id: "nem-lui",
    },
    {
        name: "Banh xeo",
        intro: "Bright yellow crispy crepe filled with shrimp, pork and vegetables",
        description: "You are an organized and goal-oriented person. You hardly ever procrastinate and always make effort to achieve what you want. That being said, you are not a boring person. Outside work, you also love spending time with your loved ones or on your hobbies.",
        image: 'image-asset/banh-xeo.png',
        sound: 'sounds/banh-xeo.wav',
        id: "banh-xeo",
    },
    {
        name: "Broken rice",
        intro: "Soft and fluffy broken rice with marinated grilled pork chops, fried egg, pickled vegetables and dipping fish sauce",
        description: "You are smart and knowledgeable. You have a wanderlust spirit and travel a lot. People around you are always excited to listen to your unique stories and experiences.",
        image: 'image-asset/broken-rice.png',
        sound: 'sounds/broken-rice.wav',
        id: "broken-rice",
    },
    {
        name: "Bun bo Hue",
        intro: "Rice vermicelli with a rich spicy broth, beef and pork slices, topped with leaves and herbs",
        description: "You are a home body, but you are not a potato couch or an introvert. You love being with your friends, but instead of hanging out, you prefer throwing a house party and asking them over. You are also great at cooking!",
        image: 'image-asset/bun-bo-hue.png',
        sound: 'sounds/bun-bo-hue.wav',
        id: "bun-bo-hue",
    },
    {
        name: "Phin coffee",
        intro: "Coffee brewed with phin filter - a popular coffee brewing tool in Vietnam",
        description: "You have a healthy lifestyle! You exercise a lot and have a good diet. You value a self-care, both physically and mentally. You are the inspiration for other people to change for the better!",
        image: 'image-asset/phin-coffee.png',
        sound: 'sounds/phin-coffee.wav',
        id: "phin-coffee",
    },
    {
        name: "Egg coffee",
        intro: "Robusta coffee with egg yolks, sugar, and condensed milk",
        description: "You are sweet and adorable, you show your love to other people by taking care of them. You love animals and nature, enjoy learning about them and being outdoors. If you have to choose between dogs and cats, it's definitely cats.",
        image: 'image-asset/egg-coffee.png',
        sound: 'sounds/egg-coffee.wav',
        id: "egg-coffee",
    },
    {
        name: "Che",
        intro: "Sweet Vietnamese dessert (drink/pudding/soup) with a variety of ingredients (jelly, beans, coconut, fruits, etc)",
        description: "You are creative and never run out of ideas (a true artists!). You are confident and don't hesitate expressing yourself - but you're not arrogant. You always try to find the smartest and fastest way to get things done.",
        image: 'image-asset/che.png',
        sound: 'sounds/che.wav',
        id: "che",
}];