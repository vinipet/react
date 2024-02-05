import { useState } from "react"

function Form () {

   function cadastrarUsuario(e) {
      e.preventDefault()
      alert(`O usuario ${name} foi cadastrado com sucesso Usando a senha ${password}`)
   }

const [name, setName] = useState()
const [password, setPassword] = useState()

   return (
      <>
      <h1>Meu formulario</h1>
      <form onSubmit={cadastrarUsuario}>
         <label htmlFor="name">Nome:</label>
         <input 
            type='text' 
            id="name" 
            name="name" 
            placeholder="Nome:"
            onChange={(e) => setName(e.target.value)}
         ></input><br/>
         
         <label htmlFor="senha"> Senha:</label>
         <input 
            type='password' 
            id="senha" 
            name="senha"
            placeholder="Digite sua senha"
            onChange={(e) =>setPassword(e.target.value)}
         ></input>

         <input type='submit' value='Cadastrar'></input>
      </form>
      </>   
   )
}

export default Form