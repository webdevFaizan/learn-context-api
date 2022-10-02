import './App.css';
import ToggleState from './Context/ToggleText/ToggleState';
import ParentButton from './Components/ParentButton';

function App() {
  return (
    <ToggleState>
      <ParentButton/>
    </ToggleState>
  );
}

export default App;
