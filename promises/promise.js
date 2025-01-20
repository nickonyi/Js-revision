const p = new Promise((resolve, reject) => {
  const a = 1 + 1;

  if (a == 3) {
    resolve('Successfully resolved');
  } else {
    reject('You have been rejected!');
  }
});

p.then((message) => {
  console.log(message);
}).catch((message) => {
  console.log(message);
});

const userLeft = true;
const userWatchingCatMeme = true;

const watchTutorialCallBack = (callback, errorCallback) => {
  if (userLeft) {
    errorCallback({ name: 'userleft', message: ':(' });
  } else if (userWatchingCatMeme) {
    errorCallback({
      name: 'user watching cat meme',
      message: 'Web dev simplified < cat',
    });
  } else {
    callback('Thumbs up and subscribe');
  }
};

//watchTutorialCallBack(
//  (message) => {
//    console.log('Success' + message);
//  },
//  (error) => {
//    console.log(error.name + ' ' + error.message);
//  }
//);

const watchTutorialCallBackPromise = () => {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({ name: 'userleft', message: ':(' });
    } else if (userWatchingCatMeme) {
      reject({
        name: 'user watching cat meme',
        message: 'Web dev simplified < cat',
      });
    } else {
      resolve('Thumbs up and subscribe');
    }
  });
};

watchTutorialCallBackPromise()
  .then((message) => {
    console.log('Uwe wangu' + message);
  })
  .catch((error) => {
    console.log(error.message);
  });
console.log('call');
