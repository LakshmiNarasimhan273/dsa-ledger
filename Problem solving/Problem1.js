const arr1 = ['a', 'b', 'c', 'd'];
const arr2 = ['z', 'x', 'd'];

function containsCommonElements(arr1, arr2){
    let map = {};
    // loop through first array and create object 
    // where properties === items in the array
    for(let i = 0; i < arr1.length; i++){
        if(!map[arr1[i]]){
            const item = arr1[i];
            map[item] = true;
        }
    }
    // loop through second array and check if
    //  item in second array exists on created object
    for(let j = 0; j < arr2.length; j++){
        if(map[arr2[j]]){
            return true;
        }
    }
    return false;
}
// The final time complexity will be O(n+m)
console.log(containsCommonElements(arr1, arr2));
