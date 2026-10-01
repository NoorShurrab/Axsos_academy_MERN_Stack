function findLargeAndSmall(arr){
    let large = arr[0];
    let small = arr[0];

    function compare(){
        for(let i = 0; i < arr.length; i++){
            if(arr[i] > large){
                large = arr[i];
            }
            if(arr[i] < small){
                small = arr[i]
            }
        }
        return[large, small]
    }
    return compare;
}
console.log(findLargeAndSmall([1, 2, 3, 4])());