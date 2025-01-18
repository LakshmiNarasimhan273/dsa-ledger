// REAL TIME EXAMPLE FOR BIG-O COMPLEXITY CALCULATION

const productData = async () => {
    try{
        const apiResponse = await fetch('https://fakestoreapi.com/products'); // Fetching time - O(1) CONSTANT TIME
        const apiData = await apiResponse.json(); // Parsing time - O(1) CONSTANT TIME

        apiData.forEach((data) => { // Looping time - O(n) LINEAR TIME
            console.log(data.title); // Console time - O(1) CONSTANT TIME
        })

    }catch(err){
        console.error(err); // Console time - O(1) CONSTANT TIME
    }
}

productData(); // Callback time - O(1) CONSTANT TIME

// Totally we have constant time complexity of O(1) + O(1) + O(1) + O(1) + O(1) = O(5) that means 5 constant operations
// And we have only one Linear time complexity of O(n) that calculates the running time a forEach loop
// By nature Big O ignores the constant time for the final calculation so that the O(5) constant time will be
// ignored, so that the final time complexity for this problem is * O(n)