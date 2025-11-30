import { renderOrderSumarry } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
//import '../data/cart-class.js';
//import '../data/backend-practice.js';
import {loadProducts} from '../data/products.js';



async function initializeCheckout() {
 await new Promise((resolve) => {
    loadProducts(() => {
        resolve();
    });
});
    renderOrderSumarry();
    renderPaymentSummary(); 
}
initializeCheckout();
/*Promise.all([
    new Promise((resolve) => {
    loadProducts(() => {
        resolve();
    })}),
    //another promisse
]).then(() => {
    renderOrderSumarry();
    renderPaymentSummary();
});*/