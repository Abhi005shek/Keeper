import React,{useEffect,useState,useRef,useContext,createContext} from 'react';
import {useNavigate} from 'react-router-dom'
import { create } from "simple-drawing-board";
import './canvas.css'
import { IoArrowUndoSharp,IoArrowRedoSharp } from 'react-icons/io5';
import { BiSolidPencil,BiSolidEraser } from "react-icons/bi";
import { ReactSketchCanvas } from 'react-sketch-canvas';


const Canvas = (props) => {

	
	const [download,setdownload] = useState('');
	const [strokeColor,setstrokeColor] = useState('black');
	const [canvasColor,setcanvasColor] = useState('white');
	const [size,setsize] = useState(2);
	const sketch = createContext('')
	const image = useContext(sketch);

	

	const navigate = useNavigate();
	const canvasRef = useRef();

    return (
    	
    	<div className='draw'>

    	<div className='options'>

    	<div className='pen'>
    	<span>
    	<input type='radio' defaultChecked name='draw' value='draw' placeholder='draw' onClick={() => { canvasRef.current.eraseMode(false) } } />
    	&nbsp; <BiSolidPencil size={25} title='Pen' />
    	</span>

    	<span>
    	<input type='radio' name='draw' value='erase' onClick={() => { canvasRef.current.eraseMode(true) } } />
    	&nbsp; <BiSolidEraser size={25} title='Eraser' />
    	</span>

    	</div>
    	
    	<div>
    	<label htmlFor="points">Pen/Eraser Size :</label>&nbsp;&nbsp;
    	<input type='range' id="points" default={1} value={size} min={1} max={50} onChange={(e) =>  {setsize(e.target.value)} }/>
    	</div>

    	<div>
    	<label>Select Pen Color :</label>&nbsp;&nbsp;
    	<input type='color' onChange={(e) => {setstrokeColor(e.target.value)} } />
    	</div>

    	<div>
    	<label>Fill Color :</label>&nbsp;&nbsp;
    	<input type='color' onChange={(e) => {setcanvasColor(e.target.value)} } />
    	</div>

    	<div className='reset_wrapper'>
    	<span className='reset' title='Undo'><span onClick={ () => {canvasRef.current.undo()} }><IoArrowUndoSharp size={25}/></span></span>
    	<span className='reset' title='Redo'><span onClick={ () => {canvasRef.current.redo()} }><IoArrowRedoSharp size={25}/></span></span>
    	</div>
    	
    	<div className='save'>
    	<button onClick={ () => {canvasRef.current.clearCanvas()} } >Clear All</button>
    	<button onClick={ () => { 
    		canvasRef.current.exportImage("png")
              .then(data => {
                setdownload(data);
                props.img(data);
                navigate('/');
              })
              .catch(e => {
                console.log(e);
              });}} >Save</button>
    	</div>

    	</div>
    	
    	<div style={{flex: 1}}>
        <ReactSketchCanvas
         style={{cursor:'crosshair'}}
         ref={canvasRef}
         height={window.innerHeight} 
         strokeWidth={size}
         eraserWidth={size}
         strokeColor={strokeColor}
         canvasColor={canvasColor}

         />
     	
     	</div>

     	{/*<img src ={download} width='300'/>*/}

    	</div>  
 		

    );
}


export default Canvas;