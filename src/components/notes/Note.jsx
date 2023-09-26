import react,{useRef,useState,useContext} from "react";
import './note.m.css'
import { BiSolidTrash,BiSolidCopy,BiSolidPaintRoll } from "react-icons/bi";
import { GrPaint } from "react-icons/gr";
import { TiTick } from "react-icons/ti";

import {listContext} from '../App'


function Note(props){

const noteref = useRef();
const contentref = useRef();
const [hover,sethover] = useState(false);
const [copymsg,setcopy] = useState(false);

// document.querySelector('.note').style.width = `${useContext(listContext)}%`;


//------------Delete Note Func. -------------------------------
function deleted(){
	props.onDelete(props.index);
}
//-------------------------------------------------------------


//---------------Clipboard Copy Func. --------------------------
function copy() {
  navigator.clipboard.writeText(contentref.current.innerText);
  setcopy(true);
  setTimeout(() => setcopy(false) ,3000)
}
//--------------------------------------------------------------

// console.log('image' , props.backgroundimage)

return (<div onMouseOut={()=> { noteref.current.style.boxShadow = ''; sethover(false) } } onMouseOver={()=> { noteref.current.style.boxShadow = 'rgba(0, 0, 0, 0.7) 0px 3px 8px'; sethover(true) }} 
	className={` note ${useContext(listContext)}`} 
	ref={noteref} 
	style={{backgroundColor: props.background,
					backgroundImage: `url(${props.backgroundimage})`,
					 }}
	>

 { (!props.title && !props.content && !props.img ) && <div className='emptynote'>Empty Note</div>}
{ props.img && <img src={props.img ? props.img : ''}  width='100%' height='100%' /> }
<h4>{props.title}</h4>
<p className='content' ref={contentref} >{props.content}</p>

<p className='note_btn' style={{visibility: hover ? 'visible' : 'hidden'}}>
<button onClick={ copy } title='Copy Note'><BiSolidCopy size={20}/></button>
<button onClick={deleted} title='Delete Note'><BiSolidTrash color='red' size={20}/></button>
</p>

<div className='copied' style={{bottom: copymsg ? '2%' : '-20%'}}>
	<span><TiTick color='#00ff00' size={20}/></span>Text Copied to the Clipboard</div>


</div> );

}

export default Note;