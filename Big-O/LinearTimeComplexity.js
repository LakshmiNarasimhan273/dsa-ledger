// **__  LINEAR TIME CALCULATION __**
const product = ['watch'];
const products = ['mobile', 'tank', 'earbuds', 'iphone', 'laptop', 'bag', 'shoe'];
const addProducts = new Array(100).fill('watch');

function timeComplexity(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 'watch'){
            console.log('Found watch');
        }
    }
}

// O(n) is a common notation used to describe the time complexity of a problem. 
// It indicates that as the number of input elements increases, 
// the number of operations required also increases linearly. 
// For this problem below is the notation value for these 3 arrays

timeComplexity(product);  // -- Big O for this runtime is O(1)      |
// timeComplexity(products)  -- Big O for this runtime is O(7)      |  }-  Linear Time
// timeComplexity(addProducts) -- Big O for this runtime is O(100)  |

// ** ADDITIONAL NOTES **

// This function takes files as input and processes them using a loop
//  that runs based on the number of file elements.

// const compressFiles = files => {
//     files.forEach(file => console.log(file)
//     );
// }
// For this the Big O will be ** O(n) **  -- Linear Time