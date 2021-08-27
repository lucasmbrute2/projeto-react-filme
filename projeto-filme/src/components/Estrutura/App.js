import React,{ useState } from "react";
import Filme from "../Banner/Banner"

const App = ()=>{
    
    const [filmes,setFilmes] = useState([
        {
            id:1,
            nome: "Parasita",
            lancamento: "Em breve nos cinemas",
            imagem: "http://artecult.com/wp-content/uploads/2019/11/Parasita-Poster-428x600.jpg",
            trailer: "https://www.youtube.com/watch?v=m4jfE-TxC24"
        },
        {
            id:2,
            nome: "Interestellar",
            lancamento: "Em breve nos cinemas",
            imagem: "https://upload.wikimedia.org/wikipedia/pt/3/3a/Interstellar_Filme.png",
            trailer: "https://www.youtube.com/watch?v=frD_IiY_A3E"
        },
        {
            id:3,
            nome: "Django Livre", 
            lancamento: "Em breve nos cinemas",
            imagem: "https://upload.wikimedia.org/wikipedia/pt/8/8b/Django_Unchained_Poster.jpg",
            trailer: "https://www.youtube.com/watch?v=0fUCuvNlOCg"
        }   
        
        
    ])
    
    return(
        <div 
        className="App" 
        style={{
            display: "flex",
            justifyContent: "center"
        }}
        >
        
        <Filme filmes={filmes}/>
        </div>
        
    );
}

export default App;
