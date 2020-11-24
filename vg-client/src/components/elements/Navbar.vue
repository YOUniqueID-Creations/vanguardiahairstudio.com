<template>
    <b-navbar
        toggeable="md"
        type="dark"
        variant="info"
    >
    <b-navbar-brand :to="{name:'Home'}">Home</b-navbar-brand>
        <b-navbar-nav>
            <b-nav-item>Be In The Know</b-nav-item>
            <b-nav-item>Services</b-nav-item>
            <b-nav-item>Stylist</b-nav-item>
            <b-nav-item>Products</b-nav-item>
            <b-nav-item>About Us</b-nav-item>
            <b-nav-item>Contact Us</b-nav-item>
        </b-navbar-nav>
    </b-navbar>
</template>

<script>
export default {
    name: 'Navbar'
};
</script>
