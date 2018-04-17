<template>
    <div>
        <div class="title">
            <span>请输入标题：</span>
            <input type="text" v-model="inputtitle">
        </div>
        <div class="weight">
            <span>请输入权重：</span>
            <input type="text" v-model="inputweight">
        </div>      
        <div class="content">
            <textarea v-model="inputcontent"></textarea>
        </div>
        <div class="choose">
            <button class="yes" @click="ok">保存</button>
            <button class="no" @click="cancel">取消</button>
        </div>
    </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
export default {
  data(){
      return{
          inputtitle:"",
          inputweight:"",
          inputcontent:""
      }
  },
  computed:{
      ...mapState({
          flag:state=>state.flag
      })
  },
  methods:{
      ok(){
          var obj;
          if(this.inputtitle&&this.inputweight&&this.inputcontent){
              obj={
                  title:this.inputtitle,
                  weight:this.inputweight,
                  content:this.inputcontent
              }
          }else{
              obj={
                  title:"随机生成的题目"+parseInt(Math.random()*100),
                  weight:parseInt(Math.random()*100),
                  content:'xxxxxxxxxxxxxxxxx'
              }
          }
          this.add(obj)
          if(this.flag){
            this.clear();
          }
      },
      cancel(){
          this.clear();
      },
      clear(){
          this.inputcontent="";
          this.inputtitle="";
          this.inputweight="";
      },
       ...mapMutations({
          add: 'addPage'   
       })
       
  }
}
</script>
<style>
    .title,.weight,.content,.choose{
        text-align: center;
        margin-top: 20px;
        
    }
    .content{
        margin: 20px auto;
        width: 400px;
        height: 300px;
    }
    textarea{
        width: 100%;
        height: 100%;
        text-align:start;
        overflow-y: scroll;
    }
   
</style>

