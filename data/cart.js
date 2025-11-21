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
      if (cartItem.id === productid)
      {
        matchingItem = cartItem;
      }
    });
    if (matchingItem)
    {
      matchingItem.quantity++;
    }else {
      cart.push({
      id: productid,
      quantity: 1,
      deliveryOption: '1'
    });
  }
  saveToStorage();
  }

export function removeFromCart(productId){
  const newCart = [];

  cart.forEach((cartItem) =>
  {
    if (cartItem.id !== productId ){
      newCart.push(cartItem);}
  });
  cart = newCart;
  saveToStorage();
  return cart;
}
export function updateDeliveryOption(productId, deliveryOptionId){
  let matchingItem;
  cart.forEach((cartItem) => {
      if (cartItem.id === productId)
      {
        matchingItem = cartItem;
      }
    });

    matchingItem.deliveryOption = deliveryOptionId;

    saveToStorage();
}