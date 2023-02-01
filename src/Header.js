import React from 'react'

const Header = (name) => {
    console.log(name);
  return (
    <div className='container' style={{backgroundColor:'blue'}}>
        <p>Header</p>
        <button onClick={()=>{name.data("hi")}}>click</button>
    </div>
  )
}

export default Header