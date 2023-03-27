import React from "react";
function Header(props){
    return(
       <div>
        <h1 style={{background:"black",padding:20,marginTop:0,color:"white",textTransform:"uppercase",textAlign:"center"}}>{props.head}</h1>
       </div>

    );
}
export default Header;