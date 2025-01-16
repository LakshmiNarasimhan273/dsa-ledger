const arr = new Array(100).fill("Apple");

function calculateTimeComplexity(arr){
    let t0 = performance.now();

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === "Apple"){
            console.log(`${i} times found Apple`);
        }
    }

    let t1 = performance.now();
    console.log(`Performance report ${(t1-t0)}`);
    
}

calculateTimeComplexity(arr);