
let outfit = {
    itemName: "Ukiyo-e Blue UT Graphic T-Shirt",
    brand: "UNIQLO",
    price: 29.99,
    isInStock: true,
    confirmOrderMessage: function(){
        console.log("Order placed for " + this.itemName + " by " + this.brand + " for -- $" + this.price + ".")
    }
};

outfit.confirmOrderMessage();


