 async function PromiseReduce() {

     var arrayResolve = [];
     //var flag = 1;
     var reduceFun = arguments[1];
     var reduceInitValue = arguments[2];
     var res;

     var TempArray = function(x) {
         x.forEach((r) => (r.then((res) => (arrayResolve.push(res))).catch(() => (flag = 0))))///<--
     }
     await TempArray(arguments[0]);

     //console.log("flag-",flag)
     //setTimeout (()=>(console.log("flag-",flag)),0)

     if (arrayResolve.length != arguments[0].length) throw new Error('Oops'); ////// <--

     if (typeof(reduceInitValue) != 'undefined') {
         res = arrayResolve.reduce(reduceFun, reduceInitValue);
     } else {
         res = arrayResolve.reduce(reduceFun);
     };

     return res;

 }

 // var p1 = Promise.resolve(13);
 // var p2 = Promise.resolve(2);
 // var p3 = Promise.resolve(9);
 // var p4 = Promise.resolve(1);
 // var p5 = Promise.resolve(3);
 // PromiseReduce([p1,p2,p3,p4],(a,b)=>(a*b)).then ((r)=>(console.log(r)))
 // PromiseReduce([p1,p2,p3,p5],(a,b)=>(a*b)).then ((r)=>(console.log(r)))