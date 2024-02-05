import { useState } from "react"

function Condicional(props) {

   const [email , setEmail] = useState()
   const [userEmail, setUserEmail] = useState()

   function EnviarMail(e) {
      e.preventDefault()
      setUserEmail(email)
      alert(email)
   }

   return (
      <>
         <h1>Cadastre-se</h1>
         <form>
            <input type="email" placeholder="Digite seu e-mail..." onChange={(e) => setEmail(e.target.value)} />
            <button type="submit" onClick={EnviarMail}>Enviar e-mail</button>
         </form>
         <h1>{userEmail}</h1>
      </>
   )
}

export default Condicional