import { renderOrderSumarry } from "../../scripts/checkout/orderSummary.js";
import {loadFromStorage} from '../../data/cart.js';

describe('Test suite: renderOrderSummary', () =>{
    it('displays the cart', () => {
        
        document.querySelector('.js-test-container').innerHTML = '<div class="order-summary js-order-summary"</div>'
        
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                id: 'dd82ca78-a18b-4e2a-9250-31e67412f98d',
                quantity: 1,
                deliveryOption: '1'
            }]);
            
        });
        loadFromStorage();
       
        renderOrderSumarry();

        expect(
        document.querySelectorAll('.js-item-container').length
        ).toEqual(1);

        expect(document.querySelector('.js-product-quantity-dd82ca78-a18b-4e2a-9250-31e67412f98d').innerText).toContain('Quantity: 1');
    
         document.querySelector('.js-test-container').innerHTML = ' ';
    });

});