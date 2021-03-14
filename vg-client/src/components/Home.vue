<template>
  <div class="content">
    <div class="clearfix">
      <div class="hero">
        <b-jumbotron fluid>
          <div class="hero-overlay"></div>
          <div class="hero-content">
            <div>
              <h1>Vanguardia Hair Studio</h1>
              <hr class="my-4">
              <p>All are welcome</p>
            </div>
          </div>
        </b-jumbotron>
      </div>

        <b-row align-h="center" class="home" no-gutters>
          <b-col cols="11" md="10">
            <p>Vanguardia Hair Studio is a fully staffed professional beauty salon conveniently located in Long Beach's Belmont Heights suburb. Our creative, independent stylists offer a wide range of services, from hair cutting, coloring, styling, and relaxing, to make-up, brow artistry, and hair care products. Visit us <strong>Tuesday through Saturday</strong>, or call any of our highly experienced independent stylists to schedule an appointment.</p>
          </b-col>
        </b-row>
        <b-row no-gutters>
          <b-col>
            <img src="@/assets/images/content/home/salon_image.png" alt="" class="bw_bottom">
          </b-col>
        </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  },
  metaInfo () {
    return {
      title: "Vanguardia Hair Studio | Welcome"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.clearfix {padding-top: 3rem;}
.jumbotron {
  background-image: url("https://image.shutterstock.com/image-photo/ombre-bob-short-hairstyle-beautiful-600w-1038880924.jpg");
  position: relative;
  background-size: cover;
  height: 100vh;
  min-height: 550px;
  max-height: 860px;
  color: rgb(255,255,255);
  background-repeat: no-repeat;
  background-position: 50% center;

  margin-top: -3rem;
  padding-top: 3rem;
}
.jumbotron .container {
  height: 100%;
}
.hero-overlay {
  background-color: #262626;
  opacity: .5;
  transition: background .3s, opacity .3s;

  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
  position: absolute;
}
.hero-content {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.hero-content h1 {font-size: 4rem;}
.hero-content p {font-size: 1.4rem;}
.home {
  margin-top: 6rem;
  margin-bottom: 6rem;
  font-size: 2rem;
  line-height: 2;
}
.bw_bottom {
  width: 100%;
  max-height: 700px;
  object-fit: cover;
}
</style>
