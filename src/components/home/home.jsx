import react,{useState,createContext,useContext} from "react";
import Header from "../header/Header";
import Note from "../notes/Note";
import Footer from "../footer/footer";
import Sidebar from "../sidebar/sidebar";
import CreateNote from "../createNote/createNote";
import '../style.css'
import {theme,listContext} from '../App'


export default function Home(props){

	const [notes,setarr] = useState([]); 
	const [photo,setphoto] = useState(props.img); 
 // localStorage.setItem("notes", JSON.stringify(notes) );
 const list = useContext(listContext);

// console.log(notes);
 // console.log('theme --> ', useContext(theme));

// function addNote(note){
//   setarr( e =>{ 
//    return [...e , note];
//   })
   // localStorage.setItem("notes", JSON.stringify(notes) );
   // console.log(localStorage)
// }

// function deleteNote(id){
//   setarr( (e) =>{
//  return e.filter((element,index) =>  index!==id)
// })
// }

// .sort((a, b) => a.age - b.age)
// console.log('Home');
 
    return (
  <div className= {` home ${useContext(theme)}`} >
	
	<div className='notebar'>
	<CreateNote onAdd = {props.notes} clear={props.clear} img={props.img} photo={(e) => setphoto(e)}/> 
	<div className='wrapper'><div className="Records">{ JSON.parse(localStorage.getItem('notes')).map( (e,index) =>  <Note  backgroundimage={e.bgimage} background={e.background} img={e.sketch} onDelete={props.deleteNote} index={index} title={e.title} content={e.content} key={index} /> ) }
	 </div>
	 </div>

	
	</div>


	</div>
	
    );
}
