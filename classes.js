console.log("Classes");

class Polygon{
    constructor(sides){        
        this.sides = sides
    }
    perimeter() {
        return this.sides.reduce(function add(a,b){return a+b;})
    } 
}

// function Polygon(sides){
//     this.n = sides.reduce(sum)
//     //console.log("n ", this.n);
//     this.len = sides.length
//     //console.log("len ", this.len);
    

// }

// function sum (t, c){
//     return t + c
// }

// Polygon.prototype.perimeter = function () {
//     return this.n
//     //console.log("Sum ", sum)
//     // return per
// }


let triangle = new Polygon([3,4,5]);
console.log(triangle.perimeter());