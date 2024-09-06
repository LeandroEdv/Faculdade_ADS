const shopingCar = [];

function addItemToCart(item){
    shopingCar.push(item);
}
function removeItemFromCart(item){
    const index = shopingCar.indexOf(item);
    if (index !== -1){
        shopingCar.splice(index,1)
    }
}
function viewCart(){
    if (shopingCar.length == 0){
        console.log("Your shopping cart is empty");
    }else{
        console.log("Itens in your shopping cart:")
        for(let i = 0; i < shopingCar.length; i++){
            console.log(`${i +1} - ${shopingCar[i]}`)
        }
    }
}
function clearCart(){
    shopingCar.length = 0;
    console.log("Your shopping cart has been cleared");
}

