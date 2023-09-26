import React,{useState,useRef,useContext} from "react";
import {useNavigate} from 'react-router-dom'
import './createNote.css'
import {IoAddCircle,IoBrush,IoImageOutline } from 'react-icons/io5'
import { BiSolidPaintRoll,BiSolidTrash } from "react-icons/bi";
import { MdDoNotDisturb } from "react-icons/md";
import { GiPaintBucket } from "react-icons/gi";

import createImage from '../canvas/canvas'
import {theme} from '../App'

import notes from '../images/notes.svg'
import video from '../images/video_dark.svg'
import grocery from '../images/grocery_dark.svg'
import place from '../images/places_dark.svg'
import food from '../images/food_dark.svg'
import recipe from '../images/recipe.svg'
import celebration from '../images/celebration.svg'
import music from '../images/music.svg'
import travel from '../images/travel.svg'




export default function CreateNote(props){
    
    const [title,settitle] =   useState("");
    const [content,setcontent] = useState("");
    const [display,setdisplay] =   useState(false); 
    const [sketch,setsketch] =   useState(props.img); 
    const [bgval,setbgval] =   useState('');
    const [bgimageval,setbgimageval] =   useState('');


    const [bg,setbg] =   useState(false);

    const navigate = useNavigate();

    const fileref = useRef();
    
    function changetitle(e){
    	settitle(e.target.value);
    }
    function changecontent(e){
    	setcontent(e.target.value);
    }

    function add(e){
       props.onAdd({bgimage: bgimageval, background:bgval, sketch: sketch , title: title, content: content});
       setbgimageval('');
       setbgval('');
       settitle("");
       setcontent("");
       setsketch('')
       props.photo('')
        e.preventDefault();
}

    function Press(e){
      
      if(e.key == "Enter"){
        add(e);
      }
    }

    function preview(){
        const [file] = fileref.current.files
        console.log(fileref.current.files)
         if (file) {
        setsketch(URL.createObjectURL(file))
         // ref.current.src =  URL.createObjectURL(file)
  }
    }

    
	return (<div className={`createNote ${useContext(theme)}`}>
		  		<div className='notewrapper' style={{backgroundImage: `url(${bgimageval})`, backgroundColor: bgval }}>
            { sketch &&  <div className='doodle' ><img src = {sketch}  />
                <div className='deleteSketch' onClick={() => setsketch('') }><span><BiSolidTrash color='red' size={20}/></span></div></div>  }
		  		{ display && <input type="text" placeholder="Title"  onChange={changetitle} value={title}/> }
		  		<textarea autoFocus onClick={() => setdisplay(true)} onInput={() => setdisplay(true)} className="notecontent" type="text" placeholder="Take a note..." onChange={changecontent} value={content}/>
		  		
                {display && <div className='btns'>

                <div className='background_wrapper'>
                <button className="Addbtn" onClick={()=>{ setbg(!bg) }} title='Background'>
                <GiPaintBucket size={22} color='grey' /></button>
                
                

                </div>
                

                <span className='localimage_wrapper' title='Select Image'><input className='localimage' type='file' ref={fileref} accept="image/*" onChange={ preview }/>
                <span><IoImageOutline size={27} color='grey'/></span>              
                </span>

                <button className="Addbtn" title='Doodle' onClick={() => { navigate('/draw'); props.clear('') } }>
                <IoBrush size={25} color='grey'/>              
                </button>

                <button title='Add Note' className="Addbtn" onClick={add} onKeyPress={Press}>
                <IoAddCircle size={40}/></button>

                </div> }

                <div className='background_colors' style={{display: bg ? 'block' : 'none'}}>
                    <ul className='colors'>
                    <li onClick={() => setbgval('transparent') } title='No color' className='bg_color' style={{backgroundColor: 'transparent'}}><span><MdDoNotDisturb size={17} color='black' /></span></li>
                    <li onClick={() => setbgval('#FAAFA8') } title='Coral' className='bg_color' style={{backgroundColor: '#FAAFA8'}}></li>
                    <li onClick={() => setbgval('#F39F76') } title='Peach' className='bg_color' style={{backgroundColor: '#F39F76'}}></li>
                    <li onClick={() => setbgval('#30336b') } title='Deep Koamaru' className='bg_color' style={{backgroundColor: '#30336b'}}></li>
                    <li onClick={() => setbgval('#D3BFDB') } title='Dusk' className='bg_color' style={{backgroundColor: '#D3BFDB'}}></li>
                    <li onClick={() => setbgval('#4B443A') } title='Clay' className='bg_color' style={{backgroundColor: '#4B443A'}}></li>
                    </ul>

                    <ul className='bgimages'>
                    <li onClick={() => setbgimageval('') } title='No Background' className='bg_color' style={{backgroundImage: ''}}><span><MdDoNotDisturb size={17} color='black' /></span></li>
                    <li onClick={() => setbgimageval(notes) } title='Notes' className='bg_color' style={{background: `url(${notes})` }}></li>
                    <li onClick={() => setbgimageval(food) } title='Food' className='bg_color' style={{backgroundImage: `url(${food})` }}></li>
                    <li onClick={() => setbgimageval(video) } title='Video' className='bg_color' style={{backgroundImage: `url(${video})` }}></li>
                    <li onClick={() => setbgimageval(grocery) } title='Grocery' className='bg_color' style={{backgroundImage: `url(${grocery})` }}></li>
                    <li onClick={() => setbgimageval(place) } title='Places' className='bg_color' style={{backgroundImage: `url(${place})` }}></li>
                    <li onClick={() => setbgimageval(recipe) } title='Recipe' className='bg_color' style={{backgroundImage: `url(${recipe})` }}></li>
                    <li onClick={() => setbgimageval(music) } title='Music' className='bg_color' style={{backgroundImage: `url(${music})` }}></li>
                    <li onClick={() => setbgimageval(celebration) } title='Celebration' className='bg_color' style={{backgroundImage: `url(${celebration})` }}></li>
                    <li onClick={() => setbgimageval(travel) } title='Travel' className='bg_color' style={{backgroundImage: `url(${travel})` }}></li>
                    </ul>
                    
                </div>

		  		</div>

			</div>);
}