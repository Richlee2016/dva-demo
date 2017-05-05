import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Count from './routes/Count';
import Todo from './routes/Todo';
import Loading from './routes/home/Loading'
function RouterConfig({ history }) {
    return ( 
        <Router history = { history } >
        <Route path = "/good" component = { IndexPage } /> 
        <Route path = "/" component = { Count } /> 
        <Route path = "/todo" component = { Todo } />
        <Route path = "/loading" component = { Loading } />  
        </Router>
    );
}

export default RouterConfig;