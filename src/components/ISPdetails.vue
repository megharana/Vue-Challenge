<template>
    <div class="mainDiv">
      <div>
        <img style="height:30%;width:40%;padding:70px 80px 70px 70px;" src="/image/shapes.png"/>
      </div>
      <div class="detailPanel" >
        <div style="background-color:grey;border-radius:10px;padding:10px 10px 20px 10px;text-align:center"  >
          <h3>{{provider.name}}</h3>
        </div style="line-height:0.1;">
        <p><img class="logos" src="/image/wifi.png"/>{{provider.maxspeed}}</p>
        <p><img class="logos" src="/image/contact.jpg"/>{{provider.contact}}</p>
        <p><img class="logos" src="/image/email.png"/>{{provider.url}}</p>
        <p><img class="logos" src="/image/money.png"/>{{provider.lowestprice}}</p>
      </div>


      <div class="rating">
        <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
      </div>
    </div>
</template>
<script>
import {bus} from '../main';
export default {
  data () {
    return {
      provider: {
        name:"",
        lowestprice:"",
        rating:"",
        maxspeed:"",
        contact:"",
        desc:"",
        url:""
      }
    }
  },
  methods:{
  },
  created(){
    bus.$on('showDetails', (data) => {
      this.provider.name=data.name;

      this.provider.lowestprice=data.lowestprice;
      this.provider.rating=data.rating;
      this.provider.maxspeed=data.maxspeed;
      this.provider.contact=data.contact;
      this.provider.desc=data.desc;
      this.provider.url=data.url;


    });
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
  grid-template-columns: 45% 55%;

}

.detailPanel{
  margin-bottom:50px;
  border:1px solid black;
  border-radius: 10px;
  margin-top:45px;
  margin-left:200px;
  margin-right:20px;


  font-size: 20px;

}

p{

  padding-left:25px;
  padding-right:25px;
  padding-bottom:5px;
  padding-top:5px;

}
.logos{
  height:40px;
  width:40px;
}
.rating > span:hover:before {
   content: "\2605";
   position: absolute;
}
.rating {
  unicode-bidi: bidi-override;
  direction: rtl;
}
.rating > span:hover:before,
.rating > span:hover ~ span:before {
   content: "\2605";
   position: absolute;
}
.rating {
  unicode-bidi: bidi-override;
  direction: rtl;
}
.rating > span {
  display: inline-block;
  position: relative;
  width: 1.1em;
}
.rating > span:hover:before,
.rating > span:hover ~ span:before {
   content: "\2605";
   position: absolute;
}
</style>
