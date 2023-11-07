import './App.css';
import {Link, Outlet} from "react-router-dom";
import Poets from './components/poets';

function App() {

  return (
    <div>
      <h1>Ma musique !</h1>
      <nav>
        <ul>
          <li>Poets of the Fall</li>
          <li>Sheena Ringo</li>
          <li>Rhymester</li>
        </ul>
      </nav>
      <Poets/>
    </div>
    
  )
}

export default App;
