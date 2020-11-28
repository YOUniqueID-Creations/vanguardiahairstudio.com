<template>
    <footer>
        <b-row class="footer_top" align-h="center" no-gutters>
            <b-col md="2" class="footer_section">
                <h2>Thank You for Visiting Vanguardia</h2>
                <a href="#">Home</a><br>
                <a href="#">Be In The Know</a><br>
                <a href="#">Services</a><br>
                <a href="#">Products</a><br>
                <a href="#">About Us</a><br>
                <a href="#">Contact</a><br>
            </b-col>
            <b-col md="2" class="footer_section">
                <h2>Find Us</h2>
                4405 E 4th St <br>
                Long Beach, CA 90814<br><br>

                Send us an email: <a href="mailto:vanguardiahs@live.com">vanguardiahs@live.com</a>
            </b-col>
            <b-col md="2" class="footer_section">
                <h2>We're Social</h2>
                FACEBOOK WIDGET HERE<br>
                INSTAGRAM FEED<br>
                YELP

            </b-col>
            <b-col md="2" class="footer_section">
                <h2>Hours</h2>
                Tue-Fri: 10:00 AM to 7:00 PM<br>
                Sat: 9:00 AM to 3:00 PM<br>
                Sun: 11:00 AM to 3:00 PM<br>
                Mon: closed<br><br>

                Call us today at <a href="tel:+15624391400">(562) 439-1400</a>

            </b-col>
        </b-row>
        <b-row class="footer_bottom" no-gutters>
            <b-col>
                <div class="copyright">
                    2020 Vanguardia Hair Studio
                </div>
                <div class="social_icons">
                    F in [o]
                </div>
            </b-col>
        </b-row>
    </footer>
</template>

<script>
export default {
    name: 'Footy'
};
</script>

<style scoped>


.footer_top {
    font-size: 1.3rem;
    margin-top: 6rem;
    margin-bottom: 6rem;
}
.footer_section {
    padding-left: 3rem;
    padding-right: 3rem;
}
.footer_bottom {
    background-color: #f0eeea;
    font-size: 1.2rem;
    color: #7d7d7d
}
.copyright {
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 1rem;
}
.social_icons {
    text-align: center;
    margin-bottom: 2rem;
}
</style>
