var promiseReduce = function() {

    var Promise0 = arguments[0][0];
    var Promise1 = arguments[0][1];
    var Promise2 = arguments[0][2];
    var reduceFun = arguments[1];
    var reduceInitValue = arguments[2];
    var arrayResolve = [];
    var res;
    var flag;

    Promise0.then((value0) => {
        arrayResolve.push(value0);
        return Promise1
    }).then((value1) => {
        arrayResolve.push(value1);
        return Promise2
    }).then((value2) => {
        arrayResolve.push(value2);
        if (typeof(reduceInitValue) != 'undefined') {
            res = arrayResolve.reduce(reduceFun, reduceInitValue);
            flag = 1;
        } else {
            res = arrayResolve.reduce(reduceFun);
            flag = 1;
        };
    }).catch(() => {
        res = 'eRRoR';
        flag = 0;
    });

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (flag === 1) resolve(res);
            else reject(res);
        }, 1)
    });

};