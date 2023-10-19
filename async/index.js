const userLeft = true;
const userWatchingCatMeme = false;

function watchTutorialCallBack(callBack,errorCallBack){
    if(userLeft){
        errorCallBack({
            name:'user Left',
            message:':('
        }) 
    }else if (userWatchingCatMeme){
         errorCallBack({
            name:'User is watching cat memes',
            message:'I am < cat memes'
         })   
    } else {
        callBack
    }
}