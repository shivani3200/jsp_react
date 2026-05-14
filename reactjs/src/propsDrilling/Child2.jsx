import React from 'react'

const Child2 = ({nameList}) => {
  return (
    <div>
        
        {
            nameList.map((name,index)=>{
                return(
                    <li key = {index}>{name}</li>
                )
            })
        }
    </div>
  )
}

export default Child2