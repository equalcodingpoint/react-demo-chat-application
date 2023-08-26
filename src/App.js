import {Switch,Route} from "react-router-dom"
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        {/* <Route exact path="/edit/:id" component={Edit} />
        <Route exact path="/view/:id" component={Details} /> */}
      </Switch>
    </>
  );
}

export default App;
