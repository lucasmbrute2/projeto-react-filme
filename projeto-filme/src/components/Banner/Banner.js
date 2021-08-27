import React from "react";
import './Banner.css'

const Filme=({ filmes })=>(
    
    <div className ="container">
        {filmes.map((f)=>(
            <li key={f.id} className="movie-list"> 
                <div>
                    <h2 className ="movie-title">{f.nome}</h2>
                    <p className="movie-desc">{f.lancamento}</p>
                </div>
                <img src={f.imagem}/>
                <a href={f.trailer} target="_blank" className='bttn-trailer'>Ver trailer</a>
            </li>
            ))}
    </div>
        
)

export default Filme;