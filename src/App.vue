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
    <Hero></Hero>
    <EvictionRecords></EvictionRecords>
    <CriminalRecords></CriminalRecords>
    <Pricing></Pricing>
    <ClientLogo></ClientLogo>
    <Form></Form>
    <Footer></Footer>
  </div>
</template>
