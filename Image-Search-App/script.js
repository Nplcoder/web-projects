const accessKey ="RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";

const formEle = document.querySelector('form');
const searchInputEle = document.querySelector('#search-input');
const searchResultEle = document.querySelector('.search-results');
const showMoreButtonEle = document.querySelector('#show-more-button');

let inputData = ''
let page = 1;

async function searchImages(){
    inputData = searchInputEle.value;
    // console.log(inputData);
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`
    
    const response = await fetch(url);
    const data = await response.json();
    if(page === 1){
        searchResultEle.innerHTML = "";
    }

    const results = data.results;

    results.map((result) => {
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add('search-result');
        const image = document.createElement('img');
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);

        searchResultEle.appendChild(imageWrapper)
    });

   page++;

    if(page > 1){
        showMoreButtonEle.style.display = "block";
    }


}

formEle.addEventListener('submit', (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
})

showMoreButtonEle.addEventListener("click", () =>{
    searchImages()
})