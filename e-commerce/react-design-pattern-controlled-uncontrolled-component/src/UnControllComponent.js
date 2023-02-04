import React from 'react'

function UnControllComponent() {

    const name = React.useRef();
    const age = React.useRef();
    const hairColor = React.useRef();

    const handleClick = (e) =>{
      console.log(name.current.value);
      console.log(age.current.value);

      console.log(hairColor.current.value);
      e.preventDefault();


    }

  return (
    <form onSubmit={handleClick}>
        <input type="text" placeholder="Name" ref={name}></input>
        <input type="number"  placeholder="age"  ref={age}></input>

        <input type="text" placeholder="Hair Color"  ref={hairColor}></input>
        <input type="submit"></input>
    </form>
  )
}

export default UnControllComponent