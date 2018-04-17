import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let state={
    pagelist:[],
    flag:true,
    isflag:true
}
let mutations={
    addPage(state,page){
        let obj={
            ...page,
            date:(new Date()).toLocaleString()
        }
        if((state.pagelist.filter(item=>item.title==obj.title)).length==0){
            state.pagelist.push(obj)
            state.pagelist.sort((a,b)=>b.weight-a.weight)
            state.flag=true;
        }else{
            alert("文章名字重复，重新添加")
            state.flag=false
        }
        
    },
    changelist(state,obj){
        if(state.pagelist.filter(item=>item.title==obj.title).length<=1){
            var act=state.pagelist.filter((item)=>item.title==obj.title)[0];
            act.title=obj.title;
            act.weight=obj.weight;
            act.content=obj.content;
            act.date=obj.date
            state.pagelist.sort((a,b)=>b.weight-a.weight)
            state.isflag=true;
        }else{
            state.isflag=false;
        }    
    },
   
    dellist(state,title){
        state.pagelist=state.pagelist.filter((item)=>item.title!=title)
    }
}
export default new Vuex.Store({
   state,
   mutations 
})