import React from 'react'

const Image2 = (props) => {
    let{name,imgUrl, hobby} = props.detail
  return (
    <>
    <div className="card">
        <div className="card-header">
            <img src={imgUrl} alt="" className='image-fluid'/>
        </div>
        <div className="card-body">
            <h2>Name:{name}</h2>
            <h3>Hobby:{hobby}</h3>
        </div>
    </div>
    </>
  )
}

export default Image2