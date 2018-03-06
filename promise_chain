//var p1 = Promise.resolve(13);
//var p2 = Promise.resolve(2);
//var p3 = Promise.resolve(9);

result = p1.then((values) => {
    res = [];
    res.push(values);
    return p2;
}).then((values) => {
    res.push(values);
    return p3;
}).then((values) => {
    res.push(values);
    return console.log(res.reduce((a, b) => (a + b), 0));
}).catch(console.log("error"))