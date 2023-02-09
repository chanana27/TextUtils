import React, {useState} from 'react'

export default function Textform(props) {
    const[text, setText] = useState('');
    // setText("new text");
    const convertUpCase = ()=>{
      // console.log("button was clicked");
      const newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to UpperCase!", "Success");
    }

    const convertLoCase = ()=>{
      // console.log("button was clicked");
      const newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to LowerCase!", "Success");
    }

    const handleOnChange = (event)=>{
      // console.log(event.target.value);
      setText(event.target.value);
    }

  return (
    <>
    <div className='container' style= {{color: props.mode === 'dark'?'white':'#1d2c60'}}>
        <h1>{props.heading}</h1>
        <div className = "mb-3">
        <textarea className = "form-control" value = {text} onChange={handleOnChange} style= {{backgroundColor: props.mode === 'dark'?'gray':'white', color: props.mode === 'dark'?'white':'black'}} id="myBox" row="7" ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick= {convertUpCase}>Convert to UpCase</button>
        <button className="btn btn-primary" onClick= {convertLoCase}>Convert to LoCase</button>
    </div>
    <div className="container my-3" style= {{color: props.mode === 'dark'?'white':'#1d2c60'}}>
        <h3>Your Text Summary</h3>
        <p> <b>word count</b>
         {text.split(' ').length}
         <b>character count </b>{text.length} </p>
        <p>{0.0033* text.split(' ').length} minute reads</p>
        <p>{text.length > 0 ? text: "Enter something in the text box to preview it here"}</p>
        {/* <p>{text}</p> */}
    </div>
    </>
  )
}
