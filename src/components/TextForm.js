import React, { useState, useRef } from "react";


export default function TextForm(props) {

  const handleuppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.alertShow("Text Changed to UpperCase Letters" , "success");
    // console.log('Button is clicked');
  };
  const handlelowercase  = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.alertShow("Text Changed to LowerCase Letters" , "success");
    // console.log('Button is clicked');
  };
  const handletoclear  = () => {
    
    inputRef.current.value = ' ';
    // setText(newText);
    // console.log('Button is clicked');
  };
  const handleonchange = (event) => {
    setText(event.target.value);
    
    // console.log('on changed');
  };
  const inputRef = useRef("");
  const [text, setText] = useState('');
  //for words count
  // const countWords = (text)=> {
  //   text = text.trim();

  //   // Use a regular expression to split the text by word boundaries
  //   const words = text.match(/\b\w+\b/g);

  //   // Return the count of words
  //   return words ? words.length : 0;
  //}
  return (
    <>
        <div className="container my-5" style={{color: props.mode === 'dark' ? 'white' : 'black' }}>
          <div className="alignn"><h1>{props.heading} </h1> </div>
      <textarea className="form-control"  rows="7" value={text} onChange={handleonchange} ref={inputRef} style={{backgroundColor: props.mode === 'dark'?'grey':'white' , color:props.mode === 'dark'?'white':'black'}}></textarea>
      <button className="btn btn-primary my-3" onClick={handleuppercase} style={{backgroundColor : props.mode === 'dark' ? 'white' : '#0C6EFD', color : props.mode === 'dark' ? 'Black' : 'white' }}> Convert in UpperCase</button>
      <button className="btn btn-primary my-3 mx-3" onClick={handlelowercase} style={{backgroundColor : props.mode === 'dark' ? 'white' : '#0C6EFD', color : props.mode === 'dark' ? 'Black' : 'white'}}> Convert in LowerCase</button>
      <button className="btn btn-primary my-3 mx-3" onClick={handletoclear} style={{backgroundColor : props.mode === 'dark' ? 'white' : '#0C6EFD', color : props.mode === 'dark' ? 'Black' : 'white'}}> Clear </button>
    </div>

    <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black' }}>
<h1> Your Text Summary</h1>
<p>{text.split("\/s+/").filter((element)=>{return element.length!==0}).length} Words and {text.trim().length} characters</p>           
<p>This line Takes {0.008 * text.split("\/s+/").length } Minutes To Read</p>        
<h1>Your Text</h1>
<p>{text.length >0?text:"Please Enter Something Above the Textarea"}</p>                                                                  
    </div>
    </>
  );
}
