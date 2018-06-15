<template>
  <div>
    <add-header></add-header>
    <divisions></divisions>
  </div>
</template>
  <script>
import header from './components/header.vue';
import divisions from './components/divisions.vue';


export default {
  components:{
    'add-header':header,
    'divisions':divisions
  },
  data () {
    return {

    }
  },
  methods:{

    }
  }

</script>

<style >
body{
  margin: 0;
  font-family: 'Nunito SemiBold';
}

</style>
