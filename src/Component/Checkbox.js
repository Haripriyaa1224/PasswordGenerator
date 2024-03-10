import React from 'react'

export const Checkbox = (props) => {

    const { value, onChange} = props;
  return (
    <>
    <div>
    {/* <label htmlFor={id}>{labelText}</label> */}
    <input type="checkbox" checked={value} onChange={onChange}/>
    </div>
    </>
  )
}
