import styles from './css/Pessoa.module.css'

function Pessoa({name, img, age, occupation}){
   return(
      <div className={styles.fraseContainer}>
         <img src={img} alt={name} />
         <h2>Nome: {name}</h2>
         <p className={styles.fraseContent}>Idade: {age}</p>
         <p className={styles.fraseContent}>Profissão: {occupation}</p>
      </div>
   )
}


export default Pessoa