<template>
  <div>
      <table>
        <tr>
          <th>编号</th>
          <th>标题</th>
          <th>创建时间</th>
          <th>权重</th>
          <th>操作</th> 
        </tr>
        <tr v-for="(items,index) in list">
          <td>{{index+1}}</td>
          <td>{{items.title}}</td>
          <td>{{items.date}}</td>
          <td>{{items.weight}}</td>
          <td>
              <span @click="change(items)">修改</span>
              <span @click="del(items.title)">删除</span>
          </td>
        </tr>
      </table>
      <div class="change-content" v-show="show">
        <div class="bg"></div>
        <div class="change">
            <div class="title">
                <span>文章标题：</span>
                <input type="text" :value="itemlist.title" @input="e=>(changetitle=e.target.value)">
            </div>
            <div class="weight">
                <span>文章权重：</span>
                <input type="text" :value="itemlist.weight" @input="e=>changeweight=e.target.value">
            </div>      
            <div class="content">
                <textarea :value="itemlist.content" @input="e=>changecontent=e.target.value"></textarea >
            </div>
            <div class="choose">
                <button class="yes" @click="save">保存</button>
                <button class="no" @click="cancel">取消</button>
            </div>
        </div>
      
      </div>
  </div>
</template>
<script>
import {mapState,mapMutations} from "vuex"
export default {
  data(){
    return {
      show:false,
      itemlist:{},
      changetitle:"",
      changeweight:"",
      changecontent:""
    }
  },
  computed:{
    ...mapState({
      list:state=>state.pagelist,
      isflag:state=>state.isflag
    })
  },
  methods:{
    change(item){
      this.itemlist=item;
      this.show=true;
      this.changetitle=item.title;
      this.changeweight=item.weight;
      this.changecontent=item.content;
    },
    del(date){
      this.todel(date);
    },
    save(){ 
        this.itemlist.title=this.changetitle;
        this.itemlist.weight=this.changeweight;
        this.itemlist.content=this.changecontent; 
        this.changel(this.itemlist); 
        if(this.isflag){
        this.show=false;
        }else{
          alert("标题重复！")
        }     
    },
    cancel(){
      this.show=false;
    },
    ...mapMutations({
      changel:"changelist",
      todel:"dellist"
    })
  }
}
</script>
<style>
  th,td{
    flex: 1;
    border: 1px solid #ccc;
    text-align: center;
  }
  td span{
    padding: 2px;
  }
  tr{
    display: flex;
    width: 100%;
  }
  table{
    width:100%;
     border: 1px solid #888;
  }
  .change{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border:2px solid #ccc;
    padding: 10px 40px 20px 30px;
    background: #fff;
    border-radius: 8px;
  }
  .change input,textarea{
    border: 1px solid #888;
  }
  .bg{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #ccc;
    opacity: 0.7;
  }
</style>
