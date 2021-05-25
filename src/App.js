import AppBar from "./Components/AppBar";
import Posts from "./Components/Posts";
import Comments from "./Components/Comments";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";



function App() {
  
  return (
    <div className="App">

      <Router>
      <AppBar />
      <main>
        <Switch>
          <Route path="/" exact>
            <Posts />
          </Route>
          <Route path="/comments/:id" >
            <Comments />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
    </div>
  );
}

export default App;
