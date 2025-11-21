import {addToCart, cart, loadFromStorage} from '../../data/cart.js';

describe('test suite: addToCart', () => {
    it('adds an exiting product to the cart', () =>{
        spyOn(localStorage, 'setItem');
        

        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                id: 'dd82ca78-a18b-4e2a-9250-31e67412f98d',
                quantity: 1,
                deliveryOption: '1'
      }]);
        });
        loadFromStorage();

        addToCart('dd82ca78-a18b-4e2a-9250-31e67412f98d');
        expect(cart.length).toEqual(1);
        expect(cart[0].quantity).toEqual(2);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1); 
        console.log(cart);
    });

    it('adds a new product to the cart', () =>{
        spyOn(localStorage, 'setItem');
        
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([]);
        });
        loadFromStorage();


        addToCart('dd82ca78-a18b-4e2a-9250-31e67412f98d');
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1); 
    });
});