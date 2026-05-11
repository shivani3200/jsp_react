import React, { memo } from 'react'

const BtnComp = (props) => {
    const {children,fun} = props
    console.log(children)

  return (
    <div>
        <button onClick={fun}>{children}</button>
    </div>
  )
}

export default memo(BtnComp);