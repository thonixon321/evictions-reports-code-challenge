<script setup>
</script>
<template>
    <section class="hero">
        <div class="sitewrapper">
            <div class="flLeft hero-left">
                <slot name="heroLeft"></slot>
            </div>
            <div class="flRight hero-right">
                <slot name="heroRight"></slot>
            </div>
        </div>
    </section>
</template>