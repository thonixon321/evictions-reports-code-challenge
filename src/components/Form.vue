<script setup>
import { useForm } from 'vee-validate';
import * as yup from 'yup';
//can customize all validation here with vee-validate and yup,
//which can include regex and other custom rules
const { errors, handleSubmit, defineInputBinds } = useForm({
  validationSchema: yup.object({
    name: yup.string().min(4).required(),
    email: yup.string().email().required(),
  }),
});

const email = defineInputBinds('email');
const name = defineInputBinds('name');

const onSubmit = handleSubmit(values => {
    console.log(values);
    //show values in alert, but in real scenario
    //send these to the backend
    alert(JSON.stringify(values, null, 2))
});
</script>
<template>
    <section class="form-section">
        <div class="forarea">
            <h2>Get Started Today</h2>
            <form @submit.prevent="onSubmit" name="frm_landlord">
                    <ul>
                        <li><span class="left">Your Name<em>*</em></span><span class="right"><input v-bind="name" type="text" name="indv_name" required="required" placeholder="Enter your full name" /></span><div>{{ errors.name }}</div></li>
								<li><span class="left">Your Email<em>*</em> </span><span class="right"><input 
                                    v-bind="email"
                                    type="email" name="c_email" required="required" placeholder="Enter your email address" /></span><div>{{ errors.email }}</div></li>
                                    
                    </ul>
                    <button type="submit" name="submit" class="button btn-lg pull-right nomargin">Sign Up — It's Free!</button>
                </form>
            <div class="input-inline tollfree">Toll Free : (888) 727-3368</div>
        </div>
    </section>
</template>
<style scoped>
.form-section {
    display: flex;
    justify-content: center;
    margin-top: 1em;
    margin-bottom: 1em;
}
</style>