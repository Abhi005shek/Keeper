import React,{useState,useContext,useEffect} from 'react';
import Header from '../header/Header'
import Sidebar from '../sidebar/sidebar'
import Note from '../notes/Note'

import {theme} from '../App'
import './search.css'

const Search = (props) => {
    
    const [result,setresult] = useState([]);
 
function deleteNote(id){
setresult((e) =>{
return e.filter((element,index) =>  index!==id)
})
props.deleteNote(id);

}

useEffect(() => {

let arr = JSON.parse(localStorage.getItem('notes'))
if(props.result.length){
let data = arr.filter( (e,index) => {
return ((e.title).toLowerCase().includes( props.result.toLowerCase()) || (e.content).toLowerCase().includes( props.result.toLowerCase()) )
})
setresult(data);
}
else if(props.result.length == ' '){
let data = arr.filter( (e,index) => {
return ((e.title == '') && (e.content == ''))
})
setresult(data);
}

},[props.result,JSON.parse(localStorage.getItem('notes'))]);

    //  console.log(props.result)
    // console.log(result)

    return (
     <div className={`search_wrapper ${useContext(theme)} `}>
        {
            result.map( (e,index) =>  <Note onDelete={deleteNote} backgroundimage={e.bgimage} background={e.background} img={e.sketch} index={index} title={e.title} content={e.content} key={index} /> )
        }
     </div>
    );
  }


export default Search;