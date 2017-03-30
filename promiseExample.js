function addPromise(a,b) {
  return new Promise( function (resolve, reject) {
    if (typeof(a) === 'number' && typeof(b) === 'number') {
      resolve (a+b);
    } else {
      reject ('at least one parameter ist not a number');
    }
  })
}

addPromise(1,'clö').then(
  function (sum) {
    console.log('resolve:' + sum);
  },
  function (err) {
    console.log('reject:' + err);
  }
)
