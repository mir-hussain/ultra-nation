import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Details from "./components/Details/Details";
import Error from "./components/Error/Error";
import Main from "./components/Main/Main";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='/details/:countryKey'>
          <Details />
        </Route>
        <Route path='/*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
