function Cart(localStorageKey){
const cart ={
    cartItems: undefined,
    loadFromStorage(){
       this.cartItems = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    },
    saveToStorage(){
  localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
},
addToCart(productid){
      let matchingItem;
      this.cartItems.forEach((cartItem) => {
      if (cartItem.id === productid)
      {
        matchingItem = cartItem;
      }
    });
    if (matchingItem)
    {
      matchingItem.quantity++;
    }else {
      this.cartItems.push({
      id: productid,
      quantity: 1,
      deliveryOption: '1'
    });
  }
  this.saveToStorage();
  },
  removeFromCart(productId){
  const newCart = [];

  this.cartItems.forEach((cartItem) =>
  {
    if (cartItem.id !== productId ){
      newCart.push(cartItem);}
  });
  this.cartItems = newCart;
  this.saveToStorage();
  return this.cartItems;
},
updateDeliveryOption(productId, deliveryOptionId){
  let matchingItem;
  this.cartItems.forEach((cartItem) => {
      if (cartItem.id === productId)
      {
        matchingItem = cartItem;
      }
    });

    matchingItem.deliveryOption = deliveryOptionId;

    this.saveToStorage();
 }
};
}

const cart = Cart('cart-oop');