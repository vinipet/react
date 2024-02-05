function Eventos (){

   function meuEvento(){
      alert('foi ')
   }

   return (
      <>
         <p>Clique para ativar um evento.</p>
         <button onClick={meuEvento}>Ativar!!!</button>
      </>
   )
}

export default Eventos