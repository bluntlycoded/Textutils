import React,{useState} from 'react'
import 'typeface-poppins';

export default function Textform(props) {
    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value)
    }
    const styles = {
        fontFamily: 'Poppins, sans-serif',
        
        
      };
    const handleUpClick = ()=>{
        console.log("On Click");
        let newText = text.toUpperCase();
        setText(newText);
        alert("Converted to Uppercase");
    }
    const handleLoClick = ()=>{
        console.log("On Click");
        let newText = text.toLowerCase();
        setText(newText);
        alert("Converted to Lowercase");
    }
    const handleReset=()=>{
        let newText="";
        setText(newText);
        alert("Resetted");
    }
    const handleCopy=()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        alert("Copied to Clipboard");
    }
    const handleremSpace=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        alert("Extra Spaces Removed");
    }
   
    const [text, setText] = useState('Enter text here');
    let CharCount=text.length;
    let readingTime = 0.008 * text.split(" ").length;
    let WordCount=text.split(" ").length;
  return (
    <div>
<div class="mb-3">
<h1 style={styles} class="text-5xl text-gray-900 dark:text-black gp">Welcome To TextUtils</h1>
<br />

  <textarea className="form-control boxer" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
  <br />
  <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 padding" onClick={handleUpClick}>Convert to Uppercase</button>
  <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 padding" onClick={handleLoClick}>Convert to Lowercase</button>
  <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 padding"onClick={handleReset}>Clear Text</button>
  <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 padding" onClick={handleCopy}>Copy To Clipboard</button>
  <button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 padding"onClick={handleremSpace}>Remove Extra Spaces</button>
<br />
<br />
<h1 style={styles} class="text-5xl text-gray-900 dark:text-black gp">Summary of Your Usage in this sessions</h1>
<div className='mnc'>
<label htmlFor="wordcount" class="text-2xl text-gray-900 dark:text-black">No.of Words:{WordCount}</label>
<br />
<label htmlFor="Charcount" class="text-2xl text-gray-900 dark:text-black">No.of Char:{CharCount}</label>
<br />
<label htmlFor="wordcount" class="text-2xl text-gray-900 dark:text-black">Reading Time:{readingTime} Seconds</label>
</div>
<h1 style={styles} class="text-5xl text-gray-900 dark:text-black gp">Summary of the document</h1>
<br />
<textarea className="form-control boxer" id="myBox" rows="8" value={text}></textarea>
  
</div>	
<hr />	
<h3>Copyright</h3>
    </div>
  )
}
