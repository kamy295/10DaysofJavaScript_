console.log("Count Objects");

function countObj(objects) {
    // return objects.filter(function(o){return o.x==o.y}).length
    return objects.filter(item =>item.x===item.y).length;
}

let x = [1, 1]
console.log("Answer is ", countObj(x));
