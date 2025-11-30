export let cart;

loadFromStorage();


export function loadFromStorage(){
  cart = JSON.parse(localStorage.getItem('cart')) || [];
}
function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productid){
      let matchingItem;
      cart.forEach((cartItem) => {
      if (cartItem.productId === productid)
      {
        matchingItem = cartItem;
      }
    });
    if (matchingItem)
    {
      matchingItem.quantity++;
    }else {
      cart.push({
      productId: productid,
      quantity: 1,
      deliveryOption: '1'
    });
  }
  saveToStorage();
  }

export function removeFromCart(productid){
  const newCart = [];

  cart.forEach((cartItem) =>
  {
    if (cartItem.productId !== productid ){
      newCart.push(cartItem);}
  });
  cart = newCart;
  saveToStorage();
  return cart;
}
export function updateDeliveryOption(productid, deliveryOptionId){
  let matchingItem;
  cart.forEach((cartItem) => {
      if (cartItem.productId === productid)
      {
        matchingItem = cartItem;
      }
    });

    matchingItem.deliveryOption = deliveryOptionId;

    saveToStorage();
}