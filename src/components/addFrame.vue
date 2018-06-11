<template>
  <div>
    <ul>
        <li v-for="provider in providers" v-model="name" ><button type="text" href="" class="btn">{{provider.name}}<span class="price">₹{{provider.lowestprice}}</span></button></li>
    </ul>

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
.btn {
  background: #3498db;
  background-image: -webkit-linear-gradient(top, #3498db, #2980b9);
  background-image: -moz-linear-gradient(top, #3498db, #2980b9);
  background-image: -ms-linear-gradient(top, #3498db, #2980b9);
  background-image: -o-linear-gradient(top, #3498db, #2980b9);
  background-image: linear-gradient(to bottom, #3498db, #2980b9);
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 28px;
  font-family: Arial;
  color: #ffffff;
  font-size: 20px;
  padding: 24px 40px 10px 40px;
  text-decoration: none;
  text-align:left;
  width:100%;
}

.btn:hover {
  background: #3cb0fd;
  background-image: -webkit-linear-gradient(top, #3cb0fd, #3498db);
  background-image: -moz-linear-gradient(top, #3cb0fd, #3498db);
  background-image: -ms-linear-gradient(top, #3cb0fd, #3498db);
  background-image: -o-linear-gradient(top, #3cb0fd, #3498db);
  background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
  text-decoration: none;
}
.price{
  float:right;
  text-align:right;
}
</style>
