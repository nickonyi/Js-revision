const userLeft = false;
const userWatchingCatMeme = false;

function watchTutorialCallBack(callBack, errorCallBack) {
    if (userLeft) {
        errorCallBack({
            name: 'user Left',
            message: ':('
        })
    } else if (userWatchingCatMeme) {
        errorCallBack({
            name: 'User is watching cat memes',
            message: 'I am < cat memes'
        })
    } else {
        callBack('Thumbs up and subscribe!');
    }
}

watchTutorialCallBack((message) => {
    console.log('Success!! ' + message);
}, (error) => {
    console.log(error.name + ' ' + error.message);
})