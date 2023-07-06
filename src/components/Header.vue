<script setup>
import { cartStore } from "../stores/cartStore";
//import a store that can update/get data for the cart from 
//any Vue component
const store = cartStore();

</script>
<template>
    <header class="header">
        <div class="sitewrapper">
            <a href="https://www.rtenant.com/" class="logo"><img src="../images/logo.png" title="rTenant" /></a>
            <input class="menu-btn" type="checkbox" id="menu-btn" />
            <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
            <div class="topPhNumber">
                <span class="phNum">(888) 727-3368 </span>
                <div class="cart_container">
                    <a href="https://www.rtenant.com/cart.html" class="cartIcon">Cart</a>
                    <div class="cartItemsNumber" v-if="store.cart.length">{{ store.cart.length }}</div>
                </div>
                <a href="https://secure.rtenant.com/landlord/" target="_blank" class="topLogin">Login</a>
            </div>
            <ul class="menu">
                <li><a href="http://www.rtenant.com/credit-checks/">Credit Checks</a></li>
                <li><a href="http://www.rtenant.com/eviction-reports/">Eviction Reports</a></li>
                <li><a href="http://www.rtenant.com/criminal-background-checks/">Background Checks</a></li>
                <li><a href="https://www.rtenant/eviction-lp/#pricing">Pricing</a></li>
                <li><a href="https://www.rtenant.com/online-background-screening-faqs.html">FAQ</a></li>
                <li><a href="https://secure.rtenant.com/landlord/register/signup.html">Sign Up </a></li>
            </ul>
        </div>
    </header>
</template>
<style scoped>
    .cart_container {
        position: relative;
        display: inline;
    }
    .cartItemsNumber {
        position: absolute;
        top: -1.1em;
        right: 0.25em;
        padding: .3em;
        border-radius: 50%;
        background-color: rgb(46, 46, 46);
        color: white;
        font-size: .8em;
    }
</style>