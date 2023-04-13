import React from 'react'

const Fields = ({task, timing, index}) => {
  return (
    <div className="data_val">
          <h4>{task}</h4>
          <h4>{timing}</h4>
          <h4>Remove</h4>
    </div>
  )
}

export default Fields
