console.log("Uncurried");
function add(arr, k){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i] + arr[j] === k){
                return true
            }
        }
    }
    return false;
}
console.log(add([1, 2, 3], 3));

console.log("Curried");
function findAdd(arr){
    return function number(k){
        for(let i = 0; i < arr.length; i++){
            for(let j = 1; j < arr.length; j++){
                if(arr[i] + arr[j] === k){
                return true
            }
            }
        }
        return false;
    }
}
console.log(findAdd([1, 2, 3])(3));