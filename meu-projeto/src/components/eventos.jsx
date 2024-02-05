import Button from "./button"

function Eventos (){

   function meuEvento(){
      alert('foi ')
   }

   return (
      <>
         <p>Clique para ativar um evento.</p>
         <Button event={meuEvento} text='Primeiro evento'/>
      </>
   )
}

export default Eventos