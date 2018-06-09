<template>
  <div>
    <ul>
      <li v-for="provider in providers">{{provider}}</li>
    </ul>

  </div>
</template>
<script>

export default {

  data () {
    return {
      providers:['BSNL','Airtel','Hathway','BBNL/BNET','ACT  broadband','YOU Broadband','Tikona Digital network','Ralltel','Reliance DSL']

    }
  },
  methods:{

    }
  }

</script>

<style >

</style>
