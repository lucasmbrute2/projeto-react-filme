import React from "react";

const Filme=({ filmes })=>(
    <div>
        {filmes[0].nome}
        <img src ={filmes[0].imagem} />
    
    </div>
)

export default Filme;