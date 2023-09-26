import react,{useState,useContext} from "react";
import {useNavigate} from 'react-router-dom'
import './header.css';
import { IoReorderThree,IoMoon,IoGridOutline,IoSearch } from 'react-icons/io5';
import { IoMdSunny,IoIosListBox } from 'react-icons/io';
import { RxCross2 } from "react-icons/rx";
import {theme} from '../App'
import {listContext} from '../home/home'

function Heading(props){

const img = 'https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png';

const [themeContext,setthemeContext] = useState(false);
const [view,setview] = useState(false);
const [search,setsearch] = useState('');
const navigate = useNavigate()

props.search(search)

// const themeValue = useContext(theme);
// console.log('themeContext ==>', themeContext);
 // console.log('list --> ', useContext(listContext));
// props.search(search);

return (<header className={`${useContext(theme)}`}>
<div style={{display: 'flex',alignItems: 'center'}} >
<span className='icons' title='Main Menu'><IoReorderThree size={30}/></span>
<img className='img' src={img} />
<h2 title='Home' style={{cursor:'pointer'}} onClick={() =>{ props.setImage(); setsearch(''); navigate('/'); }}>Keeper</h2>
</div>


<div className='search'>
<IoSearch size={25} title='Search'/>
<input placeholder='Search' value={search} onChange={(e) => { setsearch(e.target.value); navigate('search');  }}/>
 <span><RxCross2 size={20} title='Search' onClick={()=> { setsearch(''); navigate('/'); }}/></span>
</div>

<div className='headericons'>
<span onClick={ () => {
setview(!view);
view ?  props.setlist('')  : props.setlist('view')  } }>

{view ? <IoGridOutline title='Grid View' size={25}/> : <IoIosListBox title='List View' size={25}/>}
</span>

<span onClick={ () => { setthemeContext(!themeContext);
themeContext ?  props.theme('light') : props.theme('dark');
 }}>
{themeContext ?  <IoMdSunny size={25} title='light Mode'/> : <IoMoon size={25} title='Dark Mode'/>}
</span>
</div>
</header>
);
}

export default Heading;