<script setup>

function saLoadScript(src) { 
    var js = window.document.createElement('script'); 
    js.src = src; 
    js.type = 'text/javascript'; 
    document.getElementsByTagName("head")[0].appendChild(js); 
} 
if (typeof(shopper_first) == 'undefined') {
    saLoadScript('//www.shopperapproved.com/widgets/testimonial/3.0/26230.js'); 
    shopper_first = true; 
}
</script>
<template>
    <section class="client-logo">
        <div class="sitewrapper">
            <ul>
                <li><img src="../images/cl_01.png" /></li>
                <li><img src="../images/cl_02.png" /></li>
                <li><img src="../images/cl_03.png" /></li>
            </ul>
            <div style="min-height: 100px; " class="shopperapproved_widget sa_rotate sa_count3 sa_horizontal sa_count3 sa_bgWhite sa_colorBlack sa_borderGray sa_rounded sa_jMy sa_fixed sa_showlinks sa_large sa_showdate "></div><div style="text-align:right;"><a class="sa_footer" href="http://www.shopperapproved.com/reviews/rTenant.com/" target="_blank" rel="nofollow"><img class="sa_widget_footer" style="border: 0;" alt="" src=https://www.shopperapproved.com/widgets/widgetfooter-whitelogo.png></a></div>
        </div>
    </section>
</template>