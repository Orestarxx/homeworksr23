
import './App.css';

import Simpsons from "./components/users/Simpsons";
import RickAndMortyCharacters from "./components/rickAndMorty/RickAndMortyCharacters";

function App() {
  return (
    <div className="App">
     <Simpsons/>
        <RickAndMortyCharacters/>
    </div>
  );
}

export default App;
