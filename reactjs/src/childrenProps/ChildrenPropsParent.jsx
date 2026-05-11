import React from 'react'
import Button from './Button'

const ChildrenPropsParent = () => {
  return (
    <div>
        <div className='text-3xl bg-pink-300 my-10'>hello</div>

        <Button color='red'>Add to cart</Button>
        <Button color='blue'>Buy now</Button>
        <Button >Wishlist</Button>
    </div>
  )
}

export default ChildrenPropsParent