const catGifImg = document.getElementsByClassName('catImg')[0];

window.onload = () => {
    nextCatGif()
};

async function nextCatGif() {
    let out = await fetch('https://api.thecatapi.com/v1/images/search')
    catGifImg.src = (await out.json())[0]['url'];
}
