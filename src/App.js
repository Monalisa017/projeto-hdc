import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld'
import Frase from './components/Frase';

function App() {

  const name = 'Monalisa'

  const newName = name.toUpperCase()

  const url = 'https://i.pinimg.com/236x/7a/a9/bd/7aa9bdb576fbbb41a48cb6bbd48c84bf.jpg'

  function soma (a, b){
    return a + b
  }
  return (
    <div className="App">
      <h1>React</h1>
      <h2>Alterando o JSX</h2>
      <h3>Olá {name} </h3>
      <h3> Olá { newName} </h3>
      <h3> Olá { newName} </h3>
      <h3>Soma = { soma(5, 5) }</h3>
      <div>
      <img src={url} className="App-logo" alt="logo" />
      <HelloWorld />
      <Frase />
      </div>
      
    </div>
  );
}

export default App;
