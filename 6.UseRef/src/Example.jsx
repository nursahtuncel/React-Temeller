
import React from 'react'
import { useRef } from 'react'

const Example = () => {
    const inputRef =useRef(null)

    const handleInputClick=()=>{
        inputRef.current.focus();
        inputRef.current.style.backgroundColor="red";
    }
    const handleClear =()=>{
        inputRef.current.value="";
        inputRef.current.style.backgroundColor="transparent"
    }

  return (
    <div>
        <input ref={inputRef}  type="text" placeholder='Adınız' />
      
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur cupiditate, labore beatae modi nisi doloribus delectus cumque inventore numquam vitae reiciendis velit dignissimos dolor expedita quibusdam quia corrupti facere repellendus.
        Voluptatem sunt saepe dicta natus aut provident maxime corporis aliquid a molestiae cupiditate voluptas pariatur beatae ad, omnis quam fuga adipisci sit dolorem minus non aliquam ducimus excepturi! Eos, non.
        </p>
         <button onClick={handleInputClick}>Odaklan</button>
         <button onClick={handleClear}>Temizle</button>
    </div>
  )
}

export default Example

