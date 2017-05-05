import React from 'react'
import { connect } from 'dva'
import css from '../IndexPage.css';

function Loading(props){
    return (
        <section className={css.index}>
            <img src={props.loading.bdImg} />
        </section>
    )
};


export default connect(({ loading }) => ({
    loading,
}))(Loading);

