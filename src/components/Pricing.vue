<script setup>
import { ref } from 'vue';
import { cartStore } from "../stores/cartStore";
import PriceItem from "./PriceItem.vue";
//import a store that can update/get data for the cart from 
//any Vue component
const store = cartStore();
const priceData = ref([
	{
		id: 'Enhanced Landlord Rental Eviction History',
		title: `Enhanced Landlord<sup>TM</sup><br>
                Rental Eviction History`,
		price: `<sup>$</sup>20<sup>95</sup>`,
		checklist: [
			'Evictions, Liens, Civil Filings & Judgments',
			'Search 35+ Million Eviction Records',
			'Nationwide: Federal, State and County Courts',
			'No Sign Up Necessary',
			'Instant Online Reports',
			'Results within Seconds'
		],
		featured: false,
		oldPrice: null,
	},
	{
		id: 'Criminal & Eviction Report',
		title: `Criminal & Eviction Report`,
		price: `<sup>$</sup>24<sup>95</sup>`,
		checklist: [
			'Felony, Misdemeanor, Sex Offender',
			'Search 175+ Million Criminal Records and  35+ Million Eviction Records',
			'Nationwide: Federal, State and County Courts',
			'No Sign Up Necessary',
			'Instant Online Reports',
			'Results within Seconds'
		],
		featured: true,
		oldPrice: 41.90,
	},
	{
		id: 'Multicrim Background Check',
		title: `Multicrim<sup>TM</sup> Criminal <br>Background Check`,
		price: `<sup>$</sup>20<sup>95</sup>`,
		checklist: [
			'Felony, Misdemeanor, Sex Offender',
			'Search 175+ Million Criminal Records and  35+ Million Eviction Records',
			'Nationwide: Federal, State and County Courts',
			'No Sign Up Necessary',
			'Instant Online Reports',
			'Results within Seconds'
		],
		featured: false,
		oldPrice: null,
	},
]);

</script>
<template>
    <section class="pricing" id="pricing">
			<div class="sitewrapper">
				<h2>Fast Accurate Tenant Screening - No Sign-Up Required</h2>
				<p>Quick, reliable and secure, rTenant™ allows landlords and property owners to run eviction checks on prospective renters easily online and make educated leasing decisions within a matter of minutes. Reports are generated and sent directly to you.
				</p>
				<ul class="pricelist">
					<PriceItem v-for="(item, index) in priceData" :featured="item.featured" :id="item.id" :title="item.title" :price="item.price" :checklist="item.checklist" :key="index"></PriceItem>
				</ul>
				 
			</div>
		</section>
</template>
