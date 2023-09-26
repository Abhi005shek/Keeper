import react from "react";
import './footer.css'

var foot = new Date().getFullYear();
function footer(){


return <footer><p>Copyrights Reserved &copy; {foot}</p></footer>

}

export default footer;