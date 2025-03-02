function validateUsr(username) {
    const res = /^[a-z0-9_]{4,16}$/;
    return res.test(username);
  }

  function reverse(string){
    //your code here
    return string.split(" ").reverse().join(" ");
  }