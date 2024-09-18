import './App.css';
import { Timer } from './Timer';
import Todo from './Todo';
import ToggleMessage from './ToggleMessage';

function App() {


  return (
    <>
      <Todo></Todo>
      <ToggleMessage />
      <Timer></Timer>
    </>
  );
}

export default App;
