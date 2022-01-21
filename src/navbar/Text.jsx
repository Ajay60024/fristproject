import React, { useState } from 'react'

function Text(props) {
  const [text, setText] = useState("Enter text here")
 const handleUpChange=()=>{
    let newText = text.toUpperCase();
    setText(newText)
  }

  // uppercase over 

  const handleLoChange=()=>{
    let newText = text.toLowerCase();
    setText(newText)
  }

  // lowercase over 
  const hadleOnChange=(event)=>{
    setText(event.target.value)
  }

  // oncahnge over 

  const handleBlank=()=>{
    setText('')
  }
  return (
    <div className='main' style={{backgroundColor:'#ccc'}}>
    <div className='container'>
      <h2>Text App</h2>
      <div className="mb-3">
        <textarea className="form-control " id="exampleFormControlTextarea1" rows="7" value={text} onChange={hadleOnChange}></textarea>
      </div>
      <button onClick={handleUpChange} className='btn btn-primary mx-3'>UpperCase </button>
      <button onClick={handleLoChange} className='btn btn-primary mx-3'>LowerCase </button>
      <button onClick={handleBlank} className='btn btn-primary mx-3'> Delete</button>
      <h2>Character</h2>
      <h4>{text.length}</h4>
      <h2 className='my-3'>Preview</h2>
      <p className='my-3'>{text}</p>
    </div>
    </div>
  )
}

export default Text
