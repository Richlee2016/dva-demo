import React from 'react';
import { connect } from 'dva';
import Add from '../components/count/add'
import Minus from '../components/count/minus'
import Box from '../components/count/box'
function Count(props) {
  return (
    <div>
      {
        props.count.box.map((o,i) => {
          return (
            <div key={'count' + i}>
              <Add type='-' click={() => { props.dispatch({type: 'count/minus',index:i }); }} />
              <Box box={ props.count.box[i]} />
              <Add type='+' click={() => { props.dispatch({type: 'count/add',index:i}); }} />
            </div>
          )
        })
      }
     </div> 
  );
}

Count.propTypes = {
};

//暂放
export default connect(({ count }) => ({
  count
}))(Count);
