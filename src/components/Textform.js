import React, {useState} from 'react'

export default function Textform(props) {
    const [text, setText] = useState('');

    const handleUpClick = ()=>{
        console.log("Handle Upclick Called");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleDownClick = ()=>{
      console.log("Handle Downclick Called");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = ()=>{
      console.log("Handle Clearclick Called");
        let newText = '';
        setText(newText);
    }

    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }

    const handleCopyText = ()=>{
      console.log("Copy Text Clicked");
      var myText = document.getElementById("myBox");
      myText.select();
      navigator.clipboard.writeText(myText.value);
    }

    const handleExtraSpaces = ()=>{
      console.log("Handle Extra Spaces Clicked");
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
    }

  return (
    <>
    <div className='container' >
        <h2>Enter your text here</h2>
        <div className="mb-3" >
        <textarea className="form-control" id="myBox"  value={text} onChange={handleOnChange} rows="8"  style={{backgroundColor: props.mode.myMode==='dark'?'#565656':'white',color:props.mode.myMode==='dark'?'white':'black',border:'0 px'}}></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>Change to uppercase</button>
        <button className="btn btn-primary" onClick={handleDownClick}>Change to lowercase</button>
        <button className="btn btn-primary mx-3" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-3" onClick={handleCopyText}>Copy Text</button>
        <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>Handle Extra Spaces</button>
    </div>
    <div className="container my-3">
    <h3>Details</h3>
    <p>{text.trim()=== ''?'0':text.split(' ').length} words {text.length} characters</p>
    <p>{0.006 * text.split(' ').length} mins read</p>
    <h3 className='my-3'>Preview </h3>
    <p>{text}</p>
    </div>
    </>
    
  )
}
