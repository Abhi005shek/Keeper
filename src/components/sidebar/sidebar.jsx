import react,{useContext} from "react";
import {useNavigate} from 'react-router-dom'
import {theme} from '../App'

import './sidebar.m.css'
import { IoBulbOutline } from 'react-icons/io5';
import { BiArchiveIn,BiEditAlt,BiSolidTrash } from "react-icons/bi";

const Sidebar = (props) => {

	const navigate = useNavigate()

    return (
  <div className={ `sidebar_wrapper ${useContext(theme)}`}>
  <ul>
	<li className='selected'><span className='icons'><IoBulbOutline size={25}/></span> Notes</li>
	<li><span className='icons'><BiArchiveIn size={25}/></span> <span>Archive</span></li>
	<li><span className='icons'><BiEditAlt size={25}/></span> <span> Edit Label</span></li>
	<li><span className='icons'><BiSolidTrash size={25}/></span> <span> Trash</span></li>
	</ul>
	</div>
    );
}

export default Sidebar;