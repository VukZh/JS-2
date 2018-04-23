function PromiseReduce() {

  var i = 0;
  var arrayResolve = [];
  var flag = 1;
  var reduceFun = arguments[1];
  var reduceInitValue = arguments[2];
  var res;


  while (i < arguments[0].length) {
    arguments[0][i].then((val) => arrayResolve.push(val)).catch(() => {
      flag = 0
    });
    i++;
  }

  setTimeout(() => {
    if (typeof(reduceInitValue) != 'undefined') {
      res = arrayResolve.reduce(reduceFun, reduceInitValue);
    } else {
      res = arrayResolve.reduce(reduceFun);
    }; //console.log ('res',res); console.log ('flag ',flag);
  }, 0)

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (flag === 1) resolve(res);
      else reject("eRRoR");
    }, 0)
  });
}

// var p1 = Promise.resolve(13);
// var p2 = Promise.resolve(2);
// var p3 = Promise.resolve(9);
// var p4 = Promise.resolve(1);
// var p5 = Promise.resolve(3);
// PromiseReduce([p1,p2,p3,p4],(a,b)=>(a*b)).then ((r)=>(console.log(r)))
// PromiseReduce([p1,p2,p3,p5],(a,b)=>(a*b)).then ((r)=>(console.log(r)))
