import React from 'react'

const Receiver = (props) => {

    const {money} = props;

    if(money>5000){
        throw new Error("limit Exceded")
    }
  return (
    <div>transaction of rs {money}</div>
  )
}

export default Receiver