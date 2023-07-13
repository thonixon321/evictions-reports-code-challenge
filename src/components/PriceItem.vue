<script setup>
import { cartStore } from "../stores/cartStore";
//import a store that can update/get data for the cart from 
//any Vue component
const store = cartStore();
const props = defineProps({
    id: String,
    title: String,
    price: String,
    checklist: Array,
    featured: Boolean
});

// allow someone to add/remove from cart. When someone clicks add to cart, it should update the header nav section to show (if not present) a shopping cart and number indicating number of items added
function addToCart(item) {
    store.cart.push(item);   
}

function removeFromCart(item) {
    const index = store.cart.indexOf(item);
    store.cart.splice(index, 1);
}
</script>
<template>
    <li :class="{purple: props.featured ? true : false}">
        <div class="price-head">
            <div v-if="props.featured">
                <div class="star"><img src="../images/star.png" /></div>
                <h6>Package Discount</h6>
            </div>
            <h4 v-html="props.title"></h4>
            <h3 v-html="props.price"></h3>
            <h3 v-if="props.oldprice" class="oldprice">{{ props.oldprice }}</h3>
            <a v-else href="#" class="viewSample">View Sample</a>
        </div>
        <ul class="checklist">
            <li v-for="(item, index) in checklist" :key="index">
                {{ item }}
            </li>					
        </ul>
        <div class="price-foot">
            <div class="btn"><button v-if="store.cart.indexOf(props.id) === -1" 
            @click="addToCart(props.id)"
            class="buybtn">Add to cart</button>
            <button @click="removeFromCart(props.id)" v-else class="buybtn">Remove from Cart</button>
            </div>
        </div>
    </li>
</template>
<style scoped>
    button.buybtn {
        background: transparent;
        cursor: pointer;
    }
</style>