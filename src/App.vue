<script setup>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue';
import EvictionRecords from './components/EvictionRecords.vue';
import CriminalRecords from './components/CriminalRecords.vue';
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
    <EvictionRecords></EvictionRecords>
    <CriminalRecords></CriminalRecords>
    <Pricing></Pricing>
    <ClientLogo></ClientLogo>
    <Form></Form>
    <Footer></Footer>
  </div>
</template>
