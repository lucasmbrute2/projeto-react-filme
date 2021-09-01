import React,{ useState } from "react";
import Formulario from "../Formulario/form"
import "./App.css"
const App = ()=>{
    
    const [filmes,setFilmes] = useState([
        {
            id:1,
            nome: "Parasita",
            lancamento: "Em breve nos cinemas",
            imagem: "https://img.elo7.com.br/product/zoom/2D25BD4/big-poster-filme-parasita-2019-lo004-tamanho-90x60-cm-poster-de-filme.jpg",
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
            id:9,
            nome: "Django Livre", 
            lancamento: "Em breve nos cinemas",
            imagem: "https://upload.wikimedia.org/wikipedia/pt/8/8b/Django_Unchained_Poster.jpg",
            trailer: "https://www.youtube.com/watch?v=0fUCuvNlOCg"
        }   
        
        
    ])
    
    const handleDelete = (id)=>{
        setFilmes(filmes.filter((e)=> id !=e.id ))

    }


    
    
    
    return(
    <div className="App">
        
            <Formulario filmes = {filmes} setFilmes ={setFilmes} />
            <div className ="container-card">
                <ul className="container-card__ul">
                {filmes.map((f)=>(
                    <li key={f.id} className="container-card__movie-list"> 
                        <button>{f.id}</button>
                        <div>
                            <h2 className ="movie-title">{f.nome}</h2>
                            <p className="movie-desc">{f.lancamento}</p>
                        </div>
                        <div>
                            <img src={f.imagem} alt= {f.nome}/>
                            <button className='bttn-trailer'><a href={f.trailer} target="_blank"  rel="noreferrer">Ver trailer</a></button>
                            <button className ="bttn-exlcuir" type='button' onClick={()=>handleDelete(f.id)}>Excluir</button>
                        </div>
                    </li>
                    ))}
                        
                </ul>
            </div>
    </div>
        
    );
}

export default App;
