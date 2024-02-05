import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/list';
import Eventos from './components/eventos';
import Form from './components/form';
function App() {

return (
   <div className="App">
    <Form/>
    <List />
    <SayMyName name='Vinipet  '/>
    <SayMyName name='cu de vrido  '/>
    <SayMyName name='é os piá nao tem jeito'/>
    <Pessoa 
      name= 'vinipet'  
      age= '33'
      occupation='estudante'
      img='https://via.placeholder.com/150'
    />
   <Eventos />
   </div>
  );

}

export default App;
