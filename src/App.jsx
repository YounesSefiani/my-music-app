import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Ma musique !</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/poets_of_the_fall">Poets of the Fall</Link>
          </li>
          <li>
            <Link to="/sheena_ringo">Sheena Ringo</Link>
          </li>
          <li>
            <Link to="/rhymester">Rhymester</Link>
          </li>
          <li>
            <Link to ="/orelsan">Orelsan</Link>
          </li>
          <li>
            <Link to ="/anna_tsuchiya">Anna Tsuchiya</Link>
          </li>
          <li>
            <Link to ="/fozzy">Fozzy</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
