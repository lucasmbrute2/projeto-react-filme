import React,{useState} from "react";

const Formulario = ({ filmes , setFilmes }) => {
  
    const [nomeFilme,setNome] = useState('');
    const [lancamentoFilme, setLancamento]= useState('');
    const [url,setUrl]= useState('');
    const [trailerFilme,setTrailer]= useState('');
    
    
   
    const handleChangeName = (e)=>{
        setNome(e.target.value)
    }
  
    const handleChangeLancamento = (e)=>{
        setLancamento(e.target.value)
    }
  
    const handleChangeUrl = (e)=>{
        setUrl(e.target.value)
    }
    
    const handleChangeTrailer = (e)=>{
        setTrailer(e.target.value)
    }

    const HandleSubmit = (e) =>{
        e.preventDefault()
        const posi = filmes.map((f,index)=> index-1)
        setFilmes([
            ...filmes,
            {
                id: posi.id+1,
                nome: nomeFilme,
                lancamento: lancamentoFilme,
                imagem: url,
                trailer: trailerFilme
            }
        ])
    }
  
  
    return (
    <div className="container-form">
      <form onSubmit={HandleSubmit}>
        <label>Nome </label>
        <input value={nomeFilme} onChange={handleChangeName}></input>
        <br></br>

        <label>Lançamento </label>
        <input value ={lancamentoFilme} onChange = {handleChangeLancamento}></input>
        <br></br>

        <label>Imagem </label>
        <input value ={url} onChange ={handleChangeUrl}></input>
        <br></br>

        <label>Trailer </label>
        <input value ={trailerFilme} onChange={handleChangeTrailer}></input>
        <br></br>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Formulario;
