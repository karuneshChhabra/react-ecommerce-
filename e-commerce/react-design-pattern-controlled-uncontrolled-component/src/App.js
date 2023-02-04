import './App.css';
import ControlledComponent from './ControlledComponent';
import UnControllComponent from './UnControllComponent';


// controlledModel vs uncontolledModel

function App() {
  return (
    <div className="App">
  {/* <UnControllComponent></UnControllComponent> */}
  <ControlledComponent></ControlledComponent>
    </div>
  );
}

export default App;
