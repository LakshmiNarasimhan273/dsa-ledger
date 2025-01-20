const basket = ['banana', 'jackfruit','apple', 'pineapple', 'orange', 'jackfruit', 'mango'];

function findFruit(arr){
    let t0 = performance.now();
    for(let i = 0; i < arr.length; i++){
        console.log("Function running");        
        if(arr[i] === 'pineapple'){
            console.log("Found apple in our basket");
            break;  // Rule 1 WORST CASE - Modify our program to ensure this function 
            // terminates as soon as the requirement is met.
        }
    }
    let t1 = performance.now();
    console.log(`Call to find pineapple took - ${t0-t1} milliseconds`);   
}

findFruit(basket);