// REAL TIME EXAMPLE FOR BIG-O COMPLEXITY CALCULATION

const productData = async () => {
    try{
        const apiResponse = await fetch('https://fakestoreapi.com/products');
        const apiData = await apiResponse.json();

        apiData.forEach((data) => {
            console.log(data.title);
        })

    }catch(err){
        console.error(err);
    }
}

productData();