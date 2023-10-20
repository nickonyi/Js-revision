const userLeft = false;
const userWatchingCatMeme = true;
///
///function watchTutorialCallBack(callBack, errorCallBack) {
///    if (userLeft) {
///        errorCallBack({
///            name: 'user Left',
///            message: ':('
///        })
///    } else if (userWatchingCatMeme) {
///        errorCallBack({
///            name: 'User is watching cat memes',
///            message: 'I am < cat memes'
///        })
///    } else {
///        callBack('Thumbs up and subscribe!');
///    }
///}
///
///watchTutorialCallBack((message) => {
///    console.log('Success!! ' + message);
///}, (error) => {
///    console.log(error.name + ' ' + error.message);
///})

function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: 'user Left',
                message: ':('
            })
        } else if (userWatchingCatMeme) {
            reject({
                name: 'User is watching cat memes',
                message: 'I am < cat memes'
            })
        } else {
            resolve('Thumbs up and subscribe!');
        }
    });

}

watchTutorialPromise().then(((message) => {
    console.log('Success!! ' + message);
})).catch((error) => {
    console.log(error.name + ' ' + error.message);
})