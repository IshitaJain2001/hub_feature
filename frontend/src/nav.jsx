import { Link } from "react-router-dom"

function Navbar(){

return(
    <div className="nav">
 <Link to="/"><button>home</button> </Link>   
  <Link to="/services"> <button>services</button> </Link> 
    <button>about</button>
    </div>
)
}

export default Navbar