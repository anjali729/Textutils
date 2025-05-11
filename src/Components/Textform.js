
import React, { useState } from "react";
import propTypes from 'prop-types';
// import Alert from './Components/Alert';

export default function Textform(props) {
    const HandleUpClick = () => {
        //console.log("Uppercase was clicked")
        let newtext = text.toUpperCase()
        setText(newtext)
        props.showAlert("Text has been converted to uppercase","success")
        // setText("This is new text")
    }
    const HandlelwClick = () => {
        //console.log("Uppercase was clicked")
        let newtext = text.toLowerCase()
        setText(newtext)
        props.showAlert("Text has been converted to Lowercase","success")
        // setText("This is new text")
    }
    const Handlecleartext = () => {
        let newtext = ""
        setText(newtext)
        props.showAlert("Text has been Cleared","success")
    }
    const handleupchange = (event) => {
        //console.log("changed")                            //will run everytime whenever any change occur in textarea
        setText(event.target.value)                         //set the text as default value of text + new value of text
    }
    const [text, setText] = useState("Enter the text")            //setting state of text
    // text="this is new text"      //incorrect way to update text
    // setText("This is new text")//correct way to update text value
        
    const[mystyle,setStyle]=useState({
        color:'black',
        backgroundColor:'white'
    })
    const [btntext,setbtntext]=useState("Enable dark mode")
    const Handlemodeclick =()=>{
        if(mystyle.backgroundColor==='white'){
            setStyle({
                color:'white',
                backgroundColor:'black'
            })
            setbtntext("Enable light mode")
            props.showAlert("Dark mode has been Enabled","success")
        }
        else{
            setStyle({
                color:'black',
                backgroundColor:'white'
            })
            setbtntext("Enable dark mode")
            props.showAlert("Light mode has been Enabled","success")
        }
    }
    const handleCopyText=()=>{
        let copytext = document.getElementById("mybox")
        copytext.select();
        navigator.clipboard.writeText(copytext.value)
        props.showAlert("Text Copied","Success")
    }
    const handleExtraSpaces =()=>{
        let newtext=text.split(/[ ]+/)
        setText(newtext.join(" "))
        props.showAlert("Extra spaces has been removed","success")
    }

    return (
        <>
            <div className="container">
                <div className="mb-3">
                    <h1 style={{color:props.mode==='dark'? 'white':'black'}}>{props.heading}</h1>
                    <textarea className="form-control" style={mystyle} value={text} onChange={handleupchange} id="mybox" rows="8"></textarea>
                </div>
                <div>
                    <button className="btn btn-primary mx-2" onClick={HandleUpClick}>Convert to uppercase</button>   {/* mx-2 give space at x-axis */}
                    <button className="btn btn-primary mx-2" onClick={HandlelwClick}>Convert to lowercase</button>
                    <button className="btn btn-primary mx-2" onClick={Handlecleartext}>Clear Text</button>
                    <button className="btn btn-primary mx-2" onClick={Handlemodeclick}>{btntext}</button>
                    <button className="btn btn-primary mx-2" onClick={handleCopyText}>Copy Text</button>
                    <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                </div>
            </div>
            <div className="container my-2" style={{color:props.mode==='light'? 'black':'white'}}>
                <h2>Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008*text.split(" ").length} minutes to read</p>
            </div>
        </>
    )
}
