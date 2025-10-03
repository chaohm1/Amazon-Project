export const cart = [];
export function addToCart(productid){
     let matchingItem;
    cart.forEach((cartItem) => {
      if (cartItem.productid === productid)
      {
        matchingItem = cartItem;
      }
    })  
    if (matchingItem)
    {
      matchingItem.quantity++;
    }else {
      cart.push({
      productid: productid,
      quantity: 1
    });
  }
  }