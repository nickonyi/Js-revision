//const img = document.querySelector('img');
//const btn =document.querySelector('button');
//
//fetch("https://api.giphy.com/v1/gifs/translate?api_key=kwHmUl2CEJmAceCfk9krMC9Yhbgn5rdZ&s=soccer",{mode:'cors'})
//.then((response) =>{
//    return response.json();
//})
//.then((response)=>{
//    img.src = response.data.images.original.url;
//})
//
//btn.addEventListener('click',()=>{
//    fetch("https://api.giphy.com/v1/gifs/translate?api_key=kwHmUl2CEJmAceCfk9krMC9Yhbgn5rdZ&s=cats",{mode:'cors'})
//.then((response) =>{
//    return response.json();
//})
//.then((response)=>{
//    img.src = response.data.images.original.url;
//})
//})


function highAndLow(numbers){
  // ...
  //take the number and split it into an array
  const numberArr = numbers.split(" ");
  //find the highest number
const max = Math.max(...numberArr);
  //find the lowest number
  const min = Math.min(...numberArr);
  //return the highest and lowest numbers
  return max +" "+ min;
}