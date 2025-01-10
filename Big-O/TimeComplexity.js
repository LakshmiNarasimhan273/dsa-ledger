const basket = ['banana', 'jackfruit','apple', 'pineapple'];

function findFruit(arr){
    let t0 = performance.now();
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 'apple'){
            console.log("Found apple in our basket");
        }
    }
    let t1 = performance.now();
    console.log(`Call to find apple took - ${t0-t1} milliseconds`);
    
}

findFruit(basket);