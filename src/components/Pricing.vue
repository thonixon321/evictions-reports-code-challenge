<script setup>
import { cartStore } from "../stores/cartStore";
//import a store that can update/get data for the cart from 
//any Vue component
const store = cartStore();

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
    <section class="pricing" id="pricing">
			<div class="sitewrapper">
				<h2>Fast Accurate Tenant Screening - No Sign-Up Required</h2>
				<p>Quick, reliable and secure, rTenant™ allows landlords and property owners to run eviction checks on prospective renters easily online and make educated leasing decisions within a matter of minutes. Reports are generated and sent directly to you.
				</p>
				<ul class="pricelist">
					<li>
						<div class="price-head">
							<h4>Enhanced Landlord<sup>TM</sup><br>
								Rental Eviction History</h4>
							<h3><sup>$</sup>20<sup>95</sup></h3>
							<a href="#" class="viewSample">View Sample</a>
						</div>
						<ul class="checklist">
							<li>Evictions, Liens, Civil Filings & Judgments</li>
							<li>Search 35+ Million Eviction Records</li>
							<li>Nationwide: Federal, State and County Courts</li>
							<li>No Sign Up Necessary</li>
							<li>Instant Online Reports</li>
							<li>Results within Seconds</li>						
						</ul>
						<div class="price-foot">
 							<div class="btn"><button v-if="store.cart.indexOf('Enhanced Landlord Rental Eviction History') === -1" 
                            @click="addToCart('Enhanced Landlord Rental Eviction History')"
                            class="buybtn">Add to cart</button>
                            <button @click="removeFromCart('Enhanced Landlord Rental Eviction History')" v-else class="buybtn">Remove from Cart</button>
                            </div>
						</div>
					</li>
					<li class="purple">
						<div class="price-head">
							<div class="star"><img src="../images/star.png" /></div>
							<h6>Package Discount</h6>
							<h4>Criminal & Eviction Report </h4>
							
							<h3><sup>$</sup>24<sup>95</sup></h3>
							<h3 class="oldprice">$41.90</h3>
						</div>
						<ul class="checklist">
							<li>Felony, Misdemeanor, Sex Offender</li>
							<li>Search 175+ Million Criminal Records and  35+ Million Eviction Records </li>
							<li>Nationwide: Federal, State and County Courts</li>
							<li>No Sign Up Necessary</li>
							<li>Instant Online Reports</li>
							<li>Results within Seconds</li>						</ul>
						<div class="price-foot">
							<div class="btn">
                                <button v-if="store.cart.indexOf('Criminal & Eviction Report') === -1" 
                            @click="addToCart('Criminal & Eviction Report')"
                            class="buybtn">Add to cart</button>
                            <button @click="removeFromCart('Criminal & Eviction Report')" v-else class="buybtn">Remove from Cart</button>
                            </div>
						</div>
					</li>
					<li>
						<div class="price-head">
							<h4>Multicrim<sup>TM</sup> Criminal <br>Background Check</h4>
							<h3><sup>$</sup>20<sup>95</sup></h3>
							<a href="#" class="viewSample">View Sample</a>
						</div>
						<ul class="checklist">
							<li>Felony, Misdemeanor, Sex Offender</li>
							<li>Search 175+ Million Criminal Records</li>
							<li>Nationwide: Federal, State and County Courts</li>
							<li>No Sign Up Necessary</li>
							<li>Instant Online Reports</li>
							<li>Results within Seconds</li>
						</ul>
						<div class="price-foot">
 							<div class="btn"><button v-if="store.cart.indexOf('Multicrim Background Check') === -1" 
                            @click="addToCart('Multicrim Background Check')"
                            class="buybtn">Add to cart</button>
                            <button @click="removeFromCart('Multicrim Background Check')" v-else class="buybtn">Remove from Cart</button>
                            </div>
						</div>
					</li>
				</ul>
				 
			</div>
		</section>
</template>
<style scoped>
    button.buybtn {
        background: transparent;
        cursor: pointer;
    }
</style>