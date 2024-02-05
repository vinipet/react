function Form () {

   function cadastrarUsuario(e) {
      e.preventDefault()
      alert('foi')
   }

   return (
      <form onSubmit={cadastrarUsuario}>
         <input type='text' placeholder="Nome:"></input>
         <input type='submit' value='Cadastrar'></input>
      </form>
   )
}

export default Form