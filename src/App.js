import { Switch, Route } from "react-router-dom";
import CharactersList from "./pages/CharactersList/CharactersList";
import Character from "./pages/Character/Character";
import Search from "./pages/Search/Search";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <CharactersList />
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>
        <Route path="/:id">
          <Character />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
