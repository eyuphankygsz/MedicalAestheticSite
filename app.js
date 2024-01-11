

let albumImages = [
    "https://www.8medicalaesthetic.com/images/sbanner3.png",
    "https://wallpapercave.com/wp/wp1848611.jpg",
    "https://wallpapercave.com/wp/wp1848637.jpg",
    "https://wallpapercave.com/wp/wp1848589.jpg",
    "https://wallpapercave.com/wp/wp1848591.jpg"
];

let albumTitle = [
    "Beautiful Face",
    "Like Home",
    "Big Place",
    "Clean Rooms",
    "Technology"
];
let albumContent = [
    "Look good with every body parts of your own.",
    "Warm and cozy!",
    "300 patient capacity.",
    "Sterilized rooms for your health.",
    "High quality technology only for you!"
];

let albCounter = 0;

let newUrl = "url(" + albumImages[albCounter] + ")";

let album = document.querySelector(".album");
album.style.backgroundImage = newUrl;

let middleTitle = document.querySelector(".middle h1")
middleTitle.innerHTML = albumTitle[albCounter];

let middleContent = document.querySelector(".middle p")
middleContent.innerHTML = albumContent[albCounter];

function albumChange(next){
    if(next){
        albCounter = 
        (albCounter + 1) == albumImages.length ? 0 : albCounter + 1; 
    }
    else{
        albCounter = 
        (albCounter - 1) == -1 ? albumImages.length -1 : albCounter - 1;
    }
    
    console.log(albCounter);
    newUrl = "url(" + albumImages[albCounter] + ")";
    album.style.backgroundImage = newUrl;
    middleTitle.innerHTML = albumTitle[albCounter];
    middleContent.innerHTML = albumContent[albCounter];


}
