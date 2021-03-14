<template>
  <b-container fluid id="app">
    <header>
      <b-row align-h="center" no-gutters>
        <b-col cols="12" md="10">
          <navbar/>
        </b-col>
      </b-row>
    </header>
    <main>
      <b-row no-gutters>
        <b-col>
          <router-view/>
        </b-col>
      </b-row>
    </main>
    <footy/>
  </b-container>
</template>

<script>
import Navbar from '@/components/elements/Navbar'
import Footy from '@/components/elements/Footer'

export default {
  name: 'App',
  components: {
    Navbar,
    Footy
  }
}
</script>

<style>
body {
  width: 100% !important;
  min-width: 100%;
}
html {
  width: 100%;
  min-width: 100%;
}
</style>
