import { Switch, Route } from "react-router-dom";
import CharactersList from "./pages/CharactersList";
import Character from "./pages/Character";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <CharactersList />
        </Route>
        <Route path="/:id">
          <Character />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
