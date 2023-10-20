const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video one has been recorded!!');
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video two has been recorded!!');
})

const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video three has been recorded!!');
})

Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((messages) => {
    console.log(messages);
})