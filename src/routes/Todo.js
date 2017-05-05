import React from 'react';
import { connect } from 'dva';
import css from './IndexPage.css';
// import AddTodo from '../components/todo/AddTodo'
function TodoList(props) {
  console.log(props);
  let input;
  //添加
  let addTodo = function(){
    return props.dispatch({
              type: 'todolist/add',
              input: input.value
            })
  }
  //是否可见
  let visible = function(id){
      return function(){
        return props.dispatch({
                  type: 'todolist/visible',
                  id: id
              });
      };
  }
  //显示
  let isShow = function(index){
    return function(){
      return props.dispatch({
        type:'todolist/isShow',
        index:index
      })
    }
  }
  //list组件
  let list = props.todolist.showlist.map((o) => {
              return <li onClick={visible(o.id)} style={{color:o.visibel? "red" : "blue"}} key={o.id}>{o.text}</li>
            });
  //下方可见选择组件
  let show = props.todolist.show.map((o,i) =>
              <span onClick={isShow(i)} className={css.active} key={o}>{o}</span>
            );       
            
  return (
    <section>
      <div>
        <input ref={ node => { input = node } } type="text"/>
        <button onClick={addTodo}>add</button>
      </div>
      <ul>{list}</ul>
      <div>{show}</div>
    </section>
  );
}

TodoList.propTypes = {
};

export default connect(({ todolist }) => ({
  todolist,
}))(TodoList);
