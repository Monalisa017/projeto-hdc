import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld'
import Frase from './components/Frase';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  const name = 'Monalisa'

  const newName = name.toUpperCase()

  const url = 'https://i.pinimg.com/236x/7a/a9/bd/7aa9bdb576fbbb41a48cb6bbd48c84bf.jpg'

  const nome="Maria"

  function soma (a, b){
    return a + b
  }
  return (
    <div className="App">
      <Pessoa 
        nome="Monalisa"
        idade="28"
        profissao="Dev"
        foto="https://images.educamaisbrasil.com.br/content/noticias/quem-faz-analise-de-sistemas-e-programador_g.jpg"
        />
      </div>
  );
}

export default App;
