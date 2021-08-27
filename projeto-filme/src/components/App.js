import React,{ useState } from "react";
import Filme from "./Card"

const App = ()=>{
    
    const [filmes,setFilmes] = useState([
        {
          id:1,
          nome: "Parasita",
          imagem: "http://artecult.com/wp-content/uploads/2019/11/Parasita-Poster-428x600.jpg"
        
        },
        {
          id:2,
          nome: "Interestellar",
          imagem: "https://upload.wikimedia.org/wikipedia/pt/3/3a/Interstellar_Filme.png"
        
        },
        {
          id:3,
          nome: "Django Livre", 
          imagem: "https://upload.wikimedia.org/wikipedia/pt/8/8b/Django_Unchained_Poster.jpg"
        }
        
        
    ])
    
    return(
        <div className="App">
        <Filme filmes={filmes}/>
        </div>
        
    );
}

export default App;
