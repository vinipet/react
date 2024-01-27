import Item from "./item"

function List(props){
   return(
      <>
         <h1> Minha lista</h1>
         <ul>
            <Item marca='HeyN Apple!!'  lancamento={1}/>
            <Item/>
            <Item marca='ALL MY FELLAS'  lancamento={11}/>
            <Item marca='Piripim pim pim'  lancamento={111}/>
         </ul>
      </>
   )
}

export default List