<script setup>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue';
import Content from './components/Content.vue';
import Pricing from './components/Pricing.vue';
import ClientLogo from './components/ClientLogo.vue';
import Form from './components/Form.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="site-fluid">
    <Header></Header>
    <Hero>
      <template v-slot:heroLeft>
        <h1>Tenant <br> Eviction History</h1>
        <h4>Get direct matches for your applicants 
            instantly using our national eviction 
            history records. </h4>
        <p>Search over <strong>35 million</strong>  records compiled from <strong>50 states</strong>. See the information you need that is usually not found on credit reports</p>
      </template>
      <template v-slot:heroRight>
        <div class="heroimg"><img src="./images/map.jpg" title=""> </div>
      </template>
    </Hero>
    <Content>
      <template v-slot:left>
        <img src="./images/records.jpg" alt="" width="" height="">
						<img src="./images/eviction-sample-report-2023.png"  class="mBox" >
      </template>
      <template v-slot:right>
        <h2>Eviction Records</h2>
						<p>rTenant's Enhanced Landlord Search better equips Landlords in determining true applicant evictions. Our matching algorithm utilizes the individual's social security number, address, and previous address information to identify 'Matches' vs. 'Possible Matches,' while searching over <strong> 35 million</strong> records. The report then summarizes the report findings, in an easy to read downloadable and printable format. 						</p>
						<h5>You’ll have access to:</h5>
						<ul class="access-listing two-col">
							<li>Federal, State & County Records </li>
							<li>Civil Filings</li>
							<li>Evictions</li>
							<li>Judgements</li>
							<li>Liens</li>
							<li>And More</li>
						</ul>
						<div class="btn"><a href="https://www.rtenant.com/eviction-lp/#pricing" class="button">Buy Instant Reports</a></div>
      </template>
    </Content>
    <Content>
      <template v-slot:left>
        <h2>Criminal Records</h2>
						<p>In addition to evictions we also provide access to over <br><strong> 175+</strong> Million Criminal Records Nationwide.</p>
						<h5>You’ll have access to:</h5>
						<ul class="access-listing">
							<li>Federal, State & County Records </li>
							<li>Felonies</li>
							<li>Misdemeanors</li>
							<li>Sex Offenders</li>
 							<li>And More</li>
						</ul>
						<div class="btn"><a href="https://www.rtenant.com/eviction-lp/#pricing" class="button">Buy Instant Reports</a></div>
      </template>
      <template v-slot:right>
        <img src="./images/criminal-records.jpg" alt="" width="" height="">
				<img src="./images/criminal-sample-report-2023.png"  class="mBox" >
      </template>
    </Content>
    <Pricing></Pricing>
    <ClientLogo></ClientLogo>
    <Form></Form>
    <Footer></Footer>
  </div>
</template>
