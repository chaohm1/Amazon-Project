import { renderOrderSumarry } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
//import '../data/cart-class.js';
//import '../data/backend-practice.js';
import {loadProducts}'../data/products.js';

loadProducts(
    ()=>{
       renderOrderSumarry();
       renderPaymentSummary(); 
    }
);
renderOrderSumarry();
renderPaymentSummary();