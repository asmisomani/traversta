import Home from "./components/Home";
import Nav from "./components/Nav";
import "/Users/abc/Desktop/Web Development/ASPER/traversta/node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Route , Redirect,Switch } from "react-router-dom";
import BookNow from "./components/BookNow";
import AboutUs from "./components/AboutUs";
import OurTeam from "./components/OurTeam";
import FindUs from "./components/FindUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Nav/>
      <Switch>
      <Route path="/" exact>
      <Home/>
      </Route>
      <Route path="/booknow" exact>
      <BookNow/>
      </Route>
      <Route path="/aboutus" exact>
      <AboutUs/>
      </Route>
      <Route path="/ourteam" exact>
      <OurTeam/>
      </Route>
      <Route path="/findus" exact>
      <FindUs/>
      </Route>
      <Route path="*">
        <Redirect path="/" exact/>
      </Route>
      </Switch>
      <Footer/>
    </div>
  );
}


export default App;


