const img = document.querySelector('img');

const getCats = async() => {
    const response = await fetch("https://api.giphy.com/v1/gifs/translate?api_key=kwHmUl2CEJmAceCfk9krMC9Yhbgn5rdZ&s=cats",{mode:'cors'});
    const catData = await response.json();
    img.src = catData.data.images.original.url;
}

getCats();