<template>
  <div>
    <add-header></add-header>
    <div class="mainDiv">
      <div class="divi">
        <add-list></add-list>
      </div>
      <div class="divi">
        <add-details></add-details>
      </div>
    </div>
  </div>
</template>
  <script>
import header from './components/header.vue';
import ISPList from './components/ISPList.vue';
import ISPdetails from './components/ISPdetails.vue';

export default {
  components:{
    'add-header':header,
    'add-list':ISPList,
    'add-details':ISPdetails
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
.divi{
  border: 1px solid black;
}
.mainDiv{
  display: grid;
  grid-template-columns: 50% 50%;
}
</style>
