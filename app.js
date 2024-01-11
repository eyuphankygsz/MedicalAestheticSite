let a = document.querySelector(".album");

let albumImages = [
    "https://images7.alphacoders.com/749/749807.png",
    "https://cdn1.epicgames.com/b30b6d1b4dfd4dcc93b5490be5e094e5/offer/RDR2476298253_Epic_Games_Wishlist_RDR2_2560x1440_V01-2560x1440-2a9ebe1f7ee202102555be202d5632ec.jpg",
    "https://wallpapers.com/images/featured/red-dead-redemption-2-z2k9m7covvnglatm.jpg",
    "https://www.pixel4k.com/wp-content/uploads/2020/01/red-dead-redemption-2_1578851471.jpg.webp"
];
let albCounter = 0;

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
    let newUrl = "url(" + albumImages[albCounter] + ")";
    a.style.backgroundImage = newUrl;
}
