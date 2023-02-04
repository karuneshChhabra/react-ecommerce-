import React, { useState } from 'react'

function ControlledComponent() {
    const [name,setName] = useState('');
    const [age,setAge] = useState('');

    const [hairColor,setHairColor] = useState('');

    const handleClick = (e) =>{
        console.log(name);
        console.log(age);
  
        console.log(hairColor);
        e.preventDefault();
  
  
    }

  return (
    <form >
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)}></input>
        <input type="text"  placeholder="Age"  value={age} onChange={e => {
            console.log(e.target.value);
            if(e.target.value){
               setAge(Number(e.target.value))
            }else{
                setAge(''); 
            }
        }}></input>

        <input type="text" placeholder="Hair Color"  value={hairColor} onChange={e =>setHairColor(e.target.value)}></input>
        <button onClick={handleClick}>submit</button>
    </form>
  )
}

export default ControlledComponent