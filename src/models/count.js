import key from 'keymaster'
const delay = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
export default {
  namespace: 'count',
  state:{
    box:[1,2,3,4,5]
  },
  //异步 redux-saga
  effects:{
    *add({ index},{put,call}) {
      yield call(delay, 100);
      yield put({
        type: 'addWait',
        index:index
      });
    },
    *minus({ index }, {call, put}){
      yield call(delay, 100);
      yield put({
        type: 'minusWait',
        index:index
      });
    }
  },
  //数据源可以是当前的时间、服务器的 websocket 连接、keyboard 输入、geolocation 变化、history 路由变化等等。 (自定义事件)
  subscriptions: {
    setup({ dispatch}) {
      key('a', () => { dispatch({type:'add'}) });
    },
  },
  //分发行为
  reducers: {
    addWait(state,{index}) { 
      let res = Object.assign([],state.box).map((o,i) => {
        if(i === index) o+=1;
        return o;
      });
      return {...state,box:res}
    },
    minusWait(state,{index}) {
      let res = Object.assign([],state.box).map((o,i) => {
        if(i === index) o-=1;
        return o;
      });
      return {...state,box:res}
    } 
  }
};
