const btnEle = document.querySelector(".btn");
const animeContainerEle = document.querySelector(".anime-container");
const animeImgEle = document.querySelector(".anime-img")
const animeNameEle = document.querySelector(".anime-name")

btnEle.addEventListener("click", async function() {
    try {
        btnEle.disabled = true;
        btnEle.innerText = "loading.."
        animeNameEle.innerText = "Updating..."
        animeImgEle.src = "loading.svg"

        const randomPage = Math.floor(Math.random()*50)+1;

        const response = await fetch (`https://api.jikan.moe/v4/characters?page=${randomPage}`)
        const data = await response.json();

        const character = data.data[Math.floor(Math.random() * data.data.length)];

        btnEle.disabled = false;
        btnEle.innerText = 'Get Anime';

        console.log(randomPage);
        animeContainerEle.style.display = "block"
        animeImgEle.src = character.images.jpg.image_url;
        animeNameEle.innerText = character.name;
    } catch (error) {
        console.log(error);
        btnEle.disabled = false;
        btnEle.innerText = "Get Anime";
        animeNameEle.innerText = "An error happened, please try again"
    }
})