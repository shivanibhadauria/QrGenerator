import { useState } from 'react';
import QRCode from 'react-qr-code';
import './Qr.css'

export default function Qr(){
    const [currentQr, futureQr] = useState("");
    const [input, setInput] = useState("")

    function handleClickQr(){
        futureQr(input)
        setInput(" ");
    }


    return (
        <body>
        
        <div className="container">
        <h1>Qr Code Generator</h1>
        <input value={input} onChange={(e)=> setInput(e.target.value)}  type="text" placeholder="enter your name"/>
        <button disabled={input && input.trim()!== " "? false : true} onClick={handleClickQr} >click</button>
        <div> 
            
            <QRCode value={currentQr}/>  
            
            </div>
        
        </div>
        </body>
    )
}