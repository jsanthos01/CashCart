import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from './components/ProductListing'
import ProductDetails from './components/ProductDetails'
import Shopping from './components/Shopping'
import Navbar from './components/Navbar';
// import SignInForm from "./components/SignInPages/index.js";
// import {AuthProvider} from './contexts/AuthContext'
function App() {
  return (
    <div className="App">
      {/* <AuthProvider> */}
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={ProductListing} />
            <Route path="/men-clothing" exact component={ProductListing} />
            <Route path="/women-clothing" exact component={ProductListing} />
            <Route path="/jewelery" exact component={ProductListing} />
            <Route path="/electronics" exact component={ProductListing} />
            <Route path="/product/:productId" exact component={ProductDetails} />
            <Route path="/cart" exact component={Shopping} />
            {/* <Route path="/sign-up" component={SignInForm} /> */}
            {/* <Route path="/sign-in" component={SignInForm} /> */}
            <Route>404 Not Found!</Route>
          </Switch>
        </Router>
      {/* </AuthProvider> */}
    </div>
  );
}

export default App;
