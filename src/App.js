import './App.css'
import { TodoWrapper } from './components/TodoWrapper';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

library.add(faPenToSquare);

function App() {
  return (
    <div className="App">
    <TodoWrapper />
    </div>
  );
}

export default App;
