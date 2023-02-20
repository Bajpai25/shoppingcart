const ProductArray=[
    {
        id: 1,
        title:"Dragon-ball Z",
        price:50
    },
    {
        id:2,
        title:"Attack on Titan",
        price:20
    },
    {
        id:3,
        title:"Jujutsu Kaisen",
        price:30
    },
]
function getProductData(id){
    let productdata= ProductArray.find(product=> product.id===id)
    if(productdata===undefined){
        return undefined
    }
    return productdata
}
export {getProductData,ProductArray}
//how to make a increment functionality in javascript?


