import React from "react"

const Bttn = ({ texto , href } )=>{
    
    return(
    <div>
        <button><a href={href} target="_blank">{texto}</a></button>
    </div>
    )
}
export default Bttn;
