import React,{ useState , useEffect} from 'react'; 


export function Card(){
  
  const [filmes,setFilmes] = useState([
    {
      id:1,
      nome: "Parasita",
      imagem: "https://br.web.img3.acsta.net/c_310_420/pictures/19/10/04/19/58/1046648.jpg"
    
    },
    {
      id:2,
      nome: "Interestelar",
      imagem: "https://img.ibxk.com.br/2014/11/06/06152124529040.jpg?w=1120&h=420&mode=crop&scale=both"
    
    },
    {
      id:3,
      nome: "Django Livre", 
      imagem: "https://cdn.abcdoabc.com.br/Django-Livre-1_809e0fab.jpg"
    }
    
    
  ])
  const notAddMovie = e => e.preventDefault();
  
  return(
    <div className="container">
      <div className ="card-container">
      {filmes.map((f)=>(
        <section key ={f.id}>
          <h1>{f.nome}</h1>
          <img src = {f.imagem} alt ={f.nome}></img>
        </section>
  ))}
      </div>
      <div className="form">
          <form onSubmit = {notAddMovie}>
            <label for="nome">Digite o nome do filme</label>
            <input className="nome"></input>
          
            <label for="imagem">Insira a url da imagem</label>
            <input className="imagem" ></input>
            
            {/* <button onClick={()=>setFilmes(filmes.nome =nome.value )}>Enviar</button> */}
          </form> 
      </div>   
        
        
    </div>
    
  
  )
}



export default Card 