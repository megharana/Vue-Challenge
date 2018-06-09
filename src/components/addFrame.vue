<template>
  <div>
    <ul>
      <li v-for="provider in providers" v-model="name"><a href="" >{{provider.name}}</a></li>
    </ul>
    <p>Name:{{name}}</p>
  </div>
</template>
<script>

export default {

  data () {
    return {
      name:"",
      providers:[{name:'Airtel', lowestprice:'600',rating:'5',maxspeed:'1000mbps',desc:'baat krne se hi baat bnti hai',contact:9086784563,url:'https://www.airtel.in/'},{name:'Reliance DSL', lowestprice:'600',rating:'5',maxspeed:'1000mbps',desc:'baat krne se hi baat bnti hai',contact:9086784563,url:'https://www.airtel.in/'},{name:'Hathway', lowestprice:'600',rating:'5',maxspeed:'1000mbps',desc:'baat krne se hi baat bnti hai',contact:9086784563,url:'https://www.airtel.in/'},{name:'Tikona', lowestprice:'600',rating:'5',maxspeed:'1024mbps',desc:'Suar network',contact:9086675463,url:'https://www.tikona.in/'}]

    }
  },
  methods:{

    }
  }

</script>

<style >

</style>
