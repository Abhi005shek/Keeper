import react,{useState,createContext,useContext} from "react";
import {useNavigate} from 'react-router-dom'
import Header from "./header/Header";
import Note from "./notes/Note";
import Footer from "./footer/footer";
import Sidebar from "./sidebar/sidebar";
import CreateNote from "./createNote/createNote";
import './style.css'
import {Routes,Route} from 'react-router-dom'
import Home from './home/home'
import Search from './search/search'
import Canvas from './canvas/canvas'
import { TiTick } from "react-icons/ti";


export const theme = createContext('light');
export const listContext = createContext(''); 


function App(){

 const [themeval,setthemeval] = useState('light'); 
 const [notes,setnotes] = useState([]); 
 localStorage.setItem("notes", JSON.stringify(notes) );

 const [result,setresult] = useState(''); 
 // const [copymsg,setcopymsg] = useState(false); 

 const [image,setimage] = useState('');
 const navigate = useNavigate();
 const [list,setlist] = useState(''); 


localStorage.setItem('theme',themeval)

function addNote(note){
  setnotes( e =>{ 
   return [note,...e ];
  })
   // localStorage.setItem("notes", JSON.stringify(notes) );
   // console.log(localStorage)
}

 function setimg(e){
 	setimage(e)
 	// setthemeval(!themeval)
 }

 function clearImage(e){
 	setimage(e)
 }

 function view(e){
	setlist(e)
}

function searchInput(e){
	setresult(e);
}

function deleteNote(id){
  setnotes( (e) =>{
 return e.filter((element,index) =>  index!==id)
})
}

// function copymessage(){
// 	setcopymsg(true);
// 	setTimeout(() => setcopymsg(false),2000)
// }

 
return (
	
	<theme.Provider value={localStorage.getItem('theme')} >
 	<listContext.Provider value={list}>

	<Header setImage={() => setimg('')} search={searchInput} View={view} theme={(e) => setthemeval(e)} setlist={(e) => setlist(e)}/> 
	
	<div style={{display: 'flex'}} className={`app`}>
	
	<div className='sidebar'>
	<Sidebar />
	</div>

	<div style={{flex:1}}>

	<Routes>
	<Route  path='/' element={<Home deleteNote={deleteNote} notes={addNote} img={image}  clear={clearImage} />} />
	<Route path='draw' element={<Canvas img = {setimg} />}/>
	<Route path='search' element={<Search deleteNote={deleteNote} result={result} />}/>
	</Routes>
	</div>
	</div>
	
	
	</listContext.Provider>
	</theme.Provider>
	
	);
}
 

export default App;


