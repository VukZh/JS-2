async function PromiseReduce() {

  var arrayResolve = [];
  var flag = 1;
  var reduceFun = arguments[1];
  var reduceInitValue = arguments[2];
  var res = 0;
  var i = 0;

  var TempArray = async function(x) {
    while (i < x.length) {
      await x[i].then((val) => {
        arrayResolve.push(val);
        console.log('-', val);
      }).catch(() => {
        flag = 0;
      });
      i++;
    }
  }

  await TempArray(arguments[0]);

  if (flag === 0)
    throw new Error('Oops');

  if (typeof(reduceInitValue) != 'undefined') {
    res = arrayResolve.reduce(reduceFun, reduceInitValue);
  } else {
    res = arrayResolve.reduce(reduceFun);
  };

  return (res);

}

// var p1 = Promise.resolve(13);
// var p2 = Promise.resolve(2);
// var p3 = Promise.resolve(9);
// var p4 = Promise.resolve(1);
// var p5 = Promise.reject(3);
// var p6 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(100);
//   }, 5000);
// });
// PromiseReduce([p1,p2,p3,p4],(a,b)=>(a*b)).then ((r)=>(console.log(r)))
// PromiseReduce([p1,p2,p3,p5],(a,b)=>(a*b)).then ((r)=>(console.log(r)))
// PromiseReduce([p1,p2,p3,p6],(a,b)=>(a*b)).then ((r)=>(console.log(r)))
