const letters = ['a', 'b', 'c', 'd'];

function logofallpairs(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            console.log(`${arr[i]} : ${arr[j]}`);
        }
    }
}

logofallpairs(letters);

// Big o O(n^2) - Quadratic time
// An input increase the operation is also increased quadratically for this problem
// if the input is 3 the operation is 6