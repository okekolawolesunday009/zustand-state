import React from 'react'

const Input = ({label, name, type, id, size, handleOnChange}) => {

 return (
    <div className='input-grip'>
        <label>{label}</label>
        <input
             type={type} 
             name={name} 
             id={id} 
             size={size} 
             onChange={handleOnChange}
             required
        />
    </div>
  )
}

export default Input