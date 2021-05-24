console.log("arrowFunctions");

function modifyArray(nums) {
    return nums.map(n => n = (n%2==0) ? n*2: n*3);   
}

let a = [1,2,3,4,5]
console.log(modifyArray(a));
