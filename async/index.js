const prom = new Promise((resolve,reject)=>{
  let a = 1+11;

  if(a == 2){
    resolve('success');
  } else {
    reject('failed');
  }
});

prom.then(function(message){
    console.log('This is the then '+ message);
}).catch((message)=>{
    console.log('THis is the catch ' + message);
})