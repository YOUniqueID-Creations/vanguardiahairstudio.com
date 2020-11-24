<template>
  <b-container fluid id="app">
    <b-row>
      <b-col>
        <navbar/>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <router-view/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Navbar from '@/components/elements/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
body { width: 100%;}
</style>
