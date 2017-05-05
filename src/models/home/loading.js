import key from 'keymaster'
const delay = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

let addNum = 0;
//过滤
let listFilter = function(toshow,list){
   if(toshow === 0){
      return list;
    }else if( toshow === 1 ){
      return list.filter( o => {
        return o.visibel
      });
    }else if( toshow === 2 ){
      return list.filter( o => {
        return !o.visibel
      });
    };
}

export default {
  namespace: 'loading',
  state:{
    list:[],
    showlist:[],
    toshow: 0,
    show:['all','active','enactive'],
    yes:321,
    bdImg:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1493957501848&di=22c2d082f7c4271a203ff4e2382ad38c&imgtype=0&src=http%3A%2F%2Fwww.kele8.com%2Fuploadfile%2F2014%2F0530%2F20140530054800608.jpg'
  },
  //数据源可以是当前的时间、服务器的 websocket 连接、keyboard 输入、geolocation 变化、history 路由变化等等。 (自定义事件)
  effect: {
  },
  //分发行为
  reducers: {
    //添加
    add(state,{input}) { 
      let todo = {
        text:input,
        id:addNum++,
        visibel:true
      }
      state.list.push(todo);
      state.showlist = listFilter(state.toshow,state.list);
      return {
        ...state,
        list:state.list,
        showlist:state.showlist
      }; 
    },
    //是否选取
    visible(state,{id}) {
      let list = state.list.forEach( o => {
        if(o.id === id){
            o.visibel = !o.visibel;
        };
      })
      state.showlist = listFilter(state.toshow,state.list);
      return {
        ...state,
        list:state.list,
        showlist:state.showlist
      }
    },
    //显示
    isShow(state,{index}){
      state.toshow = index;
      state.showlist = listFilter(state.toshow,state.list);
      return {
        ...state,
        toshow:state.toshow,
        showlist:state.showlist
      }
    },
  }
};
