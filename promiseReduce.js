promiseReduce = function() {
    var Promise0 = arguments[0][0];
    var Promise1 = arguments[0][1];
    var Promise2 = arguments[0][2];
    var reduceFun = arguments[1];
    var reduceInitValue = arguments[2];
    if (typeof(reduceInitValue) != 'undefined') {
        Promise.all([Promise0, Promise1, Promise2])
            .then((values) => (console.log(values.reduce(reduceFun, reduceInitValue))))
            .catch(() => (console.log('error')));
    } else {
        Promise.all([Promise0, Promise1, Promise2])
            .then((values) => (console.log(values.reduce(reduceFun))))
            .catch(() => (console.log('error')));
    }
}
