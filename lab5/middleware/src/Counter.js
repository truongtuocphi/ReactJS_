import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement, reset } from './action'

function Counter({ count, dispatch }) {
  return (
    <div>
        <h1>{ count }</h1>
        <button onClick={() => dispatch(decrement())} style={{padding: '5px 20px'}}>-</button>
        <button onClick={() => dispatch(increment())} style={{padding: '5px 20px'}}>+</button>
        <button onClick={() => dispatch(reset())} style={{padding: '5px 20px'}}>Reset</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  count: state.count
})

export default connect(mapStateToProps)(Counter);