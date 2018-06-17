<template>
    <div style="overflow:scroll;">
      <ul>
          <li v-for="provider in providers">
            <button type="text" class="btn" v-on:click="showDetails(provider)">
              <img src="/image/wifi_318-1573.jpg"/>
                {{provider.name}}
                <span class="price">
                  ₹{{provider.lowestprice}}
                    <img src="/image/images.jpg"/>
                </span>
            </button>
          </li>
      </ul>
    </div>
</template>
<script>
import {bus} from '../main';
export default {
  data (){
    return {

      providers:[{name:'Airtel', lowestprice:'600',rating:'5',maxspeed:'1000mbps',desc:'baat krne se hi baat bnti hai',contact:9086784563,url:'https://www.airtel.in/'},
      {name:'Reliance DSL', lowestprice:'600',rating:'5',maxspeed:'1000mbps',desc:'baat krne se hi baat bnti hai',contact:9086784563,url:'https://www.airtel.in/'},
      {name:'Hathway', lowestprice:'600',rating:'5',maxspeed:'1000mbps',desc:'baat krne se hi baat bnti hai',contact:9086784563,url:'https://www.airtel.in/'},
      {name:'Tikona', lowestprice:'600',rating:'5',maxspeed:'1024mbps',desc:'Suar network',contact:8958563711,url:'https://www.tikona.in/'}]
    }
  },
  methods:{
    showDetails:function(provider){
      bus.$emit('showDetails', provider)

    }
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
.divi{
  border: 1px solid black;
}
.mainDiv{
  display: grid;
  grid-template-columns: 50% 50%;
}
ul {
  list-style-type: none;
}
img{
  width: 70px;
  height: 70px;
}
.detailPanel{
  float:right;
  border:1px solid black;
  border-radius: 10px;
  margin-top:45px;
  margin-left:200px;
  margin-right:20px;
  font-size: 30px;
}
p{

  padding-left:25px;
  padding-right:25px;
  padding-bottom:5px;
  padding-top:5px;
}
</style>
