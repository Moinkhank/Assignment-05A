import {React} from "react";
import "./Nav.css"
function Navbar(){
   
    return(
        <div class="container">
  <img src="https://wallpapercave.com/wp/NKNjx3S.jpg" alt="Background Image" />
  <nav class="navbar">
     <div style={{width:"60%",fontSize:"30px",justifyContent:"flex-start"}}>logo</div>
     <div  style={{width:"40%"}}>
        <a href="#">HOME</a>
        <a href="#">ABOUT</a>
        <a href="#">MENU</a>
        <a href="#">ORDER</a>
        <a href="#">CONTACT</a>
     </div>
  </nav>
   
       <h1 className="text-overlay">HOME</h1>
       <div id="bottomPart">
       <h4 style={{color:"white"}}>Made with me</h4> <h3 style={{color:"red",marginLeft:"15px"}}>BY LEARNING ROBO</h3>
       </div>
       
</div>
    );
}
export default Navbar;