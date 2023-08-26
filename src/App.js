import {Switch,Route} from "react-router-dom"
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";

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
